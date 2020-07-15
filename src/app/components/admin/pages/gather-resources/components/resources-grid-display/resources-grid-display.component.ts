import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges } from '@angular/core';
import { GatherResourcesService } from 'src/app/components/admin/services/gather-resources.service';
import { GridOptions, GridApi } from 'ag-grid-community';

@Component({
  selector: 'app-resources-grid-display',
  templateUrl: './resources-grid-display.component.html',
  styleUrls: ['./resources-grid-display.component.scss']
})
export class ResourcesGridDisplayComponent implements OnInit, OnChanges {

  @Output() selectedResource = new EventEmitter<any>();
  @Input() resources = [];
  @Input() gridFilter = '';

  private gridApi;
  private gridColumnApi;
  private columnDefs = [
    { headerName: 'Name', field: 'name', flex: 1 },
    { headerName: 'Type', field: 'type', width: 100 },
    { headerName: 'Rarity', field: 'rarity', width: 100 },
    { headerName: 'Location(s)', field: 'location', width: 250 },
    { headerName: 'Region', field: 'region', width: 200 },
    { headerName: 'Class', field: 'class.category', width: 120 },
    { headerName: 'Size', field: 'class.size',width: 120 }
  ];

  public gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    defaultColDef: {
      sortable: true
    }
  };

  rowData = [];

  constructor(private resService: GatherResourcesService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.rowData = [...this.resources];
    if (this.gridOptions.api) {
      this.gridOptions.api.setQuickFilter(this.gridFilter);
    } 
    if (this.gridApi) {this.gridApi.redrawRows(this.rowData);}
  }

  onCellClicked(event) {
    this.selectedResource.emit(event.data)
  }

}
