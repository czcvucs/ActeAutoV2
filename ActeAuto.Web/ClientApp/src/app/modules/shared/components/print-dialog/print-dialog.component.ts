import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { SelectedDocsService } from '../../services';

@Component({
  selector: 'app-print-dialog',
  templateUrl: './print-dialog.component.html',
  styleUrls: ['./print-dialog.component.scss']
})
export class PrintDialogComponent implements OnInit {

  printBtn: string;
  title: string;
  documents = {
    'impunere-primarie': ['Imputernicire Primarie', 'Decizie Impunere'],
    'fisa-inmatriculare': ['Fisa Inmatriculare'],
    'radiere-primarie': ['Scoatere Din Evidenta Primarie', 'Imputernicire Primarie'],
    'certificat-tva': ['Timbru Anaf', 'TVA Anaf', 'Imputernicire Anaf'],
    'certificat-radiere': ['Certificat Radiere'],
    'cerere-spcrciv': ['Inmatriculare'],
    'declaratie-numere': ['Declaratie Platforma'],
    'procura-delegatie': ['Delegatie']
  };
  options = ['1', '2', '3', '4', '5'];
  selectedDocs = [];

  docs = {
    'imputernicirePrimarie': '1',
    'decizieImpunere': '1',
    'fisaInmatriculare': '1',
    'scoatereDinEvidentaPrimarie': '1',
    'timbruAnaf': '1',
    'tvaAnaf': '1',
    'imputernicireAnaf': '1',
    'inmatriculare': '1',
    'certificatRadiere': '1',
    'declaratiePlatforma': '1',
    'delegatie': '1',
  };

  constructor(
    public thisDialogRef: MatDialogRef<PrintDialogComponent>,
    private selectedDocsService: SelectedDocsService
  ) { }

  ngOnInit() {
    this.title = 'Alege numarul de documente';
    this.printBtn = 'Print';
    this.selectedDocsService.currentSelected$.subscribe(docs => {
      this.selectedDocs = docs;
    });
  }

  checkSelectedDocs(docs: string[]): boolean {
    return docs.some((doc: string) => this.selectedDocs.indexOf(doc) >= 0);
  }

  print() {
    this.thisDialogRef.close(this.docs);
  }
}
