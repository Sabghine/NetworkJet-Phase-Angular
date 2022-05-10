import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Complaint } from './complaint';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ComplaintService {

  private apiServerUrl = environment.apiBaseUrl;

  private auth_token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWJyaW5lLm1va2h0YXJAZXNwcml0LnRuJDJhJDEwJHA4bzNlczdiQ3N4dHdQUXNkRWdENi4xNXNuajF5aTBYWU5tQklmWnJ3Ump4SW83U3NQSDlPW1JPTEVfRU1QTE9ZRUVdIiwiaWF0IjoxNjUyMTk5NzkyLCJleHAiOjE2MTI3MTQzODN9.ckhPapT17xhVvVJZa3PSJpe9YXJVcl-vfJMOnXpjm6g'

  constructor(private http: HttpClient) { }

  public getComplaints(): Observable<Complaint[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })

    return this.http.get<Complaint[]>(`${this.apiServerUrl}/complaint/get-all`)
  }

  public addComplaint(complaint: Complaint): Observable<Complaint> {
    return this.http.post<Complaint>('${this.apiServerUrl}/complaint/add', complaint);

  }

  public updateComplaint(complaint: Complaint): Observable<Complaint> {
    return this.http.put<Complaint>('${this.apiServerUrl}/complaint/update', complaint);

  }

  public deleteComplaint(complaintId: number): Observable<void> {
    return this.http.delete<void>('${this.apiServerUrl}/complaint/delete/${complaintId}');

  }

}