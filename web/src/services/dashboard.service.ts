import { Injectable } from '@angular/core';
import { ApiClient } from 'src/lib/api-client';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

    constructor(private api: ApiClient, private socket: WebsocketService) { }
}
