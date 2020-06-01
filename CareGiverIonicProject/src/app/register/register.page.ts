import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

import {AngularFirestore} from '@angular/fire/firestore';
import {AlertController} from '@ionic/angular';

import {UserService} from '../user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    email: string;
    password: string;
    repassword: string;
    userId: string;

    constructor(
        public afAuth: AngularFireAuth,
        public afStore: AngularFirestore,
        public alert: AlertController,
        public user: UserService,
        public router: Router) {
    }

    ngOnInit() {
    }

    // register a new account for user
    async register() {
        const {email, password, repassword, userId} = this;

        if (password !== repassword) {
            this.router.navigate(['/register']);
            this.showAlert('Error', 'Password do not match');
            return console.error('Password do not match');
        }

        try {
            const credential = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
            if (credential.user) {
                // store user information in firebase
                this.afStore.doc(`users/${credential.user.uid}`).set({
                    uid: credential.user.uid,
                    email,
                    displayName: email.split('@')[0],
                    garminUserId: this.userId,
                    photoURL: null,
                    firstName: null,
                    lastName: null,
                    age: null,
                    skills: null,
                    wellbeingScore: 0
                }, {merge: true});

                this.router.navigate(['/tabs']);
                this.afAuth.auth.currentUser.sendEmailVerification(); // send varification email to user
                console.log('We have sent you an email verification'); // user must varified his/her email
                this.showAlert('Verification', 'We have sent you an email verification');
            }

        } catch (error) {
            console.dir(error);
            this.showAlert('Error', error.message);
            this.router.navigate(['/register']);
        }
    }


// pop up alert message
    async showAlert(header: string, message: string) {
        const alert = this.alert.create({
            header,
            message,
            buttons: ['OK']
        });
        await (await alert).present();
    }

}
