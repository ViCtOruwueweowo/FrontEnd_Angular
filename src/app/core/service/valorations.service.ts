import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Valorations } from '../interfaces/valorations';
@Injectable({
  providedIn: 'root'
})
export class ValorationsService {
  API_URL: string = 'http://127.0.0.1:8000/api/valorations'
  
  constructor(private httpClient: HttpClient) { }

  public getValoration(): Observable<any> {
    return this.httpClient.get(this.API_URL).pipe(res => res);
  }

  public createvaloration(valorations: Valorations) {
    return this.httpClient.post(
      'http://127.0.0.1:8000/api/valorations',
      valorations
    );
  }

  public putValoration(id: string, body: any) {
    return this.httpClient.put(
      `${this.API_URL}/${id}`, body
    );
  }

  getMyValoration(id: string) {
    return this.httpClient.get(`${this.API_URL}/${id}`)
  }

}