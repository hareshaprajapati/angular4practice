import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {AppRoutingModule} from "./app-routing.module";
import {RecipeService} from "./recipes/recipe-list/recipe.service";
import {HttpModule} from "@angular/http";
import {RecipeHttpService} from "./shared/recipe-http.service";
import {AuthService} from "./auth/auth-service";
import {AuthGuard} from "./auth/auth-guard";
import {SharedModule} from "./shared/shared-module";
import {AuthModule} from "./auth/auth.module";
import {CoreModule} from "./core/core-module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    AuthModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
