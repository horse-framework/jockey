import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from 'src/interceptors/session.guard';
import { GuestLayoutComponent } from './layout/guest-layout/guest-layout.component';
import { PortalLayoutComponent } from './layout/portal-layout/portal-layout.component';

const routes: Routes = [
    {
        path: 'queue',
        component: PortalLayoutComponent,
        loadChildren: () => import('./queue/detail/queue-detail.module').then(m => m.QueueModule),
        canActivate: [SessionGuard]
    },
    {
        path: 'queues',
        component: PortalLayoutComponent,
        loadChildren: () => import('./queue/list/queues.module').then(m => m.QueuesModule),
        canActivate: [SessionGuard]
    },
    {
        path: 'router',
        component: PortalLayoutComponent,
        loadChildren: () => import('./router/router.module').then(m => m.HorseRouterModule),
        canActivate: [SessionGuard]
    },
    {
        path: 'routers',
        component: PortalLayoutComponent,
        loadChildren: () => import('./routers/routers.module').then(m => m.RoutersModule),
        canActivate: [SessionGuard]
    },
    {
        path: 'cache',
        component: PortalLayoutComponent,
        loadChildren: () => import('./cache/cache.module').then(m => m.CacheModule),
        canActivate: [SessionGuard]
    },
    {
        path: 'channel',
        component: PortalLayoutComponent,
        loadChildren: () => import('./channel/channel-detail/channel-detail.module').then(m => m.ChannelDetailModule),
        canActivate: [SessionGuard]
    },
    {
        path: 'channels',
        component: PortalLayoutComponent,
        loadChildren: () => import('./channel/channels/channels.module').then(m => m.ChannelsModule),
        canActivate: [SessionGuard]
    },
    {
        path: 'client',
        component: PortalLayoutComponent,
        loadChildren: () => import('./client/client-detail/client-detail.module').then(m => m.ClientDetailModule),
        canActivate: [SessionGuard]
    },
    {
        path: 'clients',
        component: PortalLayoutComponent,
        loadChildren: () => import('./client/clients/clients.module').then(m => m.ClientsModule),
        canActivate: [SessionGuard]
    },
    {
        path: 'nodes',
        component: PortalLayoutComponent,
        loadChildren: () => import('./nodes/nodes.module').then(m => m.NodesModule),
        canActivate: [SessionGuard]
    },
    {
        path: 'handlers',
        component: PortalLayoutComponent,
        loadChildren: () => import('./handlers/handlers.module').then(m => m.HandlersModule),
        canActivate: [SessionGuard]
    },
    {
        path: 'console',
        component: PortalLayoutComponent,
        loadChildren: () => import('./console/console.module').then(m => m.ConsoleModule),
        canActivate: [SessionGuard]
    },
    {
        path: 'login',
        component: GuestLayoutComponent,
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'dashboard',
        component: PortalLayoutComponent,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [SessionGuard]
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
