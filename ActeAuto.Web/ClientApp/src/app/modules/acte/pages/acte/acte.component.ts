import { Component, OnInit } from '@angular/core';
import { ActeService } from '../../acte.service';

@Component({
  selector: 'app-acte',
  templateUrl: './acte.component.html',
  styleUrls: ['./acte.component.scss']
})
export class ActeComponent implements OnInit {

  constructor(private acteService: ActeService) { }

  ngOnInit() {
    this.acteService.Get().subscribe(x => console.log(x));
  }

}
