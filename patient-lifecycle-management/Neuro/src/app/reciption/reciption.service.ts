import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reciption } from '../model/reciption.model';
import { Observable, of, Subject, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReciptionService {

  constructor(private http:HttpClient) { }
Url="http://192.168.0.102:9191/receptionForm/";
 public doRegistration(reciption:Reciption){
   return this.http.post(this.Url, reciption);
 }
// userAdded=new Subject();
// doRegistration(reciption:Reciption){
//   console.log(reciption);
//  return this.http.post("http://192.168.0.102:9191/receptionForm/",obj);
// }

 public getUsers(reciption:Reciption){
   return this.http.get("http://192.168.0.102:9191/getreceptionFormAllUsers/");
 }

 public DeleteUser(userId:number){
return this.http.delete("http://192.168.0.102:9191//delete/{userId}" +userId);

 }

//  public  getUserByEmail(email){
// return this.http.get("");
//  }

//  informChild(){
//    this.doRegistration.next();
//  }


// getUserData() {
//   const url = '';
//   return this.http.get(url);
// }

}




// function obj(arg0: string, obj: any) {
//   throw new Error('Function not implemented.');
// }

