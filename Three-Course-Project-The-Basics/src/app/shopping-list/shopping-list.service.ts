import {Ingredient} from "../shared/ingredient";
import {EventEmitter} from "@angular/core";

export class ShoppingListService{

  private ingredients :Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Tomatos',10)
  ];

  // ingredientAddedEventEmitter = new EventEmitter();
  ingredientAddedEventEmitter = new EventEmitter<Ingredient[]>();


  getIngredients(){
    return this.ingredients.slice();
  }
  pushIngredientInList(event: Ingredient) {
    this.ingredients.push(event);
    // this.ingredientAddedEventEmitter.emit();
    this.ingredientAddedEventEmitter.emit(this.ingredients.slice());
  }
  pushIngredientsInList(event: Ingredient[]) {
    this.ingredients.push(...event);
    // this.ingredients =   this.ingredients.concat(event)
    // this.ingredientAddedEventEmitter.emit();
    this.ingredientAddedEventEmitter.emit(this.ingredients.slice());
  }


}
