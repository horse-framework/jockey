import { Component, OnInit } from '@angular/core';
import { HorseClient } from '../models/horse-client';
import { BaseFormComponent } from '../../../lib/base-form.component';
import { ClientService } from '../../../services/client.service';

interface NameGroupedClients {
    name: string;
    clients: HorseClient[];
}

interface GroupedClient {
    type: string;
    name: string;
    client: HorseClient;
    typeCount?: number;
    nameCount?: number;
}

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.css'],
    standalone: false
})
export class ClientsComponent extends BaseFormComponent implements OnInit {

    model: GroupedClient[] = [];

    constructor(private clientService: ClientService) {
        super();
    }

    async ngOnInit() {
        this.refreshClients();
        this.subscribeToListRefresh().subscribe(() => this.refreshClients());
    }

    private async refreshClients() {

        this.clientService.list()
            .subscribe(response => {
                let clients = response.body!;

                let model: GroupedClient[] = [];

                let latestType: string = '';
                let latestName: string = '';
                let counts: any = {};

                clients.forEach(c => {

                    let typeKey = this.findTypeKey(c.type, c.name);
                    let nameKey = this.findNameKey(c.type, c.name);
                    if (counts[typeKey]) { counts[typeKey]++; }
                    else { counts[typeKey] = 1; }
                    if (counts[nameKey]) { counts[nameKey]++; }
                    else { counts[nameKey] = 1; }

                    let item: GroupedClient = {
                        type: c.type == latestType ? '*' : c.type,
                        name: c.name == latestName ? '*' : c.name,
                        client: c
                    };

                    latestType = c.type;
                    latestName = c.name;
                    model.push(item);
                });

                model.forEach(c => {
                    let typeKey = this.findTypeKey(c.client.type, c.client.name);
                    let nameKey = this.findNameKey(c.client.type, c.client.name);
                    c.typeCount = counts[typeKey];
                    c.nameCount = counts[nameKey];
                });

                this.model = model;
            });
    }

    private findTypeKey(type: string, name: string): string {
        let tkey = type ? ('*t*' + type) : '*tn';
        return tkey;
    }

    private findNameKey(type: string, name: string): string {
        let tkey = type ? ('*t*' + type) : '*tn';
        let nkey = name ? ('*n*' + name) : '*nn';
        return tkey + '_' + nkey;
    }

}
