import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
    this.signupForm = new FormGroup({
      'username' : new FormControl(null,Validators.required),
      'email' : new FormControl(null, [ Validators.required, Validators.email ]),
      'gender' : new FormControl(this.genders[1])
    });
  }

  onsubmit(){
    console.log(this.signupForm)
  }

}
