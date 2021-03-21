import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
        path: 'client',
        component: PortalLayoutComponent,
        loadChildren: () => import('./client/client.module').then(m => m.ClientModule),
        canActivate: [SessionGuard]
    },
    {
        path: 'login',
        component: GuestLayoutComponent,
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
    {
        path: '',
        component: PortalLayoutComponent,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [SessionGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
