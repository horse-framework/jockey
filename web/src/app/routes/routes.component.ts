import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/lib/base-component';

@Component({
    selector: 'app-routes',
    templateUrl: './routes.component.html',
    styleUrls: ['./routes.component.css']
})
export class RoutesComponent extends BaseComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit(): void {
    }

}
