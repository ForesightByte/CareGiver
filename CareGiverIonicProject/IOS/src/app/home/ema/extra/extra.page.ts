import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from 'src/app/auth.service';
import {Router} from '@angular/router';
import {EmaPage} from '../ema.page';
import { AlertController } from '@ionic/angular';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.page.html',
  styleUrls: ['./extra.page.scss'],
})
export class ExtraPage implements OnInit {
  sleep: any = '';
  hours: number;
  minutes: number;
  wellSleep: number;
  isSleep: string;

  where: string;
  who: string;
  what: string;
  other1 = '';
  other2 = '';
  other3 = '';

  uid;
  today;

  constructor(
    private afStore: AngularFirestore,
    private auth: AuthService,
    private user: UserService,
    private router: Router,
    private alert: AlertController,
    public ema: EmaPage) {
    const date = new Date();
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
    const yyyy = date.getUTCFullYear();

    this.today = yyyy + '-' + mm + '-' + dd;
    this.uid = this.auth.cUid;
    console.log('today', this.today);
    this.sleepData(this.uid, this.today);
  }

  wellSleepChange(event) {
    this.sleep = this.hours + ' hr ' + this.minutes + ' mn';
    this.afStore.doc(`users/${this.uid}/EMA/${this.today}`)
      .set({
        wellSleep: event,
        sleep: this.sleep
      }, {merge: true});
    this.wellSleep = event;
  }

  ngOnInit() {
  }

  sleepData(uid: string, date: string) {
    this.user.getWellScore(uid, date).subscribe(user => {
      if (user) {
        if (user.wellSleep) {
        this.isSleep = user.wellSleep;
        console.log('isSleep', this.isSleep);
      } else { this.isSleep = null; }
    } else { this.isSleep = null; }
    });
  }

  submit() {
    try {
      let tempWhere; let tempWhat; let tempWho;
      if (this.where === 'other') {
      tempWhere = this.other1;
    } else { tempWhere = this.where; }
      if (this.who === 'other') {
      tempWho = this.other2;
    } else { tempWho = this.who; }
      if (this.what === 'other') {
      tempWhat = this.other3;
    } else { tempWhat = this.what; }
      this.afStore.doc(`users/${this.uid}/EMA/${this.today}`)
      .set({
        where: tempWhere,
        what: tempWhat,
        who: tempWho
      }, {merge: true});
      this.router.navigate(['/ema/relax']);
    } catch {
      this.showAlert('Please answer all the questions');
    }
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
