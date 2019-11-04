import { Component, OnInit } from '@angular/core';
import { GithubHttpServiceService }from '../services/github-http-service.service'
import { Github } from '../github';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  githubs: Github[];

  constructor(public githubHttpService:GithubHttpServiceService) { }

  ngOnInit() {
    this.searchGithub("gitmarion");
  }
searchGithub(searchTerm){
this.githubHttpService.searchGithub(searchTerm).then(
  ()=>{
    this.githubs=this.githubHttpService.githubs;
  },
  (error)=>{
    console.log(error)
  }
)
}
}
