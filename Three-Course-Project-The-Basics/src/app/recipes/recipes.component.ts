import { Component, OnInit } from '@angular/core';
import {RecipeModel} from "./recipe.model";
import {RecipeService} from "./recipe-list/recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: []
})
export class RecipesComponent implements OnInit {

  recipeSelected : RecipeModel;

  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelectedEventEmitter.subscribe(
      (recipeModel:RecipeModel) => {
          this.recipeSelected = recipeModel;
    }
    )
  }

  /*recipeItemClickInList(event: RecipeModel) {
    this.recipeSelected = event;
  }*/
}
