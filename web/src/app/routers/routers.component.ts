import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { BaseComponent } from 'src/lib/base-component';
import { HorseRouter } from 'src/models/horse-router';
import { HorseRouterService } from 'src/services/horse-router.service';
import { RouterCreateModalComponent } from './router-create-modal/router-create-modal.component';

@Component({
    selector: 'app-routes',
    templateUrl: './routers.component.html',
    styleUrls: ['./routers.component.css']
})
export class RoutersComponent extends BaseComponent implements OnInit {

    routers: HorseRouter[];

    constructor(private routerService: HorseRouterService, private dialog: MatDialog) {
        super();
    }

    async ngOnInit() {
        let routers = await this.routerService.list();

        routers.forEach(x => {
            x.bindings.forEach(b => {
                if (b.target.startsWith('@'))
                    b.displayTarget = b.target.substr(b.target.indexOf(':') + 1);
                else
                    b.displayTarget = b.target;
            });
        });

        this.routers = routers;
        this.subscribeToListRefresh().subscribe(() => this.routerService.list().then(routers => this.routers = routers));
    }

    create(): void {
        let dialogRef = this.dialog.open(RouterCreateModalComponent, { width: '600px' });
        let component = <RouterCreateModalComponent>dialogRef.componentInstance;
        component.onconfirmed
            .pipe(take(1))
            .subscribe(value => {
                if (value)
                    this.routerService
                        .create(value)
                        .then(msg => {
                            this.ngOnInit();
                        });
            });
    }
}
