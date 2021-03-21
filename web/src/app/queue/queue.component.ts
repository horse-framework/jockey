import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/lib/base-component';

@Component({
    selector: 'app-queue',
    templateUrl: './queue.component.html',
    styleUrls: ['./queue.component.css']
})
export class QueueComponent extends BaseComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit(): void {
    }

}
