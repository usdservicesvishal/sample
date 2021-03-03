
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,} from '@angular/common/http';
 import { Observable } from 'rxjs';
 import {Reciption} from './Reciption';







@Injectable({
  providedIn: 'root'
})
export class NeuroreciptionService {

  constructor(private httpClient:HttpClient) { }

  createReciption(user:Reciption):Observable<Reciption>{
    const productUrl ="http://192.168.0.102:9191/receptionForm";
 return this.httpClient.post<Reciption>(productUrl ,user ); //return observeable
  }

  createProduct(productBoyd):Observable<Reciption>{
    const productUrl = "http://192.168.0.102:9191/receptionForm";
 return this.httpClient.post<Reciption>(productUrl,productBoyd); //return observeable
  }

  getCategories():Observable<Reciption>{
    const productUrl = "http://localhost:3000/categories";
    return this.httpClient.get<Reciption>(productUrl);
  }
  getAllReciption():Observable<Reciption>{
    const productUrl = "http://192.168.0.102:9191/getreceptionFormAllUsers/";
    return this.httpClient.get<Reciption>(productUrl);
  }

  updateReciption(productId ,productBoyd):Observable<Reciption>{
    const productUrl = "http://localhost:3000/reception/" +productId;
 return this.httpClient.put<Reciption>(productUrl,productBoyd); //return observeable
  }
  viewReciption(productId):Observable<Reciption>{
    const productUrl = "http://192.168.0.102:9191/getdataById/"+productId;
 return this.httpClient.get<Reciption>(productUrl); //return observeable
  }
  deleteReciption(productId):Observable<Reciption>{
    const productUrl = "http://localhost:3000/reception/"+productId;
 return this.httpClient.delete<Reciption>(productUrl); //return observeable
  }

  searchCategoryReciptions(categoryId):Observable<Reciption>{
    const productUrl = "http://localhost:3000/products?categoryId="+categoryId;
 return this.httpClient.get<Reciption>(productUrl); //return observeable
  }

  searchdateReciption(dateparms):Observable<Reciption>{
    const productUrl = "http://localhost:3000/products/date="+dateparms;
 return this.httpClient.get<Reciption>(productUrl); //return observeable
  }

}
