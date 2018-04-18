import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverStatus = 'offline';
  // serverStatus : any;

  constructor() {

    setInterval(() => {
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    },3000);
    // this.serverStatus = 1;

  }

  ngOnInit() {
  }

  getColor() {
    // return this.serverStatus === '1' ? 'green' : 'red';
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
