import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {AlertController} from '@ionic/angular';
import {UserService} from '../user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    private afStore: AngularFirestore,
    private auth: AuthService,
    private router: Router,
    public afAuth: AngularFireAuth,
    private alert: AlertController,
    public user: UserService
  ) {}

   deleteId() {
    const uid = this.auth.cUid;
    this.afStore.collection('users').doc(uid).delete();
    console.log('Account successfully deleted!');
    this.showAlert('Account', 'Account successfully deleted!');
    return this.router.navigate(['/tabs']);
   }

   profileEdit() {
     this.router.navigate(['/profile-edit']);
   }

  ngOnInit() {
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
