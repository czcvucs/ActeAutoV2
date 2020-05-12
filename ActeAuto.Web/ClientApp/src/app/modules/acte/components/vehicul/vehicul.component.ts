import { Component, Input } from '@angular/core';
import { FieldsBase } from '../fields-base';
import { SelectedDocsService } from 'src/app/modules/shared';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vehicul',
  templateUrl: './vehicul.component.html',
  styleUrls: ['./vehicul.component.scss']
})
export class VehiculComponent extends FieldsBase {

  @Input() form: FormGroup;

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

  constructor(protected selectedDocsService: SelectedDocsService) {
    super(selectedDocsService);
  }
}
