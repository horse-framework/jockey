import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SessionStore } from './stores/session-store';
import { WebsocketService } from '../services/websocket.service';
import { BaseFormComponent } from '../lib/base-form.component';

@Component({
    selector: 'app-root',
    template: '<router-outlet />',
    imports: [RouterOutlet],
    standalone: true
})
export class AppComponent extends BaseFormComponent implements OnInit {

    readonly #store: SessionStore = inject(SessionStore);
    readonly #socket: WebsocketService = inject(WebsocketService);

    ngOnInit(): void {

        this.#store.action$.subscribe(() => {
            if (this.#store.state()) {
                this.#socket.connect(this.#store.state()!.token);
            }
            else {
                this.#socket.disconnect();
            }
        });
    }

}
