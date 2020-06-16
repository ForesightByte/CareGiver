import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth.service';
import {LoginComponent} from '../../login/login.component';
import {ActionSheetController, AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth,
    public Uauth: AuthService,
    public log: LoginComponent,
    private alert: AlertController,
    public actionSheetController: ActionSheetController
  ) {
  }

  ngOnInit() {
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
          //  return this.router.navigate(['./profile']);
        }
      }, {
        text: 'Settings',
        role: 'settings',
        icon: 'settings',
        handler: () => {
          //  return this.router.navigate(['./settings']);
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

  popAlert() {
    this.showAlert('Talk about your challenges');
  }

  // pop up alert message
  async showAlert(message: string) {
    const alert = this.alert.create({
      message,
      buttons: ['OK']
    });
    await (await alert).present();
  }
}
