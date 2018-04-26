import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  private id: number;
  editMode = false;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      value => {
        this.id = +value['id'];
        // if(this.id){
        this.editMode = value['id'] != null;
        console.log(this.editMode)
        // }
      }
    );
  }

}
