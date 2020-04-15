import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

@Injectable({
    providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
    constructor(private adalService: MsAdalAngular6Service,
        private router: Router) { }

    async canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Promise<boolean> {

        if (!this.adalService.isAuthenticated) {
            this.router.navigate(['login']);
            return false;
        }

        return true;
    }
}
