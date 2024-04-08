import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Providers } from '../interfaces/providers';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
  API_URL:string='http://127.0.0.1:8000/api/providers';
  constructor(private httpClient:HttpClient) { }

  public createProvider(provider:Providers){
    return this.httpClient.post(
      'http://127.0.0.1:8000/api/providers',
      provider
    );
  }

  public getProvider():Observable<any>{
    return this.httpClient.get(this.API_URL).pipe(res=>res)
  }

  getMyProvider(id:string){
    return this.httpClient.get( `${this.API_URL}/${id}`)
  }
  
  public putProvider(id: string, body: any){
    return this.httpClient.put(
      `${this.API_URL}/${id}`, body
    );
}


  public deleteProvider(id: string){
    return this.httpClient.delete(
      `${this.API_URL}/${id}`
    );
  }
}
