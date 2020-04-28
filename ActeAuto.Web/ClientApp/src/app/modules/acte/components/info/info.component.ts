import { Component, OnInit } from '@angular/core';
import { SelectedDocsService } from 'src/app/modules/shared';
import { InputValidator } from 'src/app/modules/shared';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  selectedDocs = [];

  constructor(private selectedDocsService: SelectedDocsService) { }

  ngOnInit() {
    this.selectedDocsService.currentSelected$.subscribe(docs => {
      this.selectedDocs = docs;
    });
  }

  onlyNumbers($event): boolean {
    return InputValidator.isNumericValue($event);
  }
}
