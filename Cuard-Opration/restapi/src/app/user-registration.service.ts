
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }

public doRegistration(user){
  return this.http.post("http://192.168.0.219/receptionForm",user,{responseType:'text' as 'json'})
}
}
