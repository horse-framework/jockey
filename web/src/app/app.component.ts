import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/lib/base-component';
import { SessionService } from 'src/services/session.service';
import { WebsocketService } from 'src/services/websocket.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent implements OnInit {

    constructor(private session: SessionService,
        private websocketService: WebsocketService) {
        super();

        this.session.onchanged.subscribe(user => {

            if (user) {
                this.websocketService.connect(user.token);
            }
            else {
                this.websocketService.disconnect();
            }
        });

        this.session.run();
    }

    ngOnInit(): void {
    }

}
