import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-forms-reactive-start',
  templateUrl: './forms-reactive-start.component.html',
  styleUrls: ['./forms-reactive-start.component.css']
})
export class FormsReactiveStartComponent implements OnInit {


  genders = ['male', 'female'];

  signupForm : FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
