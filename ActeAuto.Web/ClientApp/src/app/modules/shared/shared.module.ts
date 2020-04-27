import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { ConfirmationDialogComponent } from './components';

@NgModule({
  declarations: [
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
})
export class SharedModule { }
