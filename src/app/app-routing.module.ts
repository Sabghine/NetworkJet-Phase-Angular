import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {InvitationsComponent} from "./invitations/invitations.component";
import {ChartsComponent} from "../app/charts/charts.component";

const routes: Routes = [
  {path : 'home' , component : HomeComponent},
  {path : 'invitations', component : InvitationsComponent},
  {path :'charts', component:ChartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
