import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/lib/base-component';

@Component({
    selector: 'app-portal-layout',
    templateUrl: './portal-layout.component.html',
    styleUrls: ['./portal-layout.component.css']
})
export class PortalLayoutComponent extends BaseComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit(): void {
    }

}
