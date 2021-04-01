import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/lib/base-component';
import { LoginService } from 'src/services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {

    username: string;
    password: string;
    message: string;

    constructor(private loginService: LoginService, private router: Router) {
        super();
    }

    ngOnInit(): void {
    }

    async submit() {

        let user = await this.loginService.login(this.username, this.password);
        if (user != null) {
            this.router.navigateByUrl('/dashboard');
        }
        else {
            this.message = 'Invalid username or password';
        }
    }

}
