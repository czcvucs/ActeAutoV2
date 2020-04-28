import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActeComponent } from './pages';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MAT_DATE_LOCALE, MatIconModule, MatButtonModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { ConfirmationDialogComponent } from '../shared';
import { CumparatorComponent } from './components/cumparator/cumparator.component';
import { VehiculComponent } from './components/vehicul/vehicul.component';
import { VanzatorComponent } from './components/vanzator/vanzator.component';
import { InfoComponent } from './components/info/info.component';
import { AdresaComponent } from './components/adresa/adresa.component';
import { BuletinComponent } from './components/buletin/buletin.component';

@NgModule({
    declarations: [
        ActeComponent,
        CumparatorComponent,
        VehiculComponent,
        VanzatorComponent,
        InfoComponent,
        AdresaComponent,
        BuletinComponent,
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
        MatButtonModule
    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
    ],
    entryComponents: [ConfirmationDialogComponent],
})
export class ActeModule { }
