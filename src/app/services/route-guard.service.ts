import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(private loginService: AuthenticateService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    if (this.loginService.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }
}
