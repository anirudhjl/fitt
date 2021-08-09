import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class LunchService {
  constructor(private http: HttpClient) {}

  getLunch() {
    return this.http.get('/server/api/v1/lunch');
  }
}
