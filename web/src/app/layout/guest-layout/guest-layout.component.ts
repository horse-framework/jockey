import { Component, inject, OnInit } from '@angular/core';
import { BaseFormComponent } from '../../../lib/base-form.component';
import { ENVIRONMENT, Environment } from '../../../lib/environment.initializer';

@Component({
    selector: 'app-guest-layout',
    templateUrl: './guest-layout.component.html',
    styleUrls: ['./guest-layout.component.css'],
    standalone: false
})
export class GuestLayoutComponent extends BaseFormComponent implements OnInit {

    version: string = '';
    readonly #env: Environment = inject(ENVIRONMENT);

    ngOnInit(): void {
        this.version = this.#env.version;
    }

}
