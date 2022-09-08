import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from "../core/Models/User";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {JwtHelperService} from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = 'https://127.0.0.1:8000/api/'
  private baseUrl1= 'https://127.0.0.1:8000/api/listUser'
  private baseUrl2='https://127.0.0.1:8000/api/findbyid/'
  private baseUrl3= 'https://127.0.0.1:8000/api/getUserByEmail/'
  private baseUrl4= 'https://127.0.0.1:8000/api/updateUser/'
  constructor(private _http: HttpClient, private router: Router) {
  }

  retrieveAllUsers(): Observable<any> {
    return this._http.get(`${this.baseUrl1}`)
  }

  retrieveById(id: number): Observable<User> {
    return this._http.get<User>(`${this.baseUrl2}/${id}`);
  }
  retrieveByEmail(Email: string): Observable<User> {
    return this._http.get<User>(`${this.baseUrl3}/${Email}`);
  }

  deleteById(id: number): Observable<any> {
    return this._http.delete(`${this.baseUrl}` + 'deleteUser/' + id)
  }

  updateUser(id: number, user: User): Observable<Object>{
    return this._http.put(`${this.baseUrl4}/${id}`, user);
  }


}
