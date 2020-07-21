import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';
import { GatherResourcesService } from 'src/app/components/admin/services/gather-resources.service';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-crafts-grid-display',
  templateUrl: './crafts-grid-display.component.html',
  styleUrls: ['./crafts-grid-display.component.scss']
})
export class CraftsGridDisplayComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    // this.rowData = [...this.resources];
    // if (this.gridOptions.api) {
    //   this.gridOptions.api.setQuickFilter(this.gridFilter);
    // } 
    // if (this.gridApi) {this.gridApi.redrawRows(this.rowData);}
  }

  onCellClicked(event) {
    // this.selectedResource.emit(event.data)
  }
}
