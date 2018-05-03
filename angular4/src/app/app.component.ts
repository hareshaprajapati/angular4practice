import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles : [`
    h3{
      color: red;
    }
  `]
})
export class AppComponent {
  title = 'app';


  hhh = "transparent";

  value = 5;

  submitMe(value: string) {
    console.log(value);
  }

  changeHhh() {
    if(this.hhh === 'transparent'){
      this.hhh = 'red';
    }else{
      this.hhh = 'transparent';
    }

  }
}
