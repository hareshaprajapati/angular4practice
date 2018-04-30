import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormsReactiveStartComponent } from './forms-reactive-start/forms-reactive-start.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsReactiveStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
