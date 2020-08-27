import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-landing',
  animations: [
    trigger('hover', [
      state('idle', style({
        height: '200px',
        opacity: 0.3,
        backgroundColor: 'yellow'
      })),
      state('focused', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  loginForm: FormGroup;
  query = '';
  rightFocused = false;
  leftFocused = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  queryChange(query: any) {
    this.query = query;
  }

  onSearch() {
    console.log(this.query);
  }

}
