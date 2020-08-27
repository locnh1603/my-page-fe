import { Component, OnInit, OnDestroy } from '@angular/core';
import { GatherCuisine, GatherCuisineClassBuff } from 'shared/models/gather-cuisines.model';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';
import { SafeSubscription } from 'shared/models/safe-subscription.model';
import { AdminBiz } from '@modules/admin/biz/admin.biz';
import { CraftRecipe, SimpleRecipe } from 'shared/models/gather-craft.model';
import { GatherResource } from 'shared/models/gather-resources.model';

@Component({
  selector: 'app-gather-cuisines',
  templateUrl: './gather-cuisines.component.html',
  styleUrls: ['./gather-cuisines.component.scss'],
  providers: [SafeSubscription]
})
export class GatherCuisinesComponent implements OnInit, OnDestroy {

  public addBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  public editBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  public deleteBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  public selectedCuisine: GatherCuisine = null;
  public newCuisine: GatherCuisine = new GatherCuisine();
  public gridFilter = '';
  public detailModal = false;
  public addModal = false;
  public AddForm: FormGroup;
  public EditForm: FormGroup;
  public cuisines: GatherCuisine[] = [];
  public SimpleRecipeListBase: SimpleRecipe[] = [];
  public SimpleRecipeList: SimpleRecipe[] = [];
  public selectedRecipe: SimpleRecipe[] = [];
  public resources: GatherResource[] = [];
  public sizes = ['small','medium','large','giant'];
  public categories = ['fish', 'grain', 'mineral', 'jewel','vegetable', 'shellfish', 'unique', 'wheat', 'crustacean','fruit', 'other', 'mollusk']
  public addbuffState = '';
  public editBuffState = '';
  
  constructor(
    private safeSub: SafeSubscription,
    private adminBiz: AdminBiz,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.adminBiz.getAll();
    this.initSubscription();
    this.initForm();
  }

  closeModal() {
    this.detailModal = false;
    this.addModal = false;
  }

  initSubscription() {
    this.safeSub.subs = [
      this.adminBiz.cuisines$.subscribe((res: GatherCuisine[]) => {
        this.cuisines = [...res]
      }),
      this.adminBiz.resources$.subscribe((res: GatherResource[]) => {
        this.resources = [...res];
        this.SimpleRecipeListBase = res.map(resource => {
          return {
            resourceId: resource.id,
            resourceName: resource.name
          }
        });
        this.SimpleRecipeList = [...this.SimpleRecipeListBase];
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
      category: [''],
      size: [''],
      categoryValue: [0],
      sizeValue: [0],
      collectRate: [0, Validators.required],
      fishingRate: [0,Validators.required],
      recipe: this.fb.array([])
    })
  }

  initFormWithData(entity: GatherCuisine) {
    this.EditForm = this.fb.group({
      id: [entity.id],
      name: [entity.name, Validators.required],
      buff: [entity.buff, Validators.required],
      recipe: this.generateRecipeFormGroupFromData(entity.recipe)
    })
  }

  generateRecipeFormGroupFromData(recipe: CraftRecipe[]) {
    return this.fb.array(recipe.map(ing => this.generateNewRecipeFormControlsFromData(ing)));
  }

  onAddFormRecipeAdd(event) {
    this.addFormRecipe.push(this.generateNewRecipeFormControls(event));
  }

  onAddFormRecipeRemove(event) {
    this.addFormRecipe.removeAt(this.addFormRecipe.value.findIndex(ing => ing === event))
  }

  onAddFormRecipeClear() {
    this.addFormRecipe.clear();
  }

  onAddModal() {
    this.addModal = true;
  }

  addFormValid(): boolean {
    return this.AddForm.valid;
  }

  editFormValid(): boolean {
    return this.EditForm.valid;
  }

  onAdd() {
    const data = this.AddForm.getRawValue();
    const newEntity = {
      name: data.name,
      buff: {
        class: this.addbuffState === 'size' ? {
          size: data.size,
          value: data.sizeValue
        } : {
          category: data.category,
          value: data.categoryValue
        },
        collectRate: data.collectRate,
        fishingRate: data.fishingRate
      },
      recipe: data.recipe
    } as GatherCuisine;
    this.adminBiz.createCuisine(newEntity);
  }

  ngOnDestroy() {
    this.closeModal();
    this.safeSub.unsubscribeAll();
  }

  generateNewRecipeFormControls(recipe: SimpleRecipe) {
    return this.fb.group({
      resourceName: recipe.resourceName,
      resourceId: recipe.resourceId,
      amount: 0
    })
  }

  generateNewRecipeFormControlsFromData(recipe: CraftRecipe) {
    return this.fb.group({
      resourceName: recipe.resourceName,
      resourceId: recipe.resourceId,
      amount: recipe.amount
    })
  }

  onRecipeListChange(event: any[]) {
    this.SimpleRecipeList = this.SimpleRecipeListBase.filter(ing => !event.includes(ing));
  }

  onCuisineSelected(entity: GatherCuisine) {
    this.onRecipeListChange(entity.recipe);
    this.selectedRecipe = entity.recipe.map(ing => {
      return {
        resourceName: ing.resourceName,
        resourceId: ing.resourceId,
        label: ing.resourceName
      }
    })
    this.selectedCuisine = entity;
    this.initFormWithData(entity);
    this.detailModal = true;
  }

  onEdit() {
    console.log(this.EditForm.getRawValue())
  }

  onDelete() {
    this.adminBiz.deleteCuisine(this.selectedCuisine.id);
  }

  get addFormRecipe(): FormArray {
    return this.AddForm.get("recipe") as FormArray;
  }

  get EditFormRecipe(): FormArray {
    return this.EditForm.get('recipe') as FormArray;
  }
}
