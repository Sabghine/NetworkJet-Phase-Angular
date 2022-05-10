import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Complaint } from './complaint';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ComplaintService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getComplaints() : Observable<Complaint[]> {
    return this.http.get<Complaint[]>('${this.apiServerUrl}/complaint/all');
  }

  public addComplaint(complaint : Complaint) : Observable<Complaint> {
    return this.http.post<Complaint>('${this.apiServerUrl}/complaint/add' , complaint);
      
}

public updateComplaint(complaint : Complaint) : Observable<Complaint> {
  return this.http.put<Complaint>('${this.apiServerUrl}/complaint/update' , complaint);
    
}

public deleteComplaint(complaintId: number) : Observable<void> {
  return this.http.delete<void>('${this.apiServerUrl}/complaint/delete/${complaintId}');

}

}