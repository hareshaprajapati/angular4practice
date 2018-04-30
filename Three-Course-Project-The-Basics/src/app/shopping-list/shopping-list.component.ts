import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../shared/ingredient";
import {ShoppingListService} from "./shopping-list.service";
import {Subscription} from "rxjs/Subscription";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  /*ingredients :Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Tomatos',10)
  ];*/

  ingredients :Ingredient[];

  ingredientAddedSubjectSubscription : Subscription;

  @ViewChild('shoppingListForm') shoppingListForm : NgForm;


  constructor(private slistService : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slistService.getIngredients();
    /*this.slistService.ingredientAddedEventEmitter.subscribe(
      () => {
        this.ingredients = this.slistService.getIngredients();
      }
    );*/

    this.ingredientAddedSubjectSubscription = this.slistService.ingredientAddedSubject.subscribe(
      (ingredients : Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );

  }


  ngOnDestroy(): void {
    this.ingredientAddedSubjectSubscription.unsubscribe();
  }

  /*pushIngredientInList(event: Ingredient) {
    // this.ingredients.push(event);
    this.slistService.pushIngredientInList(event);
  }*/
  populateInEditControlForm(index : number) {
    this.slistService.currentlySelectedIndexSubject.next(index);
  }
}
