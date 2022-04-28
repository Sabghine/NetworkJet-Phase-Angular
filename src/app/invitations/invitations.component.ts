import { Component, OnInit } from '@angular/core';
import {InvitationService} from "../shared/Invitations/invitation.service";
import {Invitation} from "../Models/Invitation";

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.css']
})
export class InvitationsComponent implements OnInit {

  listInvitations : Invitation[];
  constructor(private _service:InvitationService) { }

  ngOnInit(): void {

    this._service.getInvitation().subscribe(res=>{console.log(res);

      this.listInvitations=res});
  }

  // deleteInvitation(id:number){
  //   this._service.deleteInvitationById(id).subscribe(()=>this._service.getInvitation().subscribe(res=>{this.listInvitations=res})
  // );
  // }

}
