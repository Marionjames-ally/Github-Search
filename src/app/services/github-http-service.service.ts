import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubHttpServiceService {

  constructor(private http:HttpClient) { }
searchGithub(searchTerm:string){
  let searchEndpoint="https://api.github.com/search?api_key="+environment.GITHUBAPIKEY;
  searchEndpoint += "&q"+ searchTerm;
  let promise = new Promise((resolve, reject)=>{
    this.http.get(searchEndpoint).toPromise().then(
      (results)=>{
        console.log(results);
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
