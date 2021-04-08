import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-console',
    templateUrl: './console.component.html',
    styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

    source: string = 'queue';
    targetType: string = 'name';
    target: string = '';

    showTime: boolean = true;
    showMessageId: boolean = false;
    showContentType: boolean = false;

    html: string = 'Data is created successfully';
    //html: string = '{"name": "foo", "number": 123, "enabled": true, "other": "test"}';
    a = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

    constructor() { }

    ngOnInit(): void {
    }

}
