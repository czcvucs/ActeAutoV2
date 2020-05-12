import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectedDocsService } from 'src/app/modules/shared';
import { FieldsBase } from '../fields-base';

@Component({
  selector: 'app-vanzator',
  templateUrl: './vanzator.component.html',
  styleUrls: ['./vanzator.component.scss']
})
export class VanzatorComponent extends FieldsBase {

  @Input() form: FormGroup;

  constructor(protected selectedDocsService: SelectedDocsService) {
    super(selectedDocsService);
  }
}
