import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Shared/user.service';
import {User} from "../core/Models/User"
import {Subject} from "rxjs";
import {data} from "jquery";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  User : User[]=[];
  userStatus?: string[];
  constructor(private _service:UsersService) { }
  userArray : any[]=[];
  dtOptions: DataTables.Settings={};
  dtTrigger : Subject<any>=new Subject();
  user : User = new User();
  deleteMessage = false;
  listusers:any;
  isupdated=false;
  users?: User[]=[];
  searchTerm!: String;
  ngOnInit(): void {
    this.isupdated = false;
    this.dtOptions = {
      pageLength: 6,
      stateSave: true,
      lengthMenu: [[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };
    this._service.retrieveAllUsers().subscribe(data => {
      this.users = data;
      this.dtTrigger.next;
    })
  };
  retrieveUserById(id:number) {
    this._service.retrieveById(id).subscribe(data => {
      console.log(data);
      this.user = data;
      this.dtTrigger.next;
    })
  };
    deleteUser (id: number) {
      this._service.deleteById(id).subscribe( data=>{
        console.log(data);
        this.deleteMessage=true;
        this._service.retrieveAllUsers().subscribe(data=>{
          this.users=data
        })
      },
        error => console.log(error));
    }

}
