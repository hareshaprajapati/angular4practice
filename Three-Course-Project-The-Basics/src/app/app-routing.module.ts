import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {AppComponent} from "../../../Eleven-Changing-Pages-with-Routing/src/app/app.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {NoRecipeSelectedComponent} from "./recipes/no-recipe-selected/no-recipe-selected.component";
import {EditRecipeComponent} from "./recipes/edit-recipe/edit-recipe.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {AuthGuard} from "./auth/auth-guard";
import {HomeComponent} from "./core/home/home.component";

const routes : Routes = [
  // {path: '', redirectTo: '/recipes' , pathMatch: 'full'},
  {path: '', component : HomeComponent},
  {path: 'recipes', loadChildren : './recipes/recipes-module#RecipesModule'},
  {path: 'shoppinglist' , loadChildren : './shopping-list/shopping-list.module#ShoppingListModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ preloadingStrategy : PreloadAllModules })
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
