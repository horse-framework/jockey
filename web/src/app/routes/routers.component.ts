import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/lib/base-component';
import { HorseRouter } from 'src/models/horse-router';
import { HorseRouterService } from 'src/services/horse-router.service';

@Component({
    selector: 'app-routes',
    templateUrl: './routers.component.html',
    styleUrls: ['./routers.component.css']
})
export class RoutersComponent extends BaseComponent implements OnInit {

    routers: HorseRouter[];

    constructor(private routerService: HorseRouterService) {
        super();
    }

    async ngOnInit() {
        let routers = await this.routerService.list();

        routers.forEach(x => {
            x.bindings.forEach(b => {
                if (b.target.startsWith('@'))
                    b.displayTarget = b.target.substr(b.target.indexOf(':') + 1);
                else
                    b.displayTarget = b.target;
            });
        });

        this.routers = routers;
    }

}
