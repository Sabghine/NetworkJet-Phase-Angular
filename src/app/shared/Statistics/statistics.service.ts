import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  statisticsUrl="http://localhost:8089/networkJet/api/invitation/statistics"
  constructor(private _http: HttpClient) { }
}
