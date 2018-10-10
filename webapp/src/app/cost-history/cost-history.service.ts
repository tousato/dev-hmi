import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CostHistoryService {
  constructor(private http: HttpClient) {}

  requestGet(callback: any) {

    this.http.get("/api")
    .subscribe(response => {
        callback(response);
    });
  }

  getMizuho(callback: any) {

    this.http.get("/cost-history/mizuho")
    .subscribe(response => {
        callback(response);
    });
  }
}
