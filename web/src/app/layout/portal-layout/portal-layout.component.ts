import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BaseComponent } from 'src/lib/base-component';
import { SessionUser } from 'src/models/session-user';
import { SessionService } from 'src/services/session.service';

@Component({
    selector: 'app-portal-layout',
    templateUrl: './portal-layout.component.html',
    styleUrls: ['./portal-layout.component.css']
})
export class PortalLayoutComponent extends BaseComponent implements OnInit {

    user: SessionUser;
    version: string;

    constructor(private session: SessionService, private router: Router) {
        super();
    }

    ngOnInit(): void {
        this.user = this.session.get();
        this.version = environment.version;
    }

    logout(): void {
        this.session.clear();
        this.router.navigateByUrl('/login');
    }

}
