import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class BreakfastService {
  constructor(private http: HttpClient) {}

  getBreakfast() {
    return this.http.get('/server/api/v1/breakfast');
  }
}
