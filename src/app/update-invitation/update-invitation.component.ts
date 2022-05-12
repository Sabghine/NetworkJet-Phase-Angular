import { Component, OnInit } from '@angular/core';
import {Invitation} from "../Models/Invitation";
import {InvitationService} from "../shared/Invitations/invitation.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-invitation',
  templateUrl: './update-invitation.component.html',
  styleUrls: ['./update-invitation.component.css']
})
export class UpdateInvitationComponent implements OnInit {
  invitation_id: number;

  message:string;
  invitation: Invitation = new Invitation();
  constructor(private invitationService : InvitationService,
              private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.invitation_id=this.route.snapshot.params['id'];
    this.invitationService.getInvitationById(this.invitation_id).subscribe(data =>{
      this.invitation=data;
    }, error => console.log(error))
  }

  updateInvitation(){
    this.invitationService.updateInvitation(this.invitation.idInvitation, this.invitation).subscribe(data =>{
      console.log(data);
      this.invitation = new Invitation();
      //this.gotoList();
    }, error => console.log(error))
  }
  onSubmit(){
    console.log(this.invitation)
    this.updateInvitation();
  }

}
