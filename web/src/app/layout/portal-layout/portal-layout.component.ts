import { Component, OnInit } from '@angular/core';
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

    constructor(private session: SessionService) {
        super();
    }

    ngOnInit(): void {
        this.user = this.session.get();
    }

    logout(): void {

    }

}
