import {NgModule} from "@angular/core";
import {RecipeItemComponent} from "./recipe-list/recipe-item/recipe-item.component";
import {RecipesComponent} from "./recipes.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {EditRecipeComponent} from "./edit-recipe/edit-recipe.component";
import {NoRecipeSelectedComponent} from "./no-recipe-selected/no-recipe-selected.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RecipesRoutingModule} from "./recipes-routing-module";
import {SharedModule} from "../shared/shared-module";

@NgModule(
  {
    declarations : [
      RecipesComponent,
      RecipeListComponent,
      RecipeDetailComponent,
      RecipeItemComponent,
      NoRecipeSelectedComponent,
      EditRecipeComponent,
    ],
    imports : [
      CommonModule,
      ReactiveFormsModule,
      RecipesRoutingModule,
      SharedModule
    ],
    providers : [],

  }
)

export class RecipesModule{

}
