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

  createInvitation(inv: Invitation): Observable<Invitation>{
    return this._http.post<Invitation>(`${this.invitationsUrl}`, inv);
  }

  getInvitationById (id: number):Observable<any>{
    return this._http.get<Invitation>(`${this.invitationsUrl}/getInvitationById/${id}`)
  }

  updateInvitation(id: number, invitation: Invitation): Observable<Invitation>{
    return this._http.put<Invitation>(`${this.invitationsUrl}/${id}`, invitation);
  }

  deleteInvitationById(id:number){
    return this._http.delete(`${this.invitationsUrl}/${id}`);
  }

}
