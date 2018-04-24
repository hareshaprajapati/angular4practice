import {Ingredient} from "../shared/ingredient";

export class RecipeModel{

  name: string;
  description: string;
  imagePath: string;
  ingredients : Ingredient[];


  constructor(name: string, description: string, imagePath: string,ingredients: Ingredient[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
