import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { LayoutRoutingModule } from './layout-routing.module';
import { WelcomeModule } from '../modules/welcome/welcome.module';
import { CommonModule } from '@angular/common';
import { ActeModule } from '../modules/acte/acte.module';

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule,
    LayoutRoutingModule,
    WelcomeModule,
    ActeModule
  ],
  providers: [],
  bootstrap: []
})
export class LayoutModule { }
