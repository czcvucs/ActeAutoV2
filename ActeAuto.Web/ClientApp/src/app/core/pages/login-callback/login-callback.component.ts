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

  constructor(
    private router: Router,
    private snackbar: SimpleSnackBarService,
    private authService: MsAdalAngular6Service,
  ) { }

  ngOnInit() {
    console.log(this.authService.isAuthenticated);
    if (this.authService.isAuthenticated) {
      console.log(appUrl);
      console.log('here');
      this.router.navigate(['/welcome']);
    } else {
      this.snackbar.openError('Login completion failed');
    }
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
