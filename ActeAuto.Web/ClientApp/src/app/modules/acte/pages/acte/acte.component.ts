import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmationDialogComponent, SelectedDocsService, SimpleSnackBarService, PrintDialogComponent } from 'src/app/modules/shared';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-acte',
  templateUrl: './acte.component.html',
  styleUrls: ['./acte.component.scss']
})
export class ActeComponent implements OnInit {

  confirmationDialog: MatDialogRef<ConfirmationDialogComponent>;
  printForm: FormGroup;

  constructor(
    private snackbar: SimpleSnackBarService,
    public dialog: MatDialog,
    private selectedDocsService: SelectedDocsService
  ) { }

  ngOnInit() {
    this.printForm = new FormGroup({
      cumparator: new FormGroup({
        nume: new FormControl(''),
        email: new FormControl(''),
        telefon: new FormControl(''),
        adresa: new FormGroup({
          judet: new FormControl(''),
          localitate: new FormControl(''),
          strada: new FormControl(''),
          numar: new FormControl(''),
          bloc: new FormControl(''),
          scara: new FormControl(''),
          etaj: new FormControl(''),
          apartament: new FormControl(''),
        }),
        buletin: new FormGroup({
          cnp: new FormControl(''),
          serie: new FormControl(''),
          numar: new FormControl(''),
          emisDe: new FormControl(''),
          dataEmitere: new FormControl(''),
          dataNastere: new FormControl(''),
          locNastere: new FormControl(''),
        })
      }),
      vehicul: new FormGroup({
        marca: new FormControl(''),
        tip: new FormControl(''),
        nrInm: new FormControl(''),
        serieSasiu: new FormControl(''),
        cilindre: new FormControl(''),
        carburant: new FormControl(''),
        serieMotor: new FormControl(''),
        categorie: new FormControl(''),
        fabricatie: new FormControl(''),
        dataInmatriculare: new FormControl(''),
        culoare: new FormControl(''),
        serieCarte: new FormControl(''),
        numarTalon: new FormControl(''),
        moneda: new FormControl(''),
        pretLitere: new FormControl(''),
        dataVanzare: new FormControl(''),
        locVanzare: new FormControl(''),
        kilometri: new FormControl(''),
        platforma: new FormControl(''),
      }),
      vanzator: new FormGroup({
        nume: new FormControl(''),
        email: new FormControl(''),
        telefon: new FormControl(''),
        adresa: new FormGroup({
          judet: new FormControl(''),
          localitate: new FormControl(''),
          strada: new FormControl(''),
          numar: new FormControl(''),
          bloc: new FormControl(''),
          scara: new FormControl(''),
          etaj: new FormControl(''),
          apartament: new FormControl(''),
          adresaCustom: new FormControl(''),
        }),
        buletin: new FormGroup({
          cnp: new FormControl(''),
          serie: new FormControl(''),
          numar: new FormControl(''),
          emisDe: new FormControl(''),
          dataEmitere: new FormControl(''),
          dataNastere: new FormControl(''),
          locNastere: new FormControl(''),
        })
      }),
      documents: new FormGroup({
        imputernicirePrimarie: new FormControl(''),
        decizieImpunere: new FormControl(''),
        fisaInmatriculare: new FormControl(''),
        scoatereDinEvidentaPrimarie: new FormControl(''),
        timbruAnaf: new FormControl(''),
        tvaAnaf: new FormControl(''),
        imputernicireAnaf: new FormControl(''),
        inmatriculare: new FormControl(''),
        certificatRadiere: new FormControl(''),
        declaratiePlatforma: new FormControl(''),
        delegatie: new FormControl('')
      })
    });
  }

  printDocument(formValues): void {
    const dialogRef = this.dialog.open(PrintDialogComponent, {
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
    //   if (this.printForm.valid) {
    //     console.log(formValues);
    //   } else {
    //     this.snackbar.openError('Formularul este invalid');
    //     console.log(formValues);
    //   }
    // }
  }
}
