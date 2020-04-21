import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  documents = [
    'Impunere Primărie',
    'Fișă Înmatriculare',
    'Radiere primărie',
    'Certificat T.V.A',
    'Certificat radiere',
    'Cerere S.P.C.R.C.I.V',
    'Declarație Numere',
    'Procură / Delegație',
    'Traducere'];
  countries = [
    'România',
    'Anglia',
    'Bulgaria',
    'Franta',
    'România',
    'Italia',
    'Olanda'
  ];

  userName: string;
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    private authService: MsAdalAngular6Service,
    media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.userName = this.authService.LoggedInUserName;
  }

  logout(): void {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
