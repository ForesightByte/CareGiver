import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';

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
      alert('Password reset link has sent to your email')
      return this.log.resetPassword(this.email);
    } else {
      return alert('Error! The email id is not recorded');
    }
  }
}
