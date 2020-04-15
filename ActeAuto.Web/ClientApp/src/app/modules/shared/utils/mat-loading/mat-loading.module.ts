import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLoadingComponent } from './mat-loading.component';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [MatLoadingComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ],
  exports: [MatLoadingComponent]
})
export class MatLoadingModule { }
