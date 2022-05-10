import { Component, OnInit } from '@angular/core';
import {Invitation} from "../Models/Invitation";
import {InvitationService} from "../shared/Invitations/invitation.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-send-invitation',
  templateUrl: './send-invitation.component.html',
  styleUrls: ['./send-invitation.component.css']
})
export class SendInvitationComponent implements OnInit {
  invitation:Invitation = new Invitation();
  constructor(private inv:InvitationService, private _router:Router){}

  sendInvitation(){
    this.inv.sendInvitation(this.invitation);
    this._router.navigateByUrl("/invitation");
  }
  ngOnInit(): void {

  }


}
