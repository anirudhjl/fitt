import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  token = localStorage.getItem('token');

  constructor(private router: Router) {}

  ngOnInit() {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
    location.reload();
  }
}
