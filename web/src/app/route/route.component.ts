import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/lib/base-component';

@Component({
    selector: 'app-route',
    templateUrl: './route.component.html',
    styleUrls: ['./route.component.css']
})
export class RouteComponent extends BaseComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit(): void {
    }

}
