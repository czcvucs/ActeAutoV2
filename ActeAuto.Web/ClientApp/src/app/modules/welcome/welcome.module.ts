import { WelcomeComponent } from './pages';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatLoadingModule } from '../shared/utils/mat-loading/mat-loading.module';

@NgModule({
    declarations: [
        WelcomeComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatLoadingModule
    ],
    providers: [],
})
export class WelcomeModule { }
