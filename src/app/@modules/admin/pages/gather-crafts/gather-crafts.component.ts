import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { ClrLoadingState } from '@clr/angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { SafeSubscription } from 'shared/models/safe-subscription.model';
import { GatherCraft, SimpleRecipe, CraftRecipe } from 'shared/models/gather-craft.model';
import { GatherResource } from 'shared/models/gather-resources.model';
import { AdminBiz } from '@modules/admin/biz/admin.biz';

@Component({
  selector: 'app-gather-crafts',
  templateUrl: './gather-crafts.component.html',
  styleUrls: ['./gather-crafts.component.scss'],
  providers: [SafeSubscription]
})
export class GatherCraftsComponent implements OnInit, OnDestroy {
  public addBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  public editBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  public deleteBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  public selectedCraft: GatherCraft = null;
  public newCraft: GatherCraft = new GatherCraft();
  public gridFilter = '';
  public detailModal = false;
  public addModal = false;
  public crafts: GatherCraft[] = [];
  public AddForm: FormGroup;
  public EditForm: FormGroup;
  public resources: GatherResource[] = [];
  public SimpleRecipeListBase: SimpleRecipe[] = [];
  public SimpleRecipeList: SimpleRecipe[] = [];
  public selectedRecipe: SimpleRecipe[] = [];
  public types = ["left ring", "right ring"]
  public classes = ['Hunter', 'Fighter', 'Force', 'Techter', 'Ranger', 'Gunner', 'Braver', 'Bouncer', 'Summoner', 'Hero', 'Phantom']

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
      this.adminBiz.crafts$.subscribe((res: GatherCraft[]) => {
        this.crafts = [...res]
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
      type: ['left ring', Validators.required],
      class: ['Hunter', Validators.required],
      recipe: this.fb.array([]),
    })
  }

  initFormWithData(entity: GatherCraft) {
    this.EditForm = this.fb.group({
      id: [entity.id],
      name: [entity.name, Validators.required],
      type: [entity.type, Validators.required],
      class: [entity.class, Validators.required],
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
    this.addBtnState = ClrLoadingState.LOADING;
    const newEntityData = this.AddForm.getRawValue();
    this.adminBiz.createCraft(newEntityData);
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

  onCraftSelected(entity: GatherCraft) {
    this.onRecipeListChange(entity.recipe);
    this.selectedRecipe = entity.recipe.map(ing => {
      return {
        resourceName: ing.resourceName,
        resourceId: ing.resourceId,
        label: ing.resourceName
      }
    })
    this.selectedCraft = entity;
    this.initFormWithData(entity);
    this.detailModal = true;
  }

  onEdit() {
    const entity = this.EditForm.getRawValue();
    this.adminBiz.updateCraft(entity);
  }

  onDelete() {
    this.adminBiz.deleteCraft(this.selectedCraft.id);
  }

  get addFormRecipe(): FormArray {
    return this.AddForm.get("recipe") as FormArray;
  }

  get EditFormRecipe(): FormArray {
    return this.EditForm.get('recipe') as FormArray;
  }
}
