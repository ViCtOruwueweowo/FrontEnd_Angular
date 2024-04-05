import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_URL: string = 'http://127.0.0.1:8000/api/User';

  constructor(private httpClient: HttpClient) { }

  public createUser(user: Users) {
    return this.httpClient.post(
      'http://127.0.0.1:8000/api/User',
      user
    );
  }

  public getUser(): Observable<any> {
    return this.httpClient.get(this.API_URL).pipe(res => res);
  }
}
