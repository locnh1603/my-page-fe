import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';
import { GatherResourcesService } from 'src/app/components/admin/services/gather-resources.service';
import { GridOptions } from 'ag-grid-community';
import { CraftRecipe } from 'src/shared/models/gather-craft.model';

@Component({
  selector: 'app-crafts-grid-display',
  templateUrl: './crafts-grid-display.component.html',
  styleUrls: ['./crafts-grid-display.component.scss']
})
export class CraftsGridDisplayComponent implements OnInit {

  @Output() selectedCraft = new EventEmitter<any>();
  @Input() crafts = [];
  @Input() gridFilter = '';

  private gridApi;
  private gridColumnApi;
  private columnDefs = [
    { headerName: 'Name', field: 'name', flex: 1 },
    { headerName: 'Type', field: 'type', width: 100 },
    { headerName: 'Class', field: 'class', width: 120 },
    { headerName: 'Recipe', field: 'recipe', flex: 1, cellRenderer: this.myCellRenderer }
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
    this.rowData = [...this.crafts];
    if (this.gridOptions.api) {
      this.gridOptions.api.setQuickFilter(this.gridFilter);
    }
    if (this.gridApi) {
      this.gridApi.redrawRows(this.rowData);
    }
  }

  onCellClicked(event) {
    this.selectedCraft.emit(event.data)
  }

  myCellRenderer (params) {
    const recipes: CraftRecipe[] = [...params.data.recipe];
    const innerHtml = recipes.map(ing =>
      `<span>[${ing.amount} x ${ing.resourceName}]  </span>`);
    return innerHtml.join('');
  }
}
