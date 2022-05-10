import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Complaint } from './complaint';
import { ComplaintService } from './complaint.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public complaints : Complaint[];

  constructor(private complaintService : ComplaintService){}

  
  ngOnInit() {
    this.getComplaints();
  }

  public getComplaints(): void {
    this.complaintService.getComplaints().subscribe(
      (response: Complaint[]) => {
        this.complaints = response;
        console.log(this.complaints);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}