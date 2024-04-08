import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shippers } from '../interfaces/shippers';

@Injectable({
  providedIn: 'root'
})
export class ShippersService {
  API_URL:string='http://127.0.0.1:8000/api/shippers';

  constructor(private httpClient:HttpClient) { }

  getMyShipper(id:string){
    return this.httpClient.get( `${this.API_URL}/${id}`)
  }
  

  getShipper():Observable<any>{
    return this.httpClient.get(this.API_URL).pipe(res=>res)
  }



  public createShippers(shippers:Shippers){
    return this.httpClient.post(
      'http://127.0.0.1:8000/api/shippers',
      shippers
    );
  }

  public putShipper(id: string, body: any){
    return this.httpClient.put(
      `${this.API_URL}/${id}`, body
    );
}


  public deleteShipper(id: string){
    return this.httpClient.delete(
      `${this.API_URL}/${id}`
    );
  }



}