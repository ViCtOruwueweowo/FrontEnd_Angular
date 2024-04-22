import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gamesp } from '../interfaces/gamesp';

@Injectable({
  providedIn: 'root'
})
export class GamespService {

  API_URL:string='http://127.0.0.1:8000/api/videogameProviders';

  constructor(private httpClient:HttpClient) { }

  getgamep():Observable<any>{
    return this.httpClient.get(this.API_URL).pipe(res=>res)
  }

  getMyGamep(id:string){
    return this.httpClient.get( `${this.API_URL}/${id}`)
  }

  public createGamep(gamesp:Gamesp){
    return this.httpClient.post(
      'http://127.0.0.1:8000/api/videogameProviders',
      gamesp
    );
  }

  public putGamep(id: string, body: any){
    return this.httpClient.put(
      `${this.API_URL}/${id}`, body
    );
}
}
