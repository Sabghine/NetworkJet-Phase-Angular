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
  message:string;
  constructor(private invitationService:InvitationService, private _router:Router){}


  ngOnInit(): void {
  }

  sendInvitation(){
    this.invitationService.createInvitation(this.invitation).subscribe(data =>{
        console.log(data);
      },
      error => console.log(error));
  }

  goToInvitationList(){
    this._router.navigate(['models']);
  }

  onSubmit(){
    console.log(this.invitation);
    this.sendInvitation();
    this.message= "Invitation" + "   " + this.invitation.idInvitation + " " + "ajouté avec succés!";

  }


}
