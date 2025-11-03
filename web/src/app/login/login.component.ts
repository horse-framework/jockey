import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../src/services/login.service';
import { BaseFormComponent } from '../../lib/base-form.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    standalone: false
})
export class LoginComponent extends BaseFormComponent implements OnInit {

    username: string = '';
    password: string = '';
    message: string = '';

    constructor(private loginService: LoginService, private router: Router) {
        super();
    }

    ngOnInit(): void {
    }

    submit() {
        this.loginService.login(this.username, this.password)
            .subscribe(response => {
                if (response != null) {
                    this.router.navigateByUrl('/dashboard');
                }
                else {
                    this.message = 'Invalid username or password';
                }
            });
    }

}
