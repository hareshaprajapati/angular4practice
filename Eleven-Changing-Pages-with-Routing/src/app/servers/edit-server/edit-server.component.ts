import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute} from "@angular/router";
import {CanComponentDeactivate} from "../../can-deactivate-auth-guard.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit,CanComponentDeactivate {

  canDeactivate() : Observable<boolean> | Promise<boolean> | boolean{
    if(!this.allowEdit) return true;
    if( (this.serverName !== this.server.name || this.serverName !== this.server.name ) && !this.isUpdated){
      return confirm('are you sure you want to quite?');
    }
    return true;
}

  isUpdated = false;


  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(private serversService: ServersService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.activatedRoute.queryParams.subscribe(
      value => {
        this.allowEdit = value['allowEdit1'] === '1' ? true : false;
      }
    );
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.isUpdated = true;
  }

}
