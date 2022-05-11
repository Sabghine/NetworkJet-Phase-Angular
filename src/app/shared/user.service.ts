import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from "../Model/user";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = 'http://localhost:8900/'
  islogin = false;
  admin = false;
  suser = false;
  choixmenu: string = 'A';
  listData: User[];
  public dataForm: FormGroup;

  constructor(private _http: HttpClient, private router: Router) {
  }

  retrieveAllUsers(): Observable<any> {
    return this._http.get(`${this.baseUrl}` + 'retrieve-all-users/')
  }

  retrieveById(id: number): Observable<any> {
    return this._http.get(`${this.baseUrl}` + 'retrieve-user' + id)
  }

  deleteById(id: number): Observable<any> {
    return this._http.delete(`${this.baseUrl}` + 'remove-user/' + id)
  }

}
