import { Component, OnInit } from '@angular/core';
import {RecipeModel} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModel[] = [
    {
      name: "A Test Recipe",
      description: "This is simply a test",
      imagePath: "http://hebbarskitchen.hebbars.netdna-cdn.com/wp-content/uploads/mainPhotos/potato-nuggets-recipe-spicy-potato-nuggets-potato-snacks-recipes-1-696x927.jpeg"
    },
    new RecipeModel("A Test Recipe2","This is simply a test2","https://www.wellplated.com/wp-content/uploads/2017/02/Garlic-Shrimp-with-Quinoa-Easy-Gluten-Free-500x731@2x.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
