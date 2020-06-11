import { Component, OnDestroy, ChangeDetectorRef, OnInit, Output, EventEmitter } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { Router } from '@angular/router';
import { SelectedDocsService } from '../modules/shared';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

  selectedOptions = [];
  doc = [
    { value: 'impunere-primarie', name: 'Impunere Primărie' },
    { value: 'fisa-inmatriculare', name: 'Fișă Înmatriculare' },
    { value: 'radiere-primarie', name: 'Radiere primărie' },
    { value: 'certificat-tva', name: 'Certificat T.V.A' },
    { value: 'certificat-radiere', name: 'Certificat radiere' },
    { value: 'cerere-spcrciv', name: 'Cerere S.P.C.R.C.I.V' },
    { value: 'declaratie-numere', name: 'Declarație Numere' },
    { value: 'procura-delegatie', name: 'Procură / Delegație' },
    { value: 'traducere', name: 'Traducere' },
  ];

  contract: '';
  countries = [
    '',
    'România',
    'Anglia',
    'Bulgaria',
    'Franta',
    'Italia',
    'Olanda'
  ];

  isLoading = false;
  userName: string;
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    private authService: MsAdalAngular6Service,
    private router: Router,
    private selectedDocsService: SelectedDocsService,
    media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.userName = this.authService.LoggedInUserName;
  }

  ngOnInit() {
    this.checkPage();
  }

  onNgModelChange() {
    this.checkPage();
  }

  checkPage() {
    this.isLoading = true;
    if (this.selectedOptions.length > 0) {
      this.selectedDocsService.setCurrentSelected(this.selectedOptions);
      this.router.navigate(['/acte']);
    } else {
      this.router.navigate(['']);
    }
  }

  logout(): void {
    this.authService.logout();
  }

  goToHome(): void {
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
