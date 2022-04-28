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

  // deleteInvitationById(id:number){
  //   return
  //   this._http.delete("http://localhost:8089/networkJet/api/invitation /this.deleteInvitationById()/"+id);
  // }

  sendInvitation(invitation:Invitation){
    return
    this._http.post<Invitation>("http://localhost:8089/networkJet/api/invitation/sendInvitation",invitation);
  }

}
