import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormArray, FormControl, FormGroup, NgForm} from "@angular/forms";
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

  constructor(private activatedRoute: ActivatedRoute, private  recipeService: RecipeService) {
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

  onsubmit() {
    console.log(this.editForm)
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
          'name' : new FormControl(value.name),
          'amount' : new FormControl(value.amount)
        }));
      })
    }

    this.editForm = new FormGroup(
      {
        name: new FormControl(name),
        imageURL: new FormControl(imageURL),
        description: new FormControl(description),
        ingredients: ingredients
      },
    );
  }

}
