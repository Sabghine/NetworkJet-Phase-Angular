import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from "../Model/user";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {JwtHelperService} from "@auth0/angular-jwt";
import {RegistrationRequest} from "../Model/registration-request";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = 'http://localhost:8900/'
 private baseUrl1= 'http://localhost:8900/retrieve-user'
  private baseUrl2='http://localhost:8900/updateUser'
  constructor(private _http: HttpClient, private router: Router) {
  }

  retrieveAllUsers(): Observable<any> {
    return this._http.get(`${this.baseUrl}` + 'retrieve-all-users/')
  }

  retrieveById(id: number): Observable<User> {
    return this._http.get<User>(`${this.baseUrl1}/${id}`);
  }

  deleteById(id: number): Observable<any> {
    return this._http.delete(`${this.baseUrl}` + 'remove-user/' + id)
  }
  adduser(user:RegistrationRequest){
    return this._http.post<RegistrationRequest>(`${this.baseUrl}` + 'Sign-Up',user);
  }
  updateUser(id: number, user: User): Observable<Object>{
    return this._http.put(`${this.baseUrl2}/${id}`, user);
  }


}
