import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from 'src/interceptors/session.guard';
import { GuestLayoutComponent } from './layout/guest-layout/guest-layout.component';
import { PortalLayoutComponent } from './layout/portal-layout/portal-layout.component';


const routes: Routes = [
    {
        path: 'queue',
        component: PortalLayoutComponent,
        loadChildren: () => import('./queue/queue.module').then(m => m.QueueModule),
        canActivate: [SessionGuard]
    },
    {
        path: 'queues',
        component: PortalLayoutComponent,
        loadChildren: () => import('./queues/queues.module').then(m => m.QueuesModule),
        canActivate: [SessionGuard]
    },
    {
        path: 'route',
        component: PortalLayoutComponent,
        loadChildren: () => import('./route/route.module').then(m => m.RouteModule),
        canActivate: [SessionGuard]
    },
    {
        path: 'routes',
        component: PortalLayoutComponent,
        loadChildren: () => import('./routes/routes.module').then(m => m.RoutesModule),
        canActivate: [SessionGuard]
    },
    {
        path: 'clients',
        component: PortalLayoutComponent,
        loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule),
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
        path: 'console-v1',
        component: PortalLayoutComponent,
        loadChildren: () => import('./console/console.module').then(m => m.ConsoleModule),
        canActivate: [SessionGuard]
    },
    {
        path: 'console',
        component: PortalLayoutComponent,
        loadChildren: () => import('./console2/console2.module').then(m => m.Console2Module),
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
