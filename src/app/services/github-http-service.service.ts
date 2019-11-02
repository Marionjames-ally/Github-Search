import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubHttpServiceService {

  constructor() { }
searchGithub(searchTerm:string){
  console.log(searchTerm);
}

}
