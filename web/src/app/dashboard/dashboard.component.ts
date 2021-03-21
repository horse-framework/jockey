import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/lib/base-component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BaseComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit(): void {
    }

}
