import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { HorseRouter } from '../../../src/models/horse-router';
import { RouterBinding } from '../../../src/models/router-binding';
import { HorseRouterService } from '../../../src/services/horse-router.service';
import { ConfirmModalComponent } from '../layout/portal-layout/confirm-modal/confirm-modal.component';
import { BindingAddModalComponent } from './binding-add-modal/binding-add-modal.component';
import { BaseFormComponent } from '../../lib/base-form.component';

@Component({
    selector: 'app-router',
    templateUrl: './router.component.html',
    styleUrls: ['./router.component.css'],
    standalone: false
})
export class RouterComponent extends BaseFormComponent implements OnInit {

    routerName: string | null = null;
    model: HorseRouter | null = null;

    constructor(private routerService: HorseRouterService,
        private router: Router,
        private dialog: MatDialog,
        private activatedRoute: ActivatedRoute) {
        super();
    }

    async ngOnInit() {
        this.routerName = this.activatedRoute.snapshot.params['name'];
        this.routerService.get(this.routerName!).subscribe(r => this.model = r.body!);
    }

    remove(): void {

        let dialogRef = this.dialog.open(ConfirmModalComponent, { width: '600px' });
        let component = <ConfirmModalComponent>dialogRef.componentInstance;
        component.message = 'Router and binding options will be removed belong it but binding targets will not be removed (bonded queues etc). Are you sure to <b class="imp">delete</b> this router and all bindings?';
        component.onclosed
            .pipe(take(1))
            .subscribe(value => {
                if (value)
                    this.routerService
                        .remove(this.routerName!)
                        .subscribe(msg => {
                            this.router.navigateByUrl('/routers');
                        });
            });
    }

    addBinding(): void {

        let dialogRef = this.dialog.open(BindingAddModalComponent, { width: '600px' });
        let component = <BindingAddModalComponent>dialogRef.componentInstance;
        component.model.router = this.routerName!;
        component.onconfirmed
            .pipe(take(1))
            .subscribe(value => {
                if (value)
                    this.routerService
                        .addBinding(value)
                        .subscribe(msg => {
                            this.ngOnInit();
                        });
            });
    }

    removeBinding(binding: RouterBinding): void {

        let dialogRef = this.dialog.open(ConfirmModalComponent, { width: '600px' });
        let component = <ConfirmModalComponent>dialogRef.componentInstance;
        component.message = 'Are you sure to <b class="imp">remove</b> this binding from the router?';
        component.onclosed
            .pipe(take(1))
            .subscribe(value => {
                if (value)
                    this.routerService
                        .removeBinding(this.routerName!, binding.name)
                        .subscribe(msg => this.ngOnInit());
            });
    }
}
