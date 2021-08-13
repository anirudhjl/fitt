import { Component, OnInit } from '@angular/core';
import { StrengthService } from 'src/app/_services/strength/strength.service';

@Component({
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.css'],
})
export class StrengthComponent implements OnInit {
  public StrengthData: any;

  constructor(private StrengthService: StrengthService) {}

  ngOnInit() {
    this.StrengthService.getStrength().subscribe(
      (data) => (this.StrengthData = data)
    );
  }
}
