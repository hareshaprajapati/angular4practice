import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient";
import {assertNumber} from "@angular/core/src/render3/assert";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // @Output() ingredientEventEmitter = new EventEmitter<Ingredient>();

  // @ViewChild('nameInput') nameInputElementRef : ElementRef;
  // @ViewChild('amountInput') amountInputElementRef : ElementRef;

  @ViewChild('shoppingListForm') shoppingListForm : NgForm;

  currentlySelectedIndexSubjectSubscription : Subscription;

  editMode = false;
  currentlySelectedIndex : number;
  currentlySelectedIngredient : Ingredient;
  constructor(private slService : ShoppingListService) { }

  ngOnInit() {
    this.currentlySelectedIndexSubjectSubscription = this.slService.currentlySelectedIndexSubject.subscribe(
      (value : number)=> {
      this.currentlySelectedIngredient = this.slService.getIngredient(value);
      this.currentlySelectedIndex = value;

        this.editMode = true;
        this.shoppingListForm.setValue(
          {
            name :   this.currentlySelectedIngredient.name,
            amount :   this.currentlySelectedIngredient.amount
          }
        );
      }
    );

  }


  ngOnDestroy(): void {
    this.currentlySelectedIndexSubjectSubscription.unsubscribe();
  }

  /*addIngridient(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    // this.ingredientEventEmitter.emit(new Ingredient(nameInput.value, Number.parseInt(amountInput.value)));
    // this.slService.pushIngredientInList(new Ingredient(nameInput.value, Number.parseInt(amountInput.value)));

  }*/

  // addIngredient() {
    // this.ingredientEventEmitter.emit(new Ingredient(this.nameInputElementRef.nativeElement.value, Number.parseInt(this.amountInputElementRef.nativeElement.value)));
    // this.slService.pushIngredientInList(new Ingredient(this.nameInputElementRef.nativeElement.value,this.amountInputElementRef.nativeElement.value));
  // }

  onSubmit(){
  console.log('on submit');
  if(this.editMode){
    this.slService.updateIngredient(this.currentlySelectedIndex,new Ingredient(this.shoppingListForm.value.name, this.shoppingListForm.value.amount));
  }else {
    this.slService.pushIngredientInList(
      new Ingredient(this.shoppingListForm.value.name, this.shoppingListForm.value.amount));
  }
  this.shoppingListForm.reset();
  this.editMode = false;
  }

  clearMe() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  deleteMe() {
      this.slService.removeIngredient(this.currentlySelectedIndex);
      this.clearMe();
  }
}
