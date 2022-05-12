import { Component, OnInit } from '@angular/core';
import {InvitationService} from "../shared/Invitations/invitation.service";
import {Invitation} from "../Models/Invitation";
import {Router} from "@angular/router";
import {Subject} from "rxjs";

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.css']
})
export class InvitationsComponent implements OnInit {
  searchText:any;
  listInvitations : Invitation[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private _service:InvitationService , private router: Router) { }

  ngOnInit(): void {

    this._service.getInvitation().subscribe(res=>{console.log(res);

      this.listInvitations=res;
      // initiate our data table
      this.dtTrigger.next(res);
    });

  }

  deleteInvitation(id:number){
    this._service.deleteInvitationById(id).subscribe(()=>this._service.getInvitation().subscribe(res=>{this.listInvitations=res})
  );
  }

  updateInvitation(invitation_id: number){
    this.router.navigate(['updateInvitation', invitation_id]);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
