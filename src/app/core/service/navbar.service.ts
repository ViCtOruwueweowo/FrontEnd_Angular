import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

API_URL:string='http://127.0.0.1:8000/api/User2';

  constructor(private httpClient:HttpClient) { }

  public getnav():Observable<any>{
    return this.httpClient.get(this.API_URL).pipe(res=>res);
  }
}
