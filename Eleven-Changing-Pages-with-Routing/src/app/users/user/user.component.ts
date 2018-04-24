import {Component, OnDestroy, OnInit} from '@angular/core';
import strip_bom = require("strip-bom");
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {
  user: {id: number, name: string} = { id : 1, name: 'haresh'};

  subscription: Subscription;

  constructor(private r : ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      name: this.r.snapshot.params['name'],
      id: this.r.snapshot.params['id']
    }
    this.subscription = this.r.params.subscribe(
      (value => {
        this.user.id = value['id'];
        this.user.name = value['name'];
      })
    );
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
