import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Invitation} from "../../Models/Invitation";

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  invitationsUrl="http://localhost:8089/networkJet/api/invitation"
  constructor(private _http: HttpClient) { }
  getInvitation() : Observable<Invitation[]> {
    return this._http.get<Invitation[]>(this.invitationsUrl);
  }

}
