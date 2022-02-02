import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/lib/base-component';

@Component({
    selector: 'app-router',
    templateUrl: './router.component.html',
    styleUrls: ['./router.component.css']
})
export class RouterComponent extends BaseComponent implements OnInit {

    routerName: string;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
        super();
    }

    ngOnInit(): void {
        this.routerName = this.activatedRoute.snapshot.params.name;
    }

}
