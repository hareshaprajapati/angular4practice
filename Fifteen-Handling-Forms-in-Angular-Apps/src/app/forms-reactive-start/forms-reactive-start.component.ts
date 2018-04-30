import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {promise} from "selenium-webdriver";
import {Observable} from "rxjs/Observable";
import {timeout} from "rxjs/operators";

@Component({
  selector: 'app-forms-reactive-start',
  templateUrl: './forms-reactive-start.component.html',
  styleUrls: ['./forms-reactive-start.component.css']
})
export class FormsReactiveStartComponent implements OnInit {


  genders = ['male', 'female'];

  signupForm : FormGroup;

  forbiddenUserName = ['haresh','hhh'];

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData' : new FormGroup(
        {
          'username' : new FormControl(null,[Validators.required,this.forbiddenUserValidator.bind(this)]),
          'email' : new FormControl(null, [ Validators.required, Validators.email ], this.forbiddenEmailsValidator),
        }
      ),
      'gender' : new FormControl(this.genders[1]),
      'hobbies' : new FormArray([])
    });

    this.signupForm.valueChanges.subscribe(
      value => {
        console.log(value);
      }
    );

    this.signupForm.statusChanges.subscribe(
      status => {
        console.log(status);
      }
    );

    this.signupForm.setValue({
      'userData' : {
          'username' : 'haresh',
          'email' : 'hhh@test.com'
        },
      'gender' : this.genders[0],
      'hobbies' : []
    });

    console.log('patch value called')
    this.signupForm.patchValue({
      'userData' : {
        'username' : 'haresh',
      }
    });

  }

  onsubmit(){
    console.log(this.signupForm)
    this.signupForm.reset();
  }

  addHobbyControl() {
    const formControl = new FormControl(null,Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(formControl);
  }

  forbiddenUserValidator(control : FormControl) : { [s:string] : boolean } {
   if(this.forbiddenUserName.indexOf(control.value) !== -1){
     return {'forbiddenUserName' : true };
   }
  }

  forbiddenEmailsValidator(control : FormControl) : Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve,reject) => {
     setTimeout(() => {
       if(control.value === 'test@test.com'){
         resolve({'forbiddenEmail' : true});
       } else{
         resolve(null);
       }
     },1500);
    });
    return promise;
  }
}
