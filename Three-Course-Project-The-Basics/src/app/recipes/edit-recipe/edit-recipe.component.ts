import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AbstractControl, FormArray, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {RecipeService} from "../recipe-list/recipe.service";
import {RecipeModel} from "../recipe.model";
import {Ingredient} from "../../shared/ingredient";

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  private id: number;
  editMode = false;
  editForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private  recipeService: RecipeService, private  router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      value => {
        this.id = +value['id'];
        // if(this.id){
        this.editMode = value['id'] != null;
        console.log(this.editMode)
        this.initForm();
        // }
      }
    );
  }

  cancelMe() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  onsubmit() {
    console.log(this.editForm.value);
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.editForm.value);
    } else {
      this.recipeService.addRecipe(this.editForm.value);
    }
    this.cancelMe();

    /*let ingredients : Ingredient[] = [];
    (<FormArray>this.editForm.get('ingredients')).controls.forEach(
      (value : FormGroup) => {
        ingredients.push(new Ingredient(value.controls.name.value,value.controls.amount.value));
      }
    );
    if(this.editMode){
      this.recipeService.updateRecipe(this.id,new RecipeModel(this.editForm.value.name,this.editForm.value.description,
        this.editForm.value.imageURL,ingredients));
    }else{
      this.recipeService.addRecipe(new RecipeModel(this.editForm.value.name,this.editForm.value.description,
        this.editForm.value.imageURL,ingredients));

    }*/


  }

  initForm() {
    let name = '';
    let imageURL = '';
    let description = '';
    let ingredients = new FormArray([]);
    if (this.editMode) {
      const recipeModel = this.recipeService.getRecipeById(this.id);
      name = recipeModel.name;
      imageURL = recipeModel.imagePath;
      description = recipeModel.description;
      recipeModel.ingredients.forEach((value: Ingredient) => {
        ingredients.push(new FormGroup({
          'name': new FormControl(value.name, Validators.required),
          'amount': new FormControl(value.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
        }));
      })
    }

    this.editForm = new FormGroup(
      {
        name: new FormControl(name, Validators.required),
        imageURL: new FormControl(imageURL, Validators.required),
        description: new FormControl(description),
        ingredients: ingredients
      },
    );
  }

  addIngredient() {
    (<FormArray>this.editForm.get('ingredients')).push(
      new FormGroup({
          'name': new FormControl(null, Validators.required),
          'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
        }
      )
    );
  }

  deleteIngredient(i : number) {
    (<FormArray>this.editForm.get('ingredients')).removeAt(i);

  }
}
