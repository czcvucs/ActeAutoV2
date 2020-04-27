import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from '../modules/welcome/pages';
import { LayoutComponent } from './layout.component';
import { ActeComponent } from '../modules/acte/pages';
import { CanDeactivateGuard } from '../modules/shared/guards';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'acte',
        component: ActeComponent,
       // canDeactivate: [CanDeactivateGuard]
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
