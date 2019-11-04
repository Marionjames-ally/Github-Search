import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Github } from '../github';

@Injectable({
  providedIn: 'root'
})
export class GithubHttpServiceService {
  github: any[];
  constructor(private http:HttpClient) { }
searchGithub(searchTerm:string){
  let searchEndpoint="https://api.github.com/search?api_key="+environment.GITHUBAPIKEY;
  searchEndpoint += "&q"+ searchTerm;
  let promise = new Promise((resolve, reject)=>{
    this.http.get(searchEndpoint).toPromise().then(
      (results)=>{
       this.github=[];
       for(let i=0; i<results["data"].length; i++){
        let url = results["data"][i]["repositories"]["fixed_height"]["url"];
        let giph = new Github(url);
        this.github.push(Github);
      }
        console.log(this.github);
        resolve()
      },
      (error)=>{
        console.log(error)
        reject()
      }
    )
  })
  return promise;
}

}
