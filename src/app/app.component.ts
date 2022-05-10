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
  public complaints: Complaint[];
  public editComplaint: Complaint;
  public deleteComplaint: Complaint;

  constructor(private complaintService: ComplaintService) { }


  ngOnInit() {
    this.getComplaints();
  }

  public getComplaints(): void {
    this.complaintService.getComplaints().subscribe(
      (response: Complaint[]) => {
        this.complaints = response;
        console.log('this.complaints', this.complaints);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(complaint: Complaint, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addComplaintModal');
    }
    if (mode === 'edit') {
      this.editComplaint = complaint;
      button.setAttribute('data-target', '#updateComplainModal');
    }
    if (mode === 'delete') {
      this.deleteComplaint = complaint;
      button.setAttribute('data-target', '#deleteComplaintModal');
    }
    container.appendChild(button);
    button.click();
  }

}