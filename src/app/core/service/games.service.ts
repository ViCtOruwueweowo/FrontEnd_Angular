import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Games } from '../interfaces/games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  API_URL:string='http://127.0.0.1:8000/api/videogames';
  constructor(private httpClient:HttpClient) { }

  public getgame():Observable<any>{
    return this.httpClient.get(this.API_URL).pipe(res=>res);
  }


  public createGame(games:Games){
    return this.httpClient.post(
      'http://127.0.0.1:8000/api/videogames',
      games
    );
  }

  public deleteGame(id: string){
    return this.httpClient.delete(
      `${this.API_URL}/${id}`
    );
  }
}
