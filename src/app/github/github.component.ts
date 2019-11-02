import { Component, OnInit } from '@angular/core';
import { GithubHttpServiceService }from '../services/github-http-service.service'

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  constructor(public githubHttpService:GithubHttpServiceService) { }

  ngOnInit() {
  }
searchGithub(searchTerm){
this.githubHttpService.searchGithub(searchTerm)
}
}
