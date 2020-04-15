import { Component, OnDestroy, ChangeDetectorRef, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MsAdalAngular6Service, MsAdalAngular6Module } from 'microsoft-adal-angular6';
import { Observable } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  items = [
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
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    private authService: MsAdalAngular6Service,
    private oauthService: OAuthService,
    media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    console.log(this.getAccessToken());
    console.log(this.getLoggedInUser());
  }

  logout(): void {
    this.authService.logout();
  }

  getLoggedInUser(): any {
    return this.authService.userInfo;
  }

  getAccessToken(): Observable<any> {
    return this.authService.acquireToken('backend-api-uri');
  }

  getToken(): string {
    return this.authService.accessToken;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
