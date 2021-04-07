import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/lib/base-component';
import { HorseClient } from 'src/models/horse-client';
import { ClientService } from 'src/services/client.service';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.css']
})
export class ClientsComponent extends BaseComponent implements OnInit {

    clients: HorseClient[] = null;

    constructor(private clientService: ClientService) {
        super();
    }

    async ngOnInit() {

        this.clients = await this.clientService.list();

    }

}
