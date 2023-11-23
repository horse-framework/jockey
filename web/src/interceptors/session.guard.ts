import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from 'src/services/session.service';

@Injectable({
    providedIn: 'root'
})
export class SessionGuard  {

    constructor(private session: SessionService, private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        let user = this.session.get();
        if (user == null) {
            this.router.navigateByUrl('/login');
            return false;
        }

        let now = new Date().getTime();
        if (user.expiration < now) {
            this.router.navigateByUrl('/login');
            return false;
        }

        return true;
    }

}
