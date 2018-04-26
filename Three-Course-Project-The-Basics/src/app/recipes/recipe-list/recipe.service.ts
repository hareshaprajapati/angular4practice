import {RecipeModel} from "../recipe.model";
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../../shared/ingredient";

export class RecipeService{

  recipeSelectedEventEmitter = new  EventEmitter<RecipeModel>();

  private recipes: RecipeModel[] = [
    /*{
      name: "A Test Recipe",
      description: "This is simply a test",
      imagePath: ""
      ,
      [ {name: "asd", amount: 1},
        {name:"asdsdf",amount: 2}
      ]
    },*/
    new RecipeModel("A Test Recipe2",
      "This is simply a test2",
      "https://www.wellplated.com/wp-content/uploads/2017/02/Garlic-Shrimp-with-Quinoa-Easy-Gluten-Free-500x731@2x.jpg",
      [ new Ingredient("asd",1),
                  new Ingredient("asdsdf",2)]),
    new RecipeModel("A Test Recipe3asdfasd",
      "This is simply a test3zsdfasdf",
      "https://www.wellplated.com/wp-content/uploads/2017/02/Garlic-Shrimp-with-Quinoa-Easy-Gluten-Free-500x731@2x.jpg",
      [ new Ingredient("eeee",1),
        new Ingredient("sssssssss",2)])
  ];

  getRecipe(){
    return this.recipes.slice();
  }

  getRecipeById(index: number){
    return this.recipes[index];
  }

}
