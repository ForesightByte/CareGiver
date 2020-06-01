import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AlertController} from '@ionic/angular';
import {UserService} from '../user.service';
import * as firebase from 'firebase';
import {Userelement} from '../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: any = '';
  password: string = null;

  constructor(
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
    private alert: AlertController,
    public userS: UserService
  ) { }

  ngOnInit() {}

  // this is function for login with email and password
  async login() {
    const{email, password } = this;
    try {
        const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password );
        if (res.user) {
          this.userS.setUser({
            email,
            uid: res.user.uid
          });
        }
    } catch (error) {
        console.dir(error);
        this.showAlert('Error', error.message);
        if (error.code === 'auth/user-not-found') {
        console.log(error);
        this.showAlert('Error', error.message);
      }
    }
  }

  // This google() function is for sign in with google
  async google() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const credential = await this.afAuth.auth.signInWithPopup(provider);
    if (credential.user) {
      this.updateUserData(credential.user);
    }
  }

  // store data in firestore
  private updateUserData({uid, email, displayName, photoURL }: Userelement) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${uid}`);

    const data = {
        uid,
        email,
        displayName,
        photoURL
      };
    return userRef.set(data, {merge: true });
  }

  // send link to reset password
  resetPassword(email: string) {
    firebase.auth().sendPasswordResetEmail(email);
    console.log('Reset Password link has been sent');
    this.showAlert('Link', 'Reset Password link has been sent');
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

