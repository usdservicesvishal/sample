import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reception } from './reception';

@Injectable({
  providedIn: 'root'
})
export class ReceptionService {

  constructor(private httpeClient:HttpClient) { }


  createReception(user:Reception):Observable<Reception>{
    const productUrl ="http://192.168.0.102:9191/receptionForm";
 return this.httpeClient.post<Reception>(productUrl ,user ); //return observeable
  }

  createProduct(productBoyd):Observable<Reception>{
    const productUrl = "http://192.168.0.102:9191/receptionForm";
 return this.httpeClient.post<Reception>(productUrl,productBoyd); //return observeable
  }

  getCategories():Observable<Reception>{
    const productUrl = "http://localhost:3000/categories";
    return this.httpeClient.get<Reception>(productUrl);
  }
  getAllReception():Observable<Reception>{
    const productUrl = "http://192.168.0.102:9191/getreceptionFormAllUsers/";
    return this.httpeClient.get<Reception>(productUrl);
  }

  updateReception(productId , productBoyd):Observable<Reception>{
    const productUrl = "http://localhost:3000/reception/" +productId;
 return this.httpeClient.put<Reception>(productUrl,productBoyd); //return observeable
  }
  viewReception(productId):Observable<Reception>{
    const productUrl = "http://192.168.0.102:9191/getdataById/"+productId;
 return this.httpeClient.get<Reception>(productUrl); //return observeable
  }
  deleteReception(productId):Observable<Reception>{
    const productUrl = "http://localhost:3000/reception/"+productId;
 return this.httpeClient.delete<Reception>(productUrl); //return observeable
  }

  searchCategoryReceptions(categoryId):Observable<Reception>{
    const productUrl = "http://localhost:3000/products?categoryId="+categoryId;
 return this.httpeClient.get<Reception>(productUrl); //return observeable
  }

  searchdateReception(dateparms):Observable<Reception>{
    const productUrl = "http://localhost:3000/products/date="+dateparms;
 return this.httpeClient.get<Reception>(productUrl); //return observeable
  }


}
