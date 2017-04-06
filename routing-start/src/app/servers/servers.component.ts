import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';

import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, private route :  Router, private currentRoute :  ActivatedRoute ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onHardReload(){
    //this.route.navigate(['/users']); //this is by default relative to the base url
    debugger

    this.route.navigate(['servers'], {relativeTo: this.currentRoute}); 
  }

}
