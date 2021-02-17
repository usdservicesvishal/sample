import { User } from './user';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserRegistratitonService {

  constructor(private http:HttpClient) { }
Url="http://localhost:3000/posts";
 public doRegistration(user:User){
   return this.http.post(this.Url,user)
 }

}
