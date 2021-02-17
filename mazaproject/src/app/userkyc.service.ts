import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserkycService {

  constructor(private http:HttpClient) { }

  // public doRegistration(userk){
  //   //pass hear the postman url
  //     return this.http.post("http://localhost:9191/register",userk,{responseType:'text' as 'json'});
  // }
}
