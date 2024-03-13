import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_URL:string='http://127.0.0.1:8000/api/User';
  constructor(private httpClient:HttpClient) { }

  getUser():Observable<any>
  {
    return this.httpClient.get(this.API_URL).pipe(res=>res);
  }
}
