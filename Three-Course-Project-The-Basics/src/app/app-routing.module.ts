import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "../../../Eleven-Changing-Pages-with-Routing/src/app/app.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {NoRecipeSelectedComponent} from "./recipes/no-recipe-selected/no-recipe-selected.component";
import {EditRecipeComponent} from "./recipes/edit-recipe/edit-recipe.component";

const routes : Routes = [
  {path: '', redirectTo: '/recipes' , pathMatch: 'full'},
  {path: 'recipes', component : RecipesComponent, children:[
      {path: '', component : NoRecipeSelectedComponent},
      {path: 'new', component : EditRecipeComponent},
      {path: ':id', component : RecipeDetailComponent},
      {path: ':id/edit', component : EditRecipeComponent}
    ]},
  {path: 'shoppinglist', component : ShoppingListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
