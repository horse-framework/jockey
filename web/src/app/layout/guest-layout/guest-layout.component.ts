import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../../../lib/base-form.component';

@Component({
    selector: 'app-guest-layout',
    templateUrl: './guest-layout.component.html',
    styleUrls: ['./guest-layout.component.css'],
    standalone: false
})
export class GuestLayoutComponent extends BaseFormComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit(): void {
    }

}
