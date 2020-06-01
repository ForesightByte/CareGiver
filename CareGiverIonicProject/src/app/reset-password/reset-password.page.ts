import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';

import {AuthService} from '../auth.service';
import {LoginComponent} from '../login/login.component';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.page.html',
    styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
    email: string;

    constructor(
        public log: LoginComponent,
        private Auth: AuthService,
        private router: Router
    ) {
    }

    ngOnInit() {
    }

    resetPassword(email) {
        if (this.Auth.authenticated) {
            return this.log.resetPassword(this.email);
        } else {
            return console.log('Error! The email id is not recorded');
        }
    }
}
