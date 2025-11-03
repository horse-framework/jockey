import { Injectable } from "@angular/core";
import { ItemStore } from "../../lib/stores/item.store";
import { SessionUser } from "../../models/session-user";
import { interval } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SessionStore extends ItemStore<SessionUser> {

    run() {
        interval(5000)
            .subscribe(() => {
                let session = this.state();
                if (session) {

                    let now = Math.floor(Date.now() / 1000);
                    let diff = now - session.expiration;

                    if (diff < 0) {
                        this.setState(null);
                    }
                }
            });
    }
}