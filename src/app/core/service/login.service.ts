import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Logins } from '../interfaces/logins';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URL:string='http://127.0.0.1:8000/api/User/login';

  constructor(private httpClient:HttpClient) { }

  public logeo(login:Logins){
    return this.httpClient.post(
      'http://127.0.0.1:8000/api/User/login',login,
    );
  }
}
