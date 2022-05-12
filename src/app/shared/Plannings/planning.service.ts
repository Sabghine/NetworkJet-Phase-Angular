import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Invitation} from "../../Models/Invitation";
import {Planning} from "../../Models/Planning";

@Injectable({
  providedIn: 'root'
})
export class PlanningService {

  planningsUrl="http://localhost:8089/networkJet/api/planning"
  constructor(private _http: HttpClient) { }

  getPlanning() : Observable<Planning[]> {
    return this._http.get<Planning[]>(this.planningsUrl);
  }

  createPlanning(planning: Planning): Observable<Planning>{
    return this._http.post<Planning>(`${this.planningsUrl}`, planning);
  }

  getPlanningById (id: number):Observable<any>{
    return this._http.get<Planning>(`${this.planningsUrl}/getPlanningById/${id}`)
  }

  updatePlanning(id: number, planning: Planning): Observable<Planning>{
    return this._http.put<Planning>(`${this.planningsUrl}${id}`, planning);
  }
}
