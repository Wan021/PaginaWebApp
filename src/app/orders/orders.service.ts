import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from './client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  parameter:string|any;
  url="http://localhost:10000"

  constructor(
    private httpClient:HttpClient
  ) { }

  createClient(prodcutBody: any):Observable<Client>{
    const baseUrl=this.url+"/clients";
    return this.httpClient.post<Client>(baseUrl, prodcutBody);
  }
  viewClient():Observable<Client>{
    const baseUrl=this.url+"/clients";
    return this.httpClient.get<Client>(baseUrl);
  }
  getcuentas(){
    const baseUrl=this.url+"/log";
    return this.httpClient.get(baseUrl);
  }
  updatecuenta(paramet:string,sesion:any){
    const baseUrl=this.url+"/log/"+paramet;
    return this.httpClient.put(baseUrl, sesion);
  }
  updatecontrol(paramet:any,sesion:any){
    const baseUrl=this.url+"/control/"+paramet;
    return this.httpClient.put(baseUrl, sesion);
  }
  getClient(client:number):Observable<Client>{
    const baseUrl=this.url+"/clients/"+client;
    return this.httpClient.get<Client>(baseUrl);
  }

}
