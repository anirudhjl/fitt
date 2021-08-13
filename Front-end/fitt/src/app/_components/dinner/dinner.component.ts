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
    this.dinnerService
      .getDinner()
      .subscribe((data) => (this.dinnerMenu = data));
  }
}
