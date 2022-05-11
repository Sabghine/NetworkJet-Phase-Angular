import { Component, OnInit } from '@angular/core';
import {map, Observable, Subscription} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {User} from "../Model/user";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id : number = null;
  private sub : Subscription;
  user : User = null;

  constructor(private AutenticatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
  }

}
