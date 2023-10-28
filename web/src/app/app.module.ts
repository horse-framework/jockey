import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsocketService } from 'src/services/websocket.service';
import { SessionService } from 'src/services/session.service';
import { QueueService } from 'src/app/queue/services/queue.service';
import { LoginService } from 'src/services/login.service';
import { ClientService } from 'src/services/client.service';
import { GuestLayoutModule } from './layout/guest-layout/guest-layout.module';
import { PortalLayoutModule } from './layout/portal-layout/portal-layout.module';
import { ApiClient } from 'src/lib/api-client';
import { HttpClientModule } from '@angular/common/http';
import { DashboardService } from 'src/services/dashboard.service';
import { HorseRouterService } from 'src/services/horse-router.service';
import { PipesModule } from './layout/pipes/pipes.module';
import { CacheService } from 'src/app/cache/services/cache.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ChannelService } from './channel/services/channel.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GuestLayoutModule,
        PortalLayoutModule,
        HttpClientModule,
        PipesModule,
        BrowserAnimationsModule,
        MatDialogModule
    ],
    providers: [
        ApiClient,
        WebsocketService,
        DashboardService,
        SessionService,
        HorseRouterService,
        QueueService,
        LoginService,
        ClientService,
        ChannelService,
        CacheService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
