import { HttpClient, HttpSentEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Code } from '../interfaces/code';

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  constructor(private httpClient:HttpClient) { }

  public sendEmail(code:Code){
    return this.httpClient.post(
      'http://127.0.0.1:8000/api/codecheck',
      code
    );
  }
}
