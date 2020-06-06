import {Component, OnInit} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {UserService} from '../../user.service';
import {AuthService} from '../../auth.service';
import {Observable} from 'rxjs';
import {PercentageComponent} from 'src/app/percentage/percentage.component';
import { Userelement } from 'src/app/users';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    displayName: Observable<any>;
    Info: Observable<any>;
    score: Observable<string>;
    Score: [];

    constructor(
        private router: Router,
        public afAuth: AngularFireAuth,
        public auth: AuthService,
        public user: UserService,
        public circle: PercentageComponent,
        public actionSheetController: ActionSheetController) {
        const uid = this.auth.cUid;
        this.displayName = this.user.getDisplayname(uid);
        this.Info = this.user.getUser(uid);
        this.score = this.user.getScore(uid);
    }

    ngOnInit() {
        const date = new Date();
        const dd = String(date.getUTCDate()).padStart(2, '0');
        const ydd = String(date.getUTCDate() - 1).padStart(2, '0');
        const mm = String(date.getUTCMonth() + 1).padStart(2, '0'); // January is 0!
        const yyyy = date.getUTCFullYear();

        const today = yyyy + '-' + mm + '-' + dd;
        const yesterday = yyyy + '-' + mm + '-' + ydd;
        const sdate = new Date().toLocaleString();
        console.log('today', today);
        console.log('temp', sdate);
    }

    async overlap() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Tools',
            cssClass: 'EditIcon',
            buttons: [{
                text: 'Profile',
                role: 'information',
                icon: 'contact',
                handler: () => {
                    return this.router.navigate(['./profile']);
                }
            }, {
                text: 'Settings',
                role: 'settings',
                icon: 'settings',
                handler: () => {
                    return this.router.navigate(['./settings']);
                }
            }, {
                text: 'Sign Out',
                icon: 'power',
                handler: () => {
                    this.afAuth.auth.signOut();
                    return this.router.navigate(['/tabs']);
                }
            }]
        });
        await actionSheet.present();
    }
}
