import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActeService } from '../../acte.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmationDialogComponent, SelectedDocsService } from 'src/app/modules/shared';

@Component({
  selector: 'app-acte',
  templateUrl: './acte.component.html',
  styleUrls: ['./acte.component.scss']
})
export class ActeComponent implements OnInit, AfterViewInit {

  confirmationDialog: MatDialogRef<ConfirmationDialogComponent>;

  constructor(
    private acteService: ActeService,
    public dialog: MatDialog
  ) { }

  ngAfterViewInit(): void {
  }

  ngOnInit() {
    //this.acteService.Get().subscribe(x => console.log(x));
  }

}
