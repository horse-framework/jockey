import { Injectable } from '@angular/core';
import { ApiClient } from 'src/lib/api-client';
import { SessionService } from './session.service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private api: ApiClient, private session: SessionService) { }
}
