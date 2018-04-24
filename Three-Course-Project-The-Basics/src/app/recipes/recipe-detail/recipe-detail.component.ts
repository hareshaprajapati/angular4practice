import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {


  @Input() recipeItem : RecipeModel;

  constructor(private slService : ShoppingListService) { }

  ngOnInit() {
   /* if(this.recipeItem == null){
      this.recipeItem = new RecipeModel('test','test','test');
    }*/
  }

  addIngredients() {
    this.slService.pushIngredientsInList(this.recipeItem.ingredients);
  }
}
