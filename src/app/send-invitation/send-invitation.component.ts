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
  public form: FormGroup;
  constructor(public fb: FormBuilder,private inv:InvitationService, private _router:Router) {
    this.form = this.fb.group({
      content: [null, Validators.compose([Validators.required])],
    });
  }


  sendInvitation(invitation: Invitation) {
    this.inv.sendInvitation(invitation).subscribe((res) => {
      console.log(res);
    });
  }


  ngOnInit(): void {
  }

}
