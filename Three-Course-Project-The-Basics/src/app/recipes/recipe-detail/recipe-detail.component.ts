import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from "../recipe-list/recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {


  // @Input() recipeItem : RecipeModel;
  recipeItem : RecipeModel;
  index : number;

  constructor(private slService : ShoppingListService,private recipeService : RecipeService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      value => {
        this.index = +value['id'];
        this.recipeItem = this.recipeService.getRecipeById(this.index);
      }
    );
   /* if(this.recipeItem == null){
      this.recipeItem = new RecipeModel('test','test','test');
    }*/
  }

  // getRecipeById

  addIngredients() {
    this.slService.pushIngredientsInList(this.recipeItem.ingredients);
  }
}
