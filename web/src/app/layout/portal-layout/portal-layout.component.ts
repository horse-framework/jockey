import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionUser } from '../../../models/session-user';
import { BaseFormComponent } from '../../../lib/base-form.component';
import { EventService } from '../../../services/event.service';
import { SessionStore } from '../../stores/session-store';
import { ENVIRONMENT, Environment } from '../../../lib/environment.initializer';

@Component({
    selector: 'app-portal-layout',
    templateUrl: './portal-layout.component.html',
    styleUrls: ['./portal-layout.component.css'],
    standalone: false
})
export class PortalLayoutComponent extends BaseFormComponent implements OnInit {

    user: SessionUser | null = null;
    version: string = '';

    refreshItems = [
        { text: 'No Refresh', value: 0 },
        { text: 'Every 5 secs', value: 5000 },
        { text: 'Every 10 secs', value: 10000 },
        { text: 'Every 15 secs', value: 15000 },
        { text: 'Every 30 secs', value: 30000 },
        { text: 'Every min', value: 60000 }
    ];
    refreshItem: any = null;

    readonly #env: Environment = inject(ENVIRONMENT);

    constructor(private session: SessionStore, private eventService: EventService, private router: Router) {
        super();
        this.refreshItem = this.refreshItems[1];

        if (!localStorage.getItem('refresh-interval')) {
            localStorage.setItem('refresh-interval', this.refreshItem.value);
        }
    }

    ngOnInit(): void {
        this.user = this.session.state();
        this.version = this.#env.version;
    }

    logout(): void {
        this.session.setState(null);
        this.router.navigateByUrl('/login');
    }

    refreshChanged(): void {
        this.eventService.raise('refresh-interval', this.refreshItem.value);
    }
}
