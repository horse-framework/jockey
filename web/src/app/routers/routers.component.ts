import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { HorseRouter } from '../../../src/models/horse-router';
import { HorseRouterService } from '../../../src/services/horse-router.service';
import { RouterCreateModalComponent } from './router-create-modal/router-create-modal.component';
import { BaseFormComponent } from '../../lib/base-form.component';

@Component({
    selector: 'app-routes',
    templateUrl: './routers.component.html',
    styleUrls: ['./routers.component.css'],
    standalone: false
})
export class RoutersComponent extends BaseFormComponent implements OnInit {

    routers: HorseRouter[] = [];

    constructor(private routerService: HorseRouterService, private dialog: MatDialog) {
        super();
    }

    async ngOnInit() {
        this.routerService.list().subscribe(response => {

            let routers = response.body!;
            routers.forEach(x => {
                x.bindings.forEach(b => {
                    if (b.target.startsWith('@'))
                        b.displayTarget = b.target.substr(b.target.indexOf(':') + 1);
                    else
                        b.displayTarget = b.target;
                });
            });

            this.routers = routers!;
            this.subscribeToListRefresh().subscribe(() => this.routerService.list().subscribe(response => this.routers = response.body!));
        });
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
                        .subscribe(response => {
                            this.ngOnInit();
                        });
            });
    }
}
