import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {InvitationsComponent} from "./invitations/invitations.component";
import {SendInvitationComponent} from "./send-invitation/send-invitation.component";
import {UpdateInvitationComponent} from "./update-invitation/update-invitation.component";

const routes: Routes = [
  {path : 'home' , component : HomeComponent},
  {path : 'invitations', component : InvitationsComponent},
  {path : 'sendInvitation', component : SendInvitationComponent},
  {path : 'updateInvitation/:id', component : UpdateInvitationComponent},
    // children:[
    //   {path : 'sendInvitation', component : SendInvitationComponent}
    // ]},

  {path : '**' , component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
