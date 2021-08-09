import { LunchService } from './../../_services/lunch/lunch.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css'],
})
export class LunchComponent implements OnInit {
  public lunchMenu: any;

  constructor(private lunchService: LunchService) {}

  ngOnInit() {
    this.getLunch();
  }

  getLunch() {
    const subscription = this.lunchService.getLunch().subscribe(
      (data: any) => {
        this.lunchMenu = data;
      },
      (err: any) => console.error(err),
      () => console.log('Lunch Menu loaded')
    );
    subscription.unsubscribe();
  }
}
