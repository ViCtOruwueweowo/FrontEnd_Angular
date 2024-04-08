import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Platforms } from '../interfaces/platforms';


@Injectable({
  providedIn: 'root'
})
export class PlatformsService {

  API_URL:string='http://127.0.0.1:8000/api/videogamePlatforms';
  API_URL2:string='http://127.0.0.1:8000/api/platform';
  constructor(private httpClient:HttpClient) { }

  public getplatform():Observable<any>{
    return this.httpClient.get(this.API_URL).pipe(res=>res);
  }

  public getplatform2():Observable<any>{
    return this.httpClient.get(this.API_URL2).pipe(res=>res);
  }

  public createplatforms(platforms:Platforms){
    return this.httpClient.post(
      'http://127.0.0.1:8000/api/videogamePlatforms',
      platforms
    );
  }
}