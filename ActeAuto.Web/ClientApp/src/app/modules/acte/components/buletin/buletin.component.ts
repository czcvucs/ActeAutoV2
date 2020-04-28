import { Component, OnInit } from '@angular/core';
import { InputValidator } from 'src/app/modules/shared';

@Component({
  selector: 'app-buletin',
  templateUrl: './buletin.component.html',
  styleUrls: ['./buletin.component.scss']
})
export class BuletinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onlyNumbers($event): boolean {
    return InputValidator.isNumericValue($event);
  }
}
