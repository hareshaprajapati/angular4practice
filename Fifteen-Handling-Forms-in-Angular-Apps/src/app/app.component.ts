import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form') form: NgForm;
  defaultQuestion = "pet";
  answer: string;

  genders = ['male', 'female'];
  defaultGender = 'male';

  user: {
    'gender': string,
    'questionAnswer': string,
    'secret': string,
    'userData': {
      'email': string,
      'username': string
    }
  }

  formSubmmited = false;

  suggestUserName() {
    const suggestedName = 'Super asdf user';
    this.form.setValue(
      {
        'gender': 'male',
        'questionAnswer': '',
        'secret': "pet",
        'userData': {
          'email': "hareshaprajapati@gmail.com",
          'username': "df"
        }
      }
    );
    /*this.form.form.patchValue({
      'userData': {
        'username': "df"
      }
    });*/

  }

  onSubmit() {
    this.user.userData.username = this.form.value.gender;
    this.user.userData.email= this.form.value.email;
    this.user.secret = this.form.value.secret;
    this.user.gender = this.form.value.gender;
    this.user.questionAnswer = this.form.value.questionAnswer;
    this.formSubmmited = true;
  }

  /*onSubmit(form : NgForm){
    console.log(form);
  }*/
}
