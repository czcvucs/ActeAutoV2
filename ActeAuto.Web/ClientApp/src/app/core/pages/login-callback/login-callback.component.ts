import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleSnackBarService } from 'src/app/modules/shared';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { appUrl } from '../../config';

@Component({
  selector: 'app-login-callback',
  templateUrl: './login-callback.component.html',
  styleUrls: ['./login-callback.component.scss']
})
export class LoginCallbackComponent implements OnInit {

  isLoading = true;

  constructor(
    private router: Router,
    private snackbar: SimpleSnackBarService,
    private authService: MsAdalAngular6Service,
  ) { }

  ngOnInit() {
    if (this.authService.isAuthenticated) {
      location.replace(appUrl);
    } else {
      this.isLoading = false;
      this.snackbar.openError('Login completion failed');
    }
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
