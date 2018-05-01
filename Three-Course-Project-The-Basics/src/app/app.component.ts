import {Component, OnInit} from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyB0aAirPSkQWpA1B_BvCO2z7pZTm81WB5I",
      authDomain: "recipe-book-94b72.firebaseapp.com"
    });
  }
  title = 'app';

  featureClicked = 'recipe';

  onEvent(event: string) {
    this.featureClicked = event;

  }
}
