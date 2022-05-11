import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DataTablesModule} from "angular-datatables";
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import {BasicAuthHtppInterceptorService} from "./shared/basic-auth-interceptor.service";
import { ProfileComponent } from './profile/profile.component';
import {ToastrModule} from "ngx-toastr";
import {RouterModule} from "@angular/router";
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import { UpdateUserComponent } from './update-user/update-user.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    LoginComponent,
    ProfileComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    VerifyEmailComponent,
    UpdateUserComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    ReactiveFormsModule,
  ],

  providers: [ { provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
