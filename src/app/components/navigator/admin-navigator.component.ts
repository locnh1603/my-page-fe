import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navigator',
  templateUrl: './admin-navigator.component.html',
  styleUrls: ['./admin-navigator.component.scss']
})
export class AdminNavigatorComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClick(moduleName) {
    this.router.navigateByUrl(`/admin${moduleName}`);
  }

}
