import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverId:number=121;
  serverName:string= "Apache ";
  createServer=false;
  serverStatus='offline';
  servers=['Apache','Tomcat'];

  constructor() { 
    this.serverStatus=Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.createServer=true;
    this.servers.push(this.serverName);
  }

  onUpdatedServerName($event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'lightgreen' : 'red';
  }

}
