import {Component, EventEmitter, Output} from '@angular/core';
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {Response} from "@angular/http";
import {RecipeHttpService} from "../../shared/recipe-http.service";
import {RecipeModel} from "../../recipes/recipe.model";
import {RecipeService} from "../../recipes/recipe-list/recipe.service";
import {AuthService} from "../../auth/auth-service";

@Component({
    selector: 'header-component',
    templateUrl : './header.component.html'
  }
)
export class HeaderComponent {

  // @Output() eventEmmiter = new EventEmitter<string>();

  onClick(feature : string){
    // this.eventEmmiter.emit(feature);

  }

  openMe() {

  }

  constructor(private recipeHttpService: RecipeHttpService, private recipeService : RecipeService, private authService : AuthService){}

  saveData() {
    this.recipeHttpService.saveRecipe().subscribe(
      ( value : Response ) => { console.log(value); },
      (error2 : Response) => { console.log(error2); }
    );
  }

  fetchData() {
    this.recipeHttpService.getRecipe().subscribe(
      (data : RecipeModel[]) => {
        console.log(data);
          this.recipeService.updateAll(data);
      }
    );
  }
  logout(){
    this.authService.logout();
  }
}
