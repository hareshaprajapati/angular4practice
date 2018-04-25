import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild{
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(childRoute,state);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().then(
      (value : boolean) => {
          if(value){
            return true;
          }else{
            this.r.navigate(['/']);
          }
      }
    );
  }

  constructor(private authService: AuthService, private r: Router) { }

}
