import { Component, OnInit } from '@angular/core';
import { ActeService } from '../../acte.service';
import { ComponentCanDeactivate } from 'src/app/modules/shared/guards';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmationDialogComponent, SelectedDocsService } from 'src/app/modules/shared';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-acte',
  templateUrl: './acte.component.html',
  styleUrls: ['./acte.component.scss']
})
export class ActeComponent extends ComponentCanDeactivate implements OnInit {

  confirmationDialog: MatDialogRef<ConfirmationDialogComponent>;

  constructor(
    private acteService: ActeService,
    public dialog: MatDialog
  ) {
    super();
  }

  ngOnInit() {
    //this.acteService.Get().subscribe(x => console.log(x));
  }

  canDeactivate(): Observable<boolean> | boolean {
    this.confirmationDialog = this.dialog.open(ConfirmationDialogComponent);
    return this.confirmationDialog.afterClosed()
      .pipe(
        map(res => {
          return res;
        })
      );
  }

}
