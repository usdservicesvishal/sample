
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reciption } from './reciption';

@Injectable({
  providedIn: 'root'
})
export class ReciptionService {

  constructor(private httpclient:HttpClient) { }
  createForm():Observable<Reciption>{
    const formUrl = "http://localhost:64469/";
    return  this.httpclient.post<Reciption>(formUrl,reciptionbody);
  }
}
