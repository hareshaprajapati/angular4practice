import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient";
import {assertNumber} from "@angular/core/src/render3/assert";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // @Output() ingredientEventEmitter = new EventEmitter<Ingredient>();

  @ViewChild('nameInput') nameInputElementRef : ElementRef;
  @ViewChild('amountInput') amountInputElementRef : ElementRef;

  constructor(private slService : ShoppingListService) { }

  ngOnInit() {
  }

  /*addIngridient(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    // this.ingredientEventEmitter.emit(new Ingredient(nameInput.value, Number.parseInt(amountInput.value)));
    // this.slService.pushIngredientInList(new Ingredient(nameInput.value, Number.parseInt(amountInput.value)));

  }*/

  addIngredient() {
    // this.ingredientEventEmitter.emit(new Ingredient(this.nameInputElementRef.nativeElement.value, Number.parseInt(this.amountInputElementRef.nativeElement.value)));
    this.slService.pushIngredientInList(new Ingredient(this.nameInputElementRef.nativeElement.value,this.amountInputElementRef.nativeElement.value));
  }
}
