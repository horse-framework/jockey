import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BaseComponent } from 'src/lib/base-component';
import { SessionUser } from 'src/models/session-user';
import { EventService } from 'src/services/event.service';
import { SessionService } from 'src/services/session.service';

@Component({
    selector: 'app-portal-layout',
    templateUrl: './portal-layout.component.html',
    styleUrls: ['./portal-layout.component.css'],
    standalone: false
})
export class PortalLayoutComponent extends BaseComponent implements OnInit {

    user: SessionUser;
    version: string;

    refreshItems = [
        { text: 'No Refresh', value: 0 },
        { text: 'Every 5 secs', value: 5000 },
        { text: 'Every 10 secs', value: 10000 },
        { text: 'Every 15 secs', value: 15000 },
        { text: 'Every 30 secs', value: 30000 },
        { text: 'Every min', value: 60000 }
    ];
    refreshItem = null;

    constructor(private session: SessionService, private eventService: EventService, private router: Router) {
        super();
        this.refreshItem = this.refreshItems[1];

        if (!localStorage.getItem('refresh-interval')) {
            localStorage.setItem('refresh-interval', this.refreshItem.value);
        }
    }

    ngOnInit(): void {
        this.user = this.session.get();
        this.version = environment.version;
    }

    logout(): void {
        this.session.clear();
        this.router.navigateByUrl('/login');
    }

    refreshChanged(): void {
        this.eventService.raise('refresh-interval', this.refreshItem.value);
    }
}
