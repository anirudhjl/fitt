import { Component, OnInit } from '@angular/core';
import { DinnerService } from 'src/app/_services/dinner/dinner.service';

@Component({
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.css'],
})
export class DinnerComponent implements OnInit {
  public dinnerMenu: any;

  constructor(private dinnerService: DinnerService) {}

  ngOnInit() {
    this.getDinner();
  }

  getDinner() {
    const subscription = this.dinnerService.getDinner().subscribe(
      (data) => {
        this.dinnerMenu = data;
      },
      (err) => console.error(err),
      () => console.log('Dinner Menu loaded')
    );
    subscription.unsubscribe();
  }
}
