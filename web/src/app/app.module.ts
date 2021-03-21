import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsocketService } from 'src/services/websocket.service';
import { SessionService } from 'src/services/session.service';
import { RouteService } from 'src/services/route.service';
import { QueueService } from 'src/services/queue.service';
import { LoginService } from 'src/services/login.service';
import { ClientService } from 'src/services/client.service';
import { DashboardService } from 'src/services/dashboard.service';
import { GuestLayoutModule } from './layout/guest-layout/guest-layout.module';
import { PortalLayoutModule } from './layout/portal-layout/portal-layout.module';
import { ApiClient } from 'src/lib/api-client';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GuestLayoutModule,
        PortalLayoutModule
    ],
    providers: [
        WebsocketService,
        SessionService,
        RouteService,
        QueueService,
        LoginService,
        ClientService,
        DashboardService,
        ApiClient
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
