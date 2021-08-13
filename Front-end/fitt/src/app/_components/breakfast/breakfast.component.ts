import { Component, OnInit } from '@angular/core';
import { BreakfastService } from 'src/app/_services/breakfast/breakfast.service';

@Component({
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css'],
})
export class BreakfastComponent implements OnInit {
  public breakfastMenu: any;

  constructor(private breakfastService: BreakfastService) {}

  ngOnInit() {
    this.breakfastService
      .getBreakfast()
      .subscribe((data) => (this.breakfastMenu = data));
  }
}
