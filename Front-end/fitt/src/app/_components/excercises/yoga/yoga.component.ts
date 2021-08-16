import { Component, OnInit } from '@angular/core';
import { YogaService } from 'src/app/_services/yoga/yoga.service';

@Component({
  templateUrl: './yoga.component.html',
  styleUrls: ['./yoga.component.css'],
})
export class YogaComponent implements OnInit {
  public YogaData: any;
  public searchValue: string;

  constructor(private YogaService: YogaService) {}

  ngOnInit() {
    this.YogaService.getYoga().subscribe((data) => (this.YogaData = data));
  }
}
