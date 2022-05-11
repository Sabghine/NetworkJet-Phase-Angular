import {Component, Input, OnInit} from '@angular/core';
import {User} from "../Model/user";
import {UsersService} from "../shared/user.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {RegisterService} from "../shared/register.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user:User =new User();
  @Input() error: string | null;

  constructor(private registerService: RegisterService,private router: Router) { }

  ngOnInit(): void {
  }

  userRegister() {

    (this.registerService.registerUser(this.user).subscribe(
      data => {
        this.router.navigate(['/Sign-In'])
        console.log(this.user);
        alert("Successfully User is register?")
      },
      error => {
        this.error = error.message;

      }
    ));
  }}

