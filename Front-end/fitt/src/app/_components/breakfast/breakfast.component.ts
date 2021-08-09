import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { BreakfastService } from 'src/app/_services/breakfast/breakfast.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css'],
})
export class BreakfastComponent implements OnInit {
  public breakfastMenu: any;

  constructor(private breakfastService: BreakfastService) {}

  ngOnInit() {
    this.getBreakfast();
  }

  getBreakfast() {
    const subscription = this.breakfastService.getBreakfast().subscribe(
      (data) => {
        this.breakfastMenu = data;
      },
      (err) => console.error(err),
      () => console.log('Breakfast Menu loaded')
    );
    subscription.unsubscribe();
  }
}
