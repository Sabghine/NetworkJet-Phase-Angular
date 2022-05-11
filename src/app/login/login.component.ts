import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../shared/authentication.service";
import {User} from "../Model/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  email: string;
  password: string;
  msg = '';
  invalidLogin = false
  @Input() error: string | null;

  constructor(private router: Router,
              private loginservice: AuthenticationService) {
  }

  ngOnInit() {
  }

  checkLogin() {
    (this.loginservice.authenticate(this.user).subscribe(
        data => {
          this.router.navigate(['/Profile'])
          this.invalidLogin = false
        },
        error => {
          this.invalidLogin = true
          this.error = error.message;

        }
      )
    );

  }
}
