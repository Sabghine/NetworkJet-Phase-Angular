import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {InvitationsComponent} from "./invitations/invitations.component";
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path : 'home' , component : HomeComponent},
  {path : 'invitations', component : InvitationsComponent},
  {path:'post', component : PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
