import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Complaint } from './complaint';
import { ComplaintService } from './complaint.service';
import { NgForm } from '@angular/forms';

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


  public onAddComplaint(addForm: NgForm): void {
    document.getElementById('add-complaint-form').click();
    this.complaintService.addComplaint(addForm.value).subscribe(
      (response: Complaint) => {
        console.log(response);
        this.getComplaints();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }


  public onUpdateComplaint(complaint: Complaint): void {
    this.complaintService.updateComplaint(complaint).subscribe(
      (response: Complaint) => {
        console.log(response);
        this.getComplaints();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteComplaint(complaintId: number): void {
    this.complaintService.deleteComplaint(complaintId).subscribe(
      (response: void) => {
        console.log(response);
        this.getComplaints();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchComplaints(key: string): void {
    console.log(key);
    const results: Complaint[] = [];
    for (const complaint of this.complaints) {
      if (complaint.object.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(complaint);
      }
    }
    this.complaints = results;
    if (results.length === 0 || !key) {
      this.getComplaints();
    }
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