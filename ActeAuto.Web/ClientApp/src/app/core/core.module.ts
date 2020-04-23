import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material';
import { LoginComponent } from './pages';
import { MsAdalAngular6Module } from 'microsoft-adal-angular6';
import { authConfig } from './config';
import { SharedModule } from '../modules/shared/shared.module';
import { UnauthorizedLayoutComponent } from './pages/unauthorized-layout/unauthorized-layout.component';
import { LoginCallbackComponent } from './pages/login-callback/login-callback.component';
import { MatLoadingModule } from '../modules/shared/utils/mat-loading/mat-loading.module';
import { InsertAuthTokenInterceptor } from './interceptor';

@NgModule({
  declarations: [
    LoginComponent,
    UnauthorizedLayoutComponent,
    LoginCallbackComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatToolbarModule,
    SharedModule,
    MatLoadingModule,
    MsAdalAngular6Module.forRoot(authConfig),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InsertAuthTokenInterceptor,
      multi: true
    },
  ],
})
export class CoreModule { }
