import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipes/recipe-list/recipe.service";
import {Observable} from "rxjs/Observable";
import {RecipeModel} from "../recipes/recipe.model";
import {AuthService} from "../auth/auth-service";

@Injectable()
export class RecipeHttpService {

  constructor(private http : Http, private recipeService : RecipeService,private authService : AuthService) { }

  saveRecipe(){
    return this.http.put("https://recipe-book-94b72.firebaseio.com/recipes.json?auth=" +
      this.authService.getToken(), this.recipeService.getRecipe());
  }

  getRecipe(){
    return this.http.get("https://recipe-book-94b72.firebaseio.com/recipes.json?auth=" +
      this.authService.getToken())
      .map( (response : Response) => {
        const data : RecipeModel[] = response.json();
        for(let recipeModel of  data){
          if(!recipeModel['ingredients']){
            console.log(recipeModel);
            recipeModel['ingredients'] = [];
          }
        }
        return data;
      } ).catch( (error : any) => {
        return Observable.throw('something went wrong');
      });
  }


}
