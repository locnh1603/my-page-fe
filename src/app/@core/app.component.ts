import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  onClick(moduleName) {
    this.router.navigateByUrl(`${moduleName}`);
  }
}
