import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {relativeToRootDirs} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router,private route : ActivatedRoute) { }

  ngOnInit() {
  }

  loadServers() { // absolute path
    this.router.navigate(['/servers']);
  }

  loadServer(number: number) {
    this.router.navigate(['/servers',number,'edit'],
      {queryParams: {allowEdit1:'1',allowEdit2:'2'},
            fragment: 'loading'}


      );
  }
}
