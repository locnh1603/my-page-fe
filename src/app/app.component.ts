import { Component, OnInit, OnDestroy } from '@angular/core';
import { tap } from 'rxjs/operators'
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {

  rowData;
  columnDefs = [
    {headerName: 'Name', field: 'name' },
    {headerName: 'Rarity', field: 'rarity' },
    {headerName: 'Type', field: 'type'},
    {headerName: 'Location', field: 'location'},
    {headerName: 'Class', field: 'class.category'},
    {headerName: 'size', field: 'class.size'}
  ];

  constructor(
    private mainService: MainService            
  ) {}
  
  ngOnInit(): void {
    this.rowData = this.mainService.getAll();
  }

  ngOnDestroy(): void {
  }
}
