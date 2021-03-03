import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FruitStock } from './FruitStock';



@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private httpClient:HttpClient) { }

  createReception(user:FruitStock):Observable<FruitStock>{
    const productUrl =" http://192.168.0.20:9192/fruitStockRegister";
 return this.httpClient.post<FruitStock>(productUrl ,user ); //return observeable
  }

  createProduct(productBoyd:any):Observable<FruitStock>{
    const productUrl = " http://192.168.0.20:9192/fruitStockRegister";
 return this.httpClient.post<FruitStock>(productUrl,productBoyd); //return observeable
  }

  getCategories():Observable<FruitStock>{
    const productUrl = " http://localhost:3000/FruitStock";
    return this.httpClient.get<FruitStock>(productUrl);
  }
  getAllReception():Observable<FruitStock>{
    const productUrl = " http://localhost:3000/FruitStock";
    return this.httpClient.get<FruitStock>(productUrl);
  }

  updateReception(productId:any|FruitStock, productBoyd:any):Observable<FruitStock>{
    const productUrl = " http://localhost:3000/FruitStock"+productId;
 return this.httpClient.patch<FruitStock>(productUrl,productBoyd); //return observeable
  }
  viewReception(productId:any|FruitStock ):Observable<FruitStock>{
    const productUrl =" http://localhost:3000/FruitStock"+productId;
 return this.httpClient.get<FruitStock>(productUrl); //return observeable
  }
  deleteReception(productId:any):Observable<FruitStock>{
    const productUrl = " http://localhost:3000/FruitStock"+productId;
 return this.httpClient.delete<FruitStock>(productUrl); //return observeable
  }

  searchCategoryReceptions(categoryId:any):Observable<FruitStock>{
    const productUrl = " http://localhost:3000/FruitStock"+categoryId;
 return this.httpClient.get<FruitStock>(productUrl); //return observeable
  }

}
