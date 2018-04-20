import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ServerEventModel} from "../server-element/server-event.model";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // newServerName = '';
  // newServerContent = '';

  @Output('bpCreated') blueprintCreated = new EventEmitter<ServerEventModel>();
  @Output('svCreated') serverCreated = new EventEmitter<ServerEventModel>();

  @ViewChild('newServerContent') newServerContent : ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  onAddServer(input : HTMLInputElement) {
    this.serverCreated.emit(new ServerEventModel(input.value,this.newServerContent.nativeElement.value));
  }

  onAddBlueprint(input : HTMLInputElement) {
    this.blueprintCreated.emit(new ServerEventModel(input.value,this.newServerContent.nativeElement.value));
  }
}
