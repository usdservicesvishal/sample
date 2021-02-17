import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kyc } from "./Kyc";


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http:HttpClient) { }
  public doRegistration(form:Kyc){
    //pass hear the postman url
      return this.http.post("http://localhost:9191/register",form,{responseType:'text' as 'json'});
  }
}


