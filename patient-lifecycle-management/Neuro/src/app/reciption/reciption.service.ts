import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reciption } from '../model/reciption.model';
import { Observable, of, Subject, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReciptionService {

  constructor(private http:HttpClient) { }
  createReception(user:Reciption):Observable<Reciption>{
    const productUrl ="http://192.168.0.102:9191/receptionForm";
 return this.http.post<Reciption>(productUrl ,user ); //return observeable
  }
  createProduct(productBoyd):Observable<Reciption>{
    const productUrl = "http://192.168.0.102:9191/receptionForm";
 return this.http.post<Reciption>(productUrl,productBoyd); //return observeable
  }
  deleteReception(productId):Observable<Reciption>{
    const productUrl = "http://localhost:3000/reception/"+productId;
 return this.http.delete<Reciption>(productUrl); //return observeable
  }