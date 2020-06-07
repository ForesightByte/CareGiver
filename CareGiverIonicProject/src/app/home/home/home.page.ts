import {Component, OnInit} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {UserService} from '../../user.service';
import {AuthService} from '../../auth.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    displayName: Observable<any>;
    Info: Observable<any>;
    score = 0;
    scoreLabel: string;

    constructor(
        private router: Router,
        public afAuth: AngularFireAuth,
        public auth: AuthService,
        public user: UserService,
        public actionSheetController: ActionSheetController) {
        const uid = this.auth.cUid;
        this.displayName = this.user.getDisplayname(uid);
        this.Info = this.user.getUser(uid);
    }

    ngOnInit() {
        this.Info.subscribe(data => {
            this.score = data.wellbeingScore;
            this.getScoreLabel(this.score);
        });
    }

    getScoreLabel(score: number) {
        if (score < 20) {
            this.scoreLabel = 'Very Bad';
        } else if (score < 40) {
            this.scoreLabel = 'Bad';
        } else if (score < 60) {
            this.scoreLabel = 'Nutral';
        } else if (score < 80) {
            this.scoreLabel = 'Good';
        } else {
            this.scoreLabel = 'Very Good';
        }
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
