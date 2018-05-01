import { Component } from '@angular/core';
import {HttpService} from "./http-service.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appName = this.service.getAppName();

  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  constructor(private service : HttpService){}

  saveServer() {
    this.service.postData(this.servers).subscribe(
      (response : any) => {
       console.log(response);
     },
      (error : any) => {
       console.log(error);
    }
    )
  }
  getServer(){
    this.service.getData().subscribe(
      (data : any[]) => this.servers,
      (error : any) => {
        console.log(error);
      }
    )
  }
}
