import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ValorationsService {
  API_URL:string='http://127.0.0.1:8000/api/valorations'
  constructor(private httpClient:HttpClient) { }

  public  getValoration():Observable<any>
  {
    return this.httpClient.get(this.API_URL).pipe(res=>res);
  }
}
