import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSnackBarModule,
  MatDialogModule,
  MatButtonModule,
  MatCardModule,
  MatSelectModule
} from '@angular/material';
import { ConfirmationDialogComponent } from './components';
import { PrintDialogComponent } from './components/print-dialog/print-dialog.component';

@NgModule({
  declarations: [
    ConfirmationDialogComponent,
    PrintDialogComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule
  ],
  providers: [],
})
export class SharedModule { }
