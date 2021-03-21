import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/lib/base-component';

@Component({
    selector: 'app-queues',
    templateUrl: './queues.component.html',
    styleUrls: ['./queues.component.css']
})
export class QueuesComponent extends BaseComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit(): void {
    }

}
