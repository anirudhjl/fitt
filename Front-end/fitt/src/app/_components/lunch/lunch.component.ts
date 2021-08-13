import { Component, OnInit } from '@angular/core';
import { LunchService } from './../../_services/lunch/lunch.service';

@Component({
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css'],
})
export class LunchComponent implements OnInit {
  public lunchMenu: any;

  constructor(private lunchService: LunchService) {}

  ngOnInit() {
    this.lunchService.getLunch().subscribe((data) => (this.lunchMenu = data));
  }
}
