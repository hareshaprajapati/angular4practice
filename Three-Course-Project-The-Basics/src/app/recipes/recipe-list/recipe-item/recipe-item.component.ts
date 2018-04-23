import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeModel} from "../../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {


  @Input() recipeItem : RecipeModel;

  @Output() recipeClicked = new EventEmitter<RecipeModel>();

  constructor() { }

  ngOnInit() {
  }

  recipeClick(recipe:RecipeModel) {
    this.recipeClicked.emit(recipe);

  }
}
