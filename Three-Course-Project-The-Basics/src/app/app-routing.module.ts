import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "../../../Eleven-Changing-Pages-with-Routing/src/app/app.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";

const routes : Routes = [
  {path: '', redirectTo: '/recipes' , pathMatch: 'full'},
  {path: 'recipes', component : RecipesComponent},
  {path: 'shoppinglist', component : ShoppingListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
