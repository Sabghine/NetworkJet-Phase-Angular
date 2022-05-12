import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InvitationsComponent } from './invitations/invitations.component';
import {HttpClientModule} from "@angular/common/http";
import { SendInvitationComponent } from './send-invitation/send-invitation.component';
import {FormsModule} from "@angular/forms";
import { UpdateInvitationComponent } from './update-invitation/update-invitation.component';
import { PlanningsComponent } from './plannings/plannings.component';
import {DataTablesModule} from "angular-datatables";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InvitationsComponent,
    SendInvitationComponent,
    UpdateInvitationComponent,
    PlanningsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        DataTablesModule,
        FormsModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
