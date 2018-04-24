import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {

  /*ingredients :Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Tomatos',10)
  ];*/

  ingredients :Ingredient[];

  constructor(private slistService : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slistService.getIngredients();
    /*this.slistService.ingredientAddedEventEmitter.subscribe(
      () => {
        this.ingredients = this.slistService.getIngredients();
      }
    );*/

    this.slistService.ingredientAddedEventEmitter.subscribe(
      (ingredients : Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );

  }

  /*pushIngredientInList(event: Ingredient) {
    // this.ingredients.push(event);
    this.slistService.pushIngredientInList(event);
  }*/
}
