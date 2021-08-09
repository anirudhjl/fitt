import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class StrengthService {
  constructor(private http: HttpClient) {}

  getStrength() {
    return this.http.get('/server/api/v1/strength');
  }
}
