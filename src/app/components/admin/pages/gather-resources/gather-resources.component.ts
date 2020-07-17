import { Component, OnInit } from '@angular/core';
import { AdminBiz } from 'src/app/components/admin/biz/admin.biz';
import { ClrLoadingState } from '@clr/angular';
import { GatherResource } from 'src/shared/models/gather-resources.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GatheringResourceTypeEnums, GatheringResourceCategoryEnums, GatheringResourceSizeEnums } from 'src/shared/enums/gather-resources.enum';
import Locations from '../../../../../assets/locations.json';
import Regions from '../../../../../assets/regions.json'

@Component({
  selector: 'app-gather-resources',
  templateUrl: './gather-resources.component.html',
  styleUrls: ['./gather-resources.component.scss']
})
export class GatherResourcesComponent implements OnInit {
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
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.adminBiz.getAllResources().subscribe((res: any[]) => {
      this.resources = [...res];
    })
    this.initForm();
    this.initEditForm();
  }

  initForm() {
    this.AddForm = this.fb.group({
      name: [''],
      type: [GatheringResourceTypeEnums.Mining],
      category: [GatheringResourceCategoryEnums.Unique],
      size: [GatheringResourceSizeEnums.Small],
      url: [''],
      rarity: [0],
      region: [[]],
      locations: [[]]
    })
  }

  initEditForm() {
    this.EditForm = this.fb.group({
      name: [this.selectedResource.name ? this.selectedResource.name : ''],
      type: [this.selectedResource.type ? this.selectedResource.type : ''],
      category: [this.selectedResource.class ? this.selectedResource.class.category : ''],
      size: [this.selectedResource.class ? this.selectedResource.class.size : ''],
      url: [this.selectedResource.url ? this.selectedResource.url : ''],
      rarity: [this.selectedResource.rarity ? this.selectedResource.rarity : 0],
      region: [this.selectedResource.region[0] ? this.selectedResource.region[0] : ''],
      locations: [this.selectedResource.location ? this.selectedResource.location : []]
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
    this.adminBiz.deleteResources(this.selectedResource.name).subscribe((res) =>{
      console.log(res);
      this.deleteBtnState = ClrLoadingState.SUCCESS;
      setTimeout(() => {
        this.closeModal();
        this.ngOnInit();
      }, 1000);
    })
  }

  onAddModal() {
    this.addModal = true;
  }

  onAdd() {
    this.addBtnState = ClrLoadingState.LOADING
    const formData = this.AddForm.getRawValue();
    const newRes: GatherResource = {
      name: formData.name,
      rarity: formData.rarity,
      type: formData.type,
      url: formData.url,
      class: {
        category: formData.category,
        size: formData.size
      },
      region: [formData.region],
      location: [...formData.locations]
    }
    this.adminBiz.createResource(newRes).subscribe(() => {
      this.addBtnState = ClrLoadingState.SUCCESS,
      setTimeout(() => {
        this.closeModal();
        this.ngOnInit();
      }, 1000);
    });
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
      name: formData.name,
      rarity: formData.rarity,
      type: formData.type,
      url: formData.url,
      class: {
        category: formData.category,
        size: formData.size
      },
      region: [formData.region],
      location: [...formData.locations]
    }
    this.adminBiz.updateResource(newRes).subscribe(() => {
      this.editBtnState = ClrLoadingState.SUCCESS,
      setTimeout(() => {
        this.closeModal();
        this.ngOnInit();
      }, 1000);
    });
  }

  closeModal() {
    this.detailModal = false;
    this.addModal = false;
    this.selectedRegion = null;
  }
}
