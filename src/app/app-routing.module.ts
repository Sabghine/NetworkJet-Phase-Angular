import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {InvitationsComponent} from "./invitations/invitations.component";
import {SendInvitationComponent} from "./send-invitation/send-invitation.component";
import {UpdateInvitationComponent} from "./update-invitation/update-invitation.component";
import {PlanningsComponent} from "./plannings/plannings.component";
import {AddPlanningComponent} from "./add-planning/add-planning.component";
import {StatisticsComponent} from "./statistics/statistics.component";

const routes: Routes = [
  {path : 'home' , component : HomeComponent},
  {path : 'invitations', component : InvitationsComponent},
  {path : 'plannings', component : PlanningsComponent},
  {path : 'addPlanning', component : AddPlanningComponent},
  {path : 'sendInvitation', component : SendInvitationComponent},
  {path : 'updateInvitation/:id', component : UpdateInvitationComponent},
  {path : 'statistics', component : StatisticsComponent},
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
