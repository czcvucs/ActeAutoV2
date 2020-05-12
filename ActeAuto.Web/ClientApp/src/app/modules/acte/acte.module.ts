import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActeComponent } from './pages';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MAT_DATE_LOCALE,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule
} from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { ConfirmationDialogComponent, PrintDialogComponent } from '../shared';
import { CumparatorComponent } from './components/cumparator/cumparator.component';
import { VehiculComponent } from './components/vehicul/vehicul.component';
import { VanzatorComponent } from './components/vanzator/vanzator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ActeComponent,
        CumparatorComponent,
        VehiculComponent,
        VanzatorComponent,
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        SharedModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MatSnackBarModule
    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
    ],
    entryComponents: [ConfirmationDialogComponent, PrintDialogComponent],
})
export class ActeModule { }
