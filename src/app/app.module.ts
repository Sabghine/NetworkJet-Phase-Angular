import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComplaintService } from './complaint.service';
import { HomeComponent } from './home/home.component';
import { InvitationsComponent } from './invitations/invitations.component';
import { FormsModule } from '@angular/forms';
import { ChartsComponent } from './charts/charts.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InvitationsComponent,
    ChartsComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [ComplaintService],
  bootstrap: [AppComponent]
})
export class AppModule { }
