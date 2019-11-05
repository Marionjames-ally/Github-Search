import { Component, OnInit } from '@angular/core';
import { ReposService } from '../service/repos-http.service';
import { User } from '../user';
import { UserService } from '../service/user-http.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Repository } from '../repository';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  providers: [ReposService, UserService],
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  user: User;
  userName: string;

  constructor( private userRequestService: UserService){
    this.userRequestService.userName = "Marionjames-ally";
    this.userRequestService.userRequest();
    this.user = this.userRequestService.user;
  }
  

  userLookup(){
    this.userRequestService.userLookup(this.userName);
    this.userRequestService.userRequest();
    this.user = this.userRequestService.user; 
  }

  ngOnInit() { 
    
   }
}