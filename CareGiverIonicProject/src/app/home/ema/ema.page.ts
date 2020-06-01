import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from 'src/app/auth.service';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-ema',
    templateUrl: './ema.page.html',
    styleUrls: ['./ema.page.scss'],
})
export class EmaPage implements OnInit {

    one = '../../../assets/score/1.png';
    two = '../../../assets/score/2.png';
    three = '../../../assets/score/3.png';
    four = '../../../assets/score/4.png';
    five = '../../../assets/score/5.png';

    date: string = new Date().toDateString();
    uid;

    constructor(
        private afStore: AngularFirestore,
        private auth: AuthService,
        private router: Router,
        private alert: AlertController
    ) {
        this.uid = auth.cUid;
    }


    ngOnInit() {
    }

    // pop up alert message
    async showAlert(header: string, message: string) {
        const buttonLabel = [this.one, this.two, this.three, this.four, this.five];
        const alert = this.alert.create({
            header,
            message,
            buttons: ['ok', 'yes', 'no']
        });
        await (await alert).present();
    }

    async actionOne() {
        const alert = await this.alert.create({
            header: 'this is header',
            message: '<img [src]="one" style="hight:40px; width: 40px">',
            buttons: [
                {
                    text: 'one',
                    cssClass: 'ema',
                    handler: () => {
                        this.actionTwo();
                    }
                },
                {
                    text: 'two',
                    cssClass: 'ema',
                    handler: () => {
                        this.actionTwo();
                    }
                },
                {
                    text: 'three',
                    cssClass: 'ema',
                    handler: () => {
                        this.actionTwo();
                    }
                },
                {
                    text: 'four',
                    cssClass: 'ema',
                    handler: () => {
                        this.actionTwo();
                    }
                },
                {
                    text: 'five',
                    cssClass: 'ema',
                    handler: () => {
                        this.actionTwo();
                    }
                }
            ]
        });
        await alert.present();
    }

    async actionTwo() {
        const alert = await this.alert.create({
            header: 'this is header',
            message: 'this is messege',
            buttons: ['ok', 'yes', 'no']
        });
        await alert.present();
    }
}
