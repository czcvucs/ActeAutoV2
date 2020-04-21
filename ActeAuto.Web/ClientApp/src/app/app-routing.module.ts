import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent, LoginCallbackComponent } from './core/pages';
import { AuthorizationGuard } from './core/guards/authorization.guard';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'login-callback',
    component: LoginCallbackComponent
  },
  {
    path: '', loadChildren: () =>
      import('./layout/layout.module').then(m => m.LayoutModule),
    canActivate: [AuthorizationGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
