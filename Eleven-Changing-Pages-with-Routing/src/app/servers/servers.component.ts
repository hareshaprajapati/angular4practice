import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,private route : ActivatedRoute,
              private router : Router) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  loadServers() {
    this.router.navigate(['/servers'],{relativeTo : this.route});
  }

}
