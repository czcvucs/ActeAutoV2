import { OnInit } from '@angular/core';
import { SelectedDocsService, InputValidator } from 'src/app/modules/shared';

export abstract class FieldsBase implements OnInit {

    selectedDocs = [];

    constructor(protected selectedDocsService: SelectedDocsService) { }

    ngOnInit(): void {
        this.selectedDocsService.currentSelected$.subscribe(docs => {
            this.selectedDocs = docs;
        });
    }

    checkSelectedDocs(docs: string[]): boolean {
        return docs.some((doc: string) => this.selectedDocs.indexOf(doc) >= 0);
    }

    onlyNumbers($event: any): boolean {
        return InputValidator.isNumericValue($event);
    }
}
