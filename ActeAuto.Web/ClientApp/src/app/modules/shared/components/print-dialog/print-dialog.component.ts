import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-print-dialog',
  templateUrl: './print-dialog.component.html',
  styleUrls: ['./print-dialog.component.scss']
})
export class PrintDialogComponent implements OnInit {

  printBtn: string;
  title: string;
  options = ['1', '2', '3', '4', '5'];

  constructor(
    public thisDialogRef: MatDialogRef<PrintDialogComponent>,
  ) { }

  ngOnInit() {
    this.title = 'Alege numarul de documente';
    this.printBtn = 'Print';
  }

  print() {
    this.thisDialogRef.close(true);
  }
}
