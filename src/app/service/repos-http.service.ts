import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Repository } from '../repository';

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  repos: Repository;
  userName: string;

  constructor(private http:HttpClient){
    this.repos = new Repository("","","","","");
  }
  
  getRepoData(){

    let promise =new Promise((resolve,reject)=>{
        this.http.get( 'https://api.github.com/users/' + this.userName +'/repos?access_token=' + environment.access_token).toPromise().then(response=>{
 
            this.repos.reposArray=response;
 
            resolve()
        },
        error=>{
                this.repos.reposArray=[];
 
                reject(error)
            }
        )
    })
 
    return promise
  }

    repoLookup(userName: string){
      this.userName = userName;
    }

}