import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { ServersService } from '../servers.service';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private currentRoute :  ActivatedRoute, private route :  Router) { }

  ngOnInit() {
    //this.server = this.serversService.getServer(1);

    this.server = {id :  this.currentRoute.snapshot.params['id'],name :  this.currentRoute.snapshot.params['name'],status :'online'};

    this.currentRoute.params.subscribe(
      ( data )=>{
        console.log(data['id']);
        console.log(data['name']);
        this.server = {id :  data['id'],name :  data['name'],status :'online'};
      }
    )
  }

  reloadNewPath(){
    this.route.navigate(['/servers','1','buzhuu'])
  }

}
