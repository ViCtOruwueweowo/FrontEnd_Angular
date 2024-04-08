import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orders } from '../interfaces/orders';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  API_URL:string='http://127.0.0.1:8000/api/Order';

  constructor(private httpClient:HttpClient) { }

  public getorder():Observable<any>{
    return this.httpClient.get(this.API_URL).pipe(res=>res);
  }

  public createOrder(orders:Orders){
    return this.httpClient.post(
      'http://127.0.0.1:8000/api/Order',
      orders
    );
  }

//Aqui se maneja todo lo del orden details

API_URLS:string='http://127.0.0.1:8000/api/OrderDit';

public getorderd():Observable<any>{
  return this.httpClient.get(this.API_URLS).pipe(res=>res);
}
}
