import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../Model/user";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl="http://localhost:8090/Sign-Up";
  constructor(private httpClient: HttpClient) { }

  registerUser(user: User): Observable<Object> {
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`,user);
  }
}
