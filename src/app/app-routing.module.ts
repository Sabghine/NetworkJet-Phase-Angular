import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UserComponent} from "./user/user.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";


const routes: Routes = [
  {path : "home" ,component : HomeComponent},
  {path: "Back",component: UserComponent},
  {path:"Registration",component:AddUserComponent},
  {path:'Sign-In',component:LoginComponent},
  {path:"Profile",component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
