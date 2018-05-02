import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes.component";
import {EditRecipeComponent} from "./edit-recipe/edit-recipe.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {NoRecipeSelectedComponent} from "./no-recipe-selected/no-recipe-selected.component";
import {AuthGuard} from "../auth/auth-guard";

const routes: Routes = [
  {
    path: '', component: RecipesComponent, children: [
      {path: '', component: NoRecipeSelectedComponent},
      {path: 'new', component: EditRecipeComponent, canActivate: [AuthGuard]},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: EditRecipeComponent, canActivate: [AuthGuard]}
    ]
  }
];

@NgModule(
  {
    imports : [
      RouterModule.forChild(routes)
      ],
    exports : [
      RouterModule
    ],
    providers : [
      AuthGuard
    ]
  }
)
export class RecipesRoutingModule {

}
