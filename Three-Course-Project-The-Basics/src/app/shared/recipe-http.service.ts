import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipes/recipe-list/recipe.service";
import {Observable} from "rxjs/Observable";
import {RecipeModel} from "../recipes/recipe.model";

@Injectable()
export class RecipeHttpService {

  constructor(private http : Http, private recipeService : RecipeService) { }

  saveRecipe(){
    return this.http.put("https://recipe-book-94b72.firebaseio.com/recipes.json", this.recipeService.getRecipe());
  }

  getRecipe(){
    return this.http.get("https://recipe-book-94b72.firebaseio.com/recipes.json")
      .map( (response : Response) => {
        const data : RecipeModel[] = response.json();
        for(let recipeModel of  data){
          if(!recipeModel['ingredients']){
            console.log(recipeModel);
            recipeModel['ingredients'] = [];
          }
        }
        return response.json();
      } ).catch( (error : any) => {
        return Observable.throw('something went wrong');
      });
  }


}
