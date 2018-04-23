import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {


  @Input() recipeItem : RecipeModel;

  constructor() { }

  ngOnInit() {
   /* if(this.recipeItem == null){
      this.recipeItem = new RecipeModel('test','test','test');
    }*/
  }

}
