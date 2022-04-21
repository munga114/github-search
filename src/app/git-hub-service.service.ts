import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitHubServiceService {
username!:string
searchTerm!:string
  constructor(private http:HttpClient) { }
  getUsers():Observable<any>{
    const url=`https://api.github.com/users/${this.username}`
    return this.http.get<any>(url)
    
  }
  getUserRepos():Observable<any>{
    const url=`https://api.github.com/users/${this.username}/repos?${environment.key}`
    return this.http.get<any>(url)
  }
  searchRepos():Observable<any>{
    const url=`https://api.github.com/search/repositories?q=${this.searchTerm}`
    return this.http.get<any>(url)
  }
  updateSearchTerm(value:string){
    this.searchTerm=value
  }
  updateUserName(value:string){
    this.username=value
  }
}
