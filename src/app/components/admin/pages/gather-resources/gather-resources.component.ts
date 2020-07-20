import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminBiz } from 'src/app/components/admin/biz/admin.biz';
import { ClrLoadingState } from '@clr/angular';
import { GatherResource } from 'src/shared/models/gather-resources.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GatheringResourceTypeEnums, GatheringResourceCategoryEnums, GatheringResourceSizeEnums } from 'src/shared/enums/gather-resources.enum';
import Locations from '../../../../../assets/locations.json';
import Regions from '../../../../../assets/regions.json'
import { SafeSubscription } from 'src/shared/models/safe-subscription.model';

@Component({
  selector: 'app-gather-resources',
  templateUrl: './gather-resources.component.html',
  styleUrls: ['./gather-resources.component.scss'],
  providers: [SafeSubscription]
})
export class GatherResourcesComponent implements OnInit, OnDestroy {
  public addBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  public editBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  public deleteBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  public selectedResource: GatherResource = new GatherResource();
  public newResource: GatherResource = new GatherResource();
  public gridFilter = '';
  public detailModal = false;
  public addModal = false;
  public resources = [];
  public Locations = [];
  public types = ['fishing', 'mining'];
  public sizes = ['small','medium','large','giant'];
  public categories = ['fish', 'grain', 'mineral', 'jewel','vegetable', 'shellfish', 'unique', 'wheat', 'crustacean','fruit', 'other', 'mollusk']
  public Regions = Regions;
  public AddForm: FormGroup;
  public EditForm: FormGroup;
  public selectedRegion = null;

  constructor(
    private adminBiz: AdminBiz,
    private fb: FormBuilder,
    private safeSub: SafeSubscription
    ) { }

  ngOnInit(): void {
    this.adminBiz.getAllResources();
    this.initSubscription();
    this.initForm();
    this.initEditForm();
  }

  
  initSubscription() {
    this.safeSub.subs = [
      this.adminBiz.resources$.subscribe((res: GatherResource[]) => {
        this.resources = [...res];
      }),
      this.adminBiz.deleteSuccess.subscribe((res) => {
        this.deleteBtnState = ClrLoadingState.SUCCESS;
        setTimeout(() => {
          this.closeModal();
        }, 1000);
      }),
      this.adminBiz.createSuccess.subscribe((res) => {
        this.addBtnState = ClrLoadingState.SUCCESS,
        setTimeout(() => {
          this.closeModal();
        }, 1000);
      }),
      this.adminBiz.editSuccess.subscribe((res) => {
        this.editBtnState = ClrLoadingState.SUCCESS,
        setTimeout(() => {
          this.closeModal();
        }, 1000);
      })
    ]
  }

  initForm() {
    this.AddForm = this.fb.group({
      name: ['', Validators.required],
      type: [GatheringResourceTypeEnums.Mining, Validators.required],
      category: [GatheringResourceCategoryEnums.Unique, Validators.required],
      size: [GatheringResourceSizeEnums.Small,Validators.required],
      icon: [''],
      rarity: [0],
      region: [[], Validators.required],
      locations: [[], Validators.required]
    })
  }

  initEditForm() {
    this.EditForm = this.fb.group({
      name: [this.selectedResource.name ? this.selectedResource.name : '', Validators.required],
      type: [this.selectedResource.type ? this.selectedResource.type : '', Validators.required],
      category: [this.selectedResource.class ? this.selectedResource.class.category : '', Validators.required],
      size: [this.selectedResource.class ? this.selectedResource.class.size : '', Validators.required],
      icon: [this.selectedResource.icon ? this.selectedResource.icon : ''],
      rarity: [this.selectedResource.rarity ? this.selectedResource.rarity : 0],
      region: [this.selectedResource.region[0] ? this.selectedResource.region[0] : '', Validators.required],
      locations: [this.selectedResource.location ? this.selectedResource.location : [], Validators.required]
    })
    this.EditForm.get('name').disable();
    this.selectedRegion = this.selectedResource.region[0];
    this.onRegionSelect(this.selectedRegion);
  }

  onResourceSelect(res) {
    this.selectedResource = res;
    this.initEditForm();
    this.detailModal = true;
  }

  deleteResource() {
    this.deleteBtnState = ClrLoadingState.LOADING;
    this.adminBiz.deleteResources(this.selectedResource.id);
  }

  onAddModal() {
    this.addModal = true;
  }

  onAdd() {
    this.addBtnState = ClrLoadingState.LOADING
    const formData = this.AddForm.getRawValue();
    const newRes: GatherResource = {
      id: '',
      name: formData.name,
      rarity: formData.rarity,
      type: formData.type,
      icon: formData.icon,
      class: {
        category: formData.category,
        size: formData.size
      },
      region: [formData.region],
      location: [...formData.locations]
    }
    this.adminBiz.createResource(newRes);
  }

  onRegionSelect(event) {
    if (!event) {
      this.selectedRegion = null;
      this.Locations = [];
      this.AddForm.get('locations').reset();
    }
    this.selectedRegion = event;
    this.Locations = Locations.filter(loc => loc.region === event);
  }

  onEdit() {
    this.editBtnState = ClrLoadingState.LOADING
    const formData = this.EditForm.getRawValue();
    const newRes: GatherResource = {
      id: this.selectedResource.id,
      name: formData.name,
      rarity: formData.rarity,
      type: formData.type,
      icon: formData.icon,
      class: {
        category: formData.category,
        size: formData.size
      },
      region: [formData.region],
      location: [...formData.locations]
    }
    this.adminBiz.updateResource(newRes);
  }

  closeModal() {
    this.detailModal = false;
    this.addModal = false;
    this.selectedRegion = null;
  }

  ngOnDestroy() {
    this.closeModal();
    this.safeSub.unsubscribeAll();
  }

  addFormValid(): boolean {
    return this.AddForm.valid;
  }

  editFormValid(): boolean {
    return this.EditForm.valid;
  }

}
