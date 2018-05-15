import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Data, Router} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,private ar: ActivatedRoute,private r : Router) { }

  ngOnInit() {
    this.ar.data.subscribe(
      (value:Data) => {
        this.server = value['serverData'];
        console.log("this.server ");
        console.log( this.server);
      }
    );
    // this.server = this.serversService.getServer(1);
    // this.server = this.serversService.getServer( +this.ar.snapshot.params['id']);
    // this.ar.params.subscribe(value => {
    //   this.server = this.serversService.getServer( Number.parseInt(value['id'] ));
    // });

  }

  onEdit() {
    // this.r.navigate(["/servers",this.server.id,"edit"]);
    // this.r.navigate(["edit"],{relativeTo: this.ar, preserveQueryParams: true});
    this.r.navigate(["edit"],{relativeTo: this.ar, queryParamsHandling: "merge"});
  }
}
