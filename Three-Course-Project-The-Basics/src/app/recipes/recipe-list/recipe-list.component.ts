import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {RecipeModel} from "../recipe.model";
import {RecipeService} from "./recipe.service";
import {ActivatedRoute, Route, Router, Routes} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit , OnDestroy{

  /*recipes: RecipeModel[] = [
    {
      name: "A Test Recipe",
      description: "This is simply a test"
      ,
      imagePath: ""
    },
    new RecipeModel("A Test Recipe2","This is simply a test2","https://www.wellplated.com/wp-content/uploads/2017/02/Garlic-Shrimp-with-Quinoa-Easy-Gluten-Free-500x731@2x.jpg")
  ];*/

  recipes: RecipeModel[];

  recipeUpdatedSubjectSubscription : Subscription;

  // @Output() recipeItemEventEmitter = new EventEmitter<RecipeModel>();

  constructor(private recipeService : RecipeService,
              private activatedRoute : ActivatedRoute, private route : Router) { }

  ngOnInit() {
  this.recipeUpdatedSubjectSubscription =   this.recipeService.recipeUpdatedSubject.subscribe(
      () => {
        this.recipes = this.recipeService.getRecipe();
      }
    );
    this.recipes = this.recipeService.getRecipe();
  }

  /*onRecipeClicked(event: RecipeModel) {
    this.recipeItemEventEmitter.emit(event);

  }*/
  openNewRecipe() {
    this.route.navigate(['new'] , { relativeTo: this.activatedRoute });
  }

  ngOnDestroy(): void {
    this.recipeUpdatedSubjectSubscription.unsubscribe();
  }
}
