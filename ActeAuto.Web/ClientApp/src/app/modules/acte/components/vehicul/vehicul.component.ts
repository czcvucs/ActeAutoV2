import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicul',
  templateUrl: './vehicul.component.html',
  styleUrls: ['./vehicul.component.scss']
})
export class VehiculComponent implements OnInit {

  categori = [
    'Autoturism',
    'Autoutilitară',
    'Moto / ATV',
    'Remorcă'
  ];
  monede = [
    'Lei',
    'Euro'
  ];
  constructor() { }

  ngOnInit() {
  }

}
