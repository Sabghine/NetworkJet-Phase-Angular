import { Component, OnInit } from '@angular/core';
import {Planning} from "../Models/Planning";
import {PlanningService} from "../shared/Plannings/planning.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-plannings',
  templateUrl: './plannings.component.html',
  styleUrls: ['./plannings.component.css']
})
export class PlanningsComponent implements OnInit {

  listPlannings: Planning[];

  constructor(private _service:PlanningService, private router: Router) { }

  ngOnInit(): void {
    this._service.getPlanning().subscribe(res=>{console.log(res);

      this.listPlannings=res});
  }

  updatePlanning(planning_id: number){
    this.router.navigate(['updatePlanning', planning_id]);
  }

}
