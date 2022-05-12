import { Component, OnInit } from '@angular/core';
import {Planning} from "../Models/Planning";
import {Router} from "@angular/router";
import {PlanningService} from "../shared/Plannings/planning.service";

@Component({
  selector: 'app-add-planning',
  templateUrl: './add-planning.component.html',
  styleUrls: ['./add-planning.component.css']
})
export class AddPlanningComponent implements OnInit {

  planning:Planning = new Planning();
  message:string;
  constructor(private planningService:PlanningService, private _router:Router){}


  ngOnInit(): void {
  }

  addPlanning(){
    this.planningService.createPlanning(this.planning).subscribe(data =>{
        console.log(data);
      },
      error => console.log(error));
  }

  goToPlanningList(){
    this._router.navigate(['models']);
  }

  onSubmit(){
    console.log(this.planning);

    this.addPlanning();
    this.message= "Planning" + "   " + this.planning.idPlanning + " " + "ajouté avec succés!";

  }

}
