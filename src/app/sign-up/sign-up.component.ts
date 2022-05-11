import { Component, OnInit } from '@angular/core';
import {UsersService} from "../shared/user.service";
import {RegistrationRequest} from "../Model/registration-request";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user:any = new RegistrationRequest();
  constructor( private serviceuser : UsersService) { }


  ngOnInit(): void {
  }
  adduser(){
    this.serviceuser.adduser(this.user).subscribe(

    );
    location.reload()
  }
}
