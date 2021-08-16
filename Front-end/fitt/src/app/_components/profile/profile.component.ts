import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public userDetails: any;

  constructor(private router: Router) {}

  ngOnInit() {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
    location.reload();
  }
}
