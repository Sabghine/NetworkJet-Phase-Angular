import { Component, OnInit } from '@angular/core';
import {User} from "../Model/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../shared/user.service";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id: number;
  user: User = new User();
  constructor(private UserService: UsersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.UserService.retrieveById(this.id).subscribe(data => {
      this.user = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.UserService.updateUser(this.id, this.user).subscribe( data =>{

        this.goToUserList();

      }
      , error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/AllUsers']);
  }
}
