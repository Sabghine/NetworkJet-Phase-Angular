import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {InvitationsComponent} from "./invitations/invitations.component";
import {SendInvitationComponent} from "./send-invitation/send-invitation.component";

const routes: Routes = [
  {path : 'home' , component : HomeComponent},
  {path : 'invitations', component : InvitationsComponent, children:[
      {path : 'sendInvitation', component : SendInvitationComponent}
    ]},
  {path : '**' , component : InvitationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
