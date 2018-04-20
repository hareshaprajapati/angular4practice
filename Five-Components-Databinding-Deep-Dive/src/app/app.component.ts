import { Component } from '@angular/core';
import {ServerElementModel} from "./server-element/server-element.model";
import {ServerEventModel} from "./server-element/server-event.model";

const SERVER = "server";
const BLUEPRINT = "blueprint";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements : ServerElementModel [] = [
    new ServerElementModel("test","server","content")
  ];

  onBlueprintCreated(data: ServerEventModel) {
    this.serverElements.push(
      new ServerElementModel(data.name,BLUEPRINT,data.content)
    )
  }

  onServerCreated(data: ServerEventModel) {
    this.serverElements.push(
      new ServerElementModel(data.name,SERVER,data.content)
    )
  }

  changeName() {
    this.serverElements[0].name = "Changed";
    // this.serverElements[0] = new ServerElementModel("d","asdf","asdfasdf");
  }
  onDestroy(){
    this.serverElements.splice(0,1);
  }

}
