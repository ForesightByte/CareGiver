import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';

import {AuthService} from '../../auth.service';
import {UserService} from '../../user.service';
import {Observable} from 'rxjs';

import {Router} from '@angular/router';
import {Userelement} from '../../users';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    Info: Observable<Userelement>;

    constructor(
        private afAuth: AngularFireAuth,
        private afStore: AngularFirestore,
        public auth: AuthService,
        public userS: UserService,
        private router: Router
    ) {
        const uid = this.auth.cUid;
        this.Info = this.userS.getUser(uid);
        console.log(uid);
    }

    ngOnInit() {
    }

}
