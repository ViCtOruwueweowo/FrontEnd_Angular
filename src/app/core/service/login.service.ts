import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Logins } from '../interfaces/logins';
import { Observable } from 'rxjs';
import { LoginResponse } from '../interfaces/loginresponse';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root' 
})
export class LoginService {

  API_URL:string='http://127.0.0.1:8000/api/User/login';

  constructor(private httpClient:HttpClient) { }

  public logeo(login:Logins): Observable<LoginResponse>{
    return this.httpClient.post<LoginResponse>(
      'http://127.0.0.1:8000/api/User/login',login,
    );
  } 

  public sendEmail(login:Logins){
    return this.httpClient.post(
      'http://127.0.0.1:8000/api/sendEmail',
      login
    );
  }

  public validarCodigo(login:Logins){
    return this.httpClient.post(
      'http://127.0.0.1:8000/api/validarCodigo',
      login
    );
  }

  public outlogin(login:Logins):Observable<LoginResponse>{
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.httpClient.post<LoginResponse>(
      'http://127.0.0.1:8000/api/User/logout',
      login,
      httpOptions
    );
  }
}
