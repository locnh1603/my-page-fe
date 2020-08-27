import { Component, OnInit, OnChanges, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { CraftRecipe } from 'shared/models/gather-craft.model';
import { GatherCuisineClassBuff, GatherCuisineBuff } from 'shared/models/gather-cuisines.model';

@Component({
  selector: 'app-cuisines-grid-display',
  templateUrl: './cuisines-grid-display.component.html',
  styleUrls: ['./cuisines-grid-display.component.scss']
})
export class CuisinesGridDisplayComponent implements OnInit, OnChanges {

  @Output() selectedCuisine = new EventEmitter<any>();
  @Input() cuisines = [];
  @Input() gridFilter = '';

  private gridApi;
  private gridColumnApi;
  private columnDefs = [
    { headerName: 'Name', field: 'name', flex: 1 },
    { headerName: 'Buff class', field: 'buff', width: 150, cellRenderer: this.buffClassCellRenderer },
    { headerName: 'Buff value', field: 'buff.class.value', width: 120 },
    { headerName: 'Buff extra', field: 'buff', flex: 1, cellRenderer: this.buffExtraCellRenderer },
    { headerName: 'Recipe', field: 'recipe', flex: 1, cellRenderer: this.recipeCellRenderer }
  ];

  public gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    defaultColDef: {
      sortable: true
    }
  };

  rowData = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.rowData = [...this.cuisines];
    if (this.gridOptions.api) {
      this.gridOptions.api.setQuickFilter(this.gridFilter);
    }
    if (this.gridApi) {
      this.gridApi.redrawRows(this.rowData);
    }
  }

  onCellClicked(event) {
    this.selectedCuisine.emit(event.data)
  }

  recipeCellRenderer (params) {
    const recipes: CraftRecipe[] = [...params.data.recipe];
    const innerHtml = recipes.map(ing =>
      `<span>[${ing.amount} x ${ing.resourceName}]  </span>`);
    return innerHtml.join('');
  }

  buffClassCellRenderer(params) {
    const buffClass: GatherCuisineClassBuff = params.data.buff.class;
    const innerHtml = `<span>${!buffClass.size ? buffClass.category : buffClass.size}</span>`;
    return innerHtml;
  }

  buffExtraCellRenderer(params) {
    const buff: GatherCuisineBuff = params.data.buff;
    const innerHtml = `<span>${buff.collectRate}% Mining, ${buff.fishingRate}% Fishing</span>`;
    return innerHtml;
  }
}
