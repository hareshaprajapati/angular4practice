import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  /*template: `<app-server></app-server>
                <app-server></app-server>`,*/
styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverId : number = 10;
  serverStatus : string = " down ";

  allowNewServer = false;
  inputText : string;
  inputText1 : string;
  serverCreationStatus =  "No server created";
  serverName = 'test';
  serverCreated = false;

  servers = ['test','test'];

  getServerStatus(){
    return this.serverStatus;
  }

  constructor() {

    setInterval(() => {
      if(this.allowNewServer){
        this.allowNewServer = false;
      }else {
        this.allowNewServer = true;
      }
    },2000);

  }

  ngOnInit() {
  }

  pushMe(s1:string, s2:string) {
    console.log(s1);
    console.log("new input " + s2);

    console.log(this.inputText);
    console.log("new input " + this.inputText1);

  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = "Server created. with name " + this.serverName;
  }

  onUpdateServerName(event:Event) {
    console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getServerCreated() {
    return this.serverCreated;
  }
}
