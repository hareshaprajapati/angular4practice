import { Component, OnInit } from '@angular/core';
import {RecipeModel} from "./recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeSelected : RecipeModel;

  constructor() { }

  ngOnInit() {
  }


  recipeItemClickInList(event: RecipeModel) {

    this.recipeSelected = event;
  }
}
