import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient";
import {assertNumber} from "@angular/core/src/render3/assert";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() ingredientEventEmitter = new EventEmitter<Ingredient>();

  @ViewChild('nameInput') nameInputElementRef : ElementRef;
  @ViewChild('amountInput') amountInputElementRef : ElementRef;
  constructor() { }

  ngOnInit() {
  }

  addIngridient(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    this.ingredientEventEmitter.emit(new Ingredient(nameInput.value, Number.parseInt(amountInput.value)));

  }

  addIngredient() {
    this.ingredientEventEmitter.emit(new Ingredient(this.nameInputElementRef.nativeElement.value, Number.parseInt(this.amountInputElementRef.nativeElement.value)));
  }
}
