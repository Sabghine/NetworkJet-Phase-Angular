import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UserComponent} from "./user/user.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {UpdateUserComponent} from "./update-user/update-user.component";


const routes: Routes = [
  {path : "home" ,component : HomeComponent},
  {path: "AllUsers",component: UserComponent},
  {path:'',component:LoginComponent},
  {path:'Profile',component:ProfileComponent},
  {path:"Sign-Up",component:SignUpComponent},
  {path:"update-user/:id",component:UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
