import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from 'src/app/auth.service';
import {NavigationExtras, Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {EmaPage} from '../ema.page';

@Component({
  selector: 'app-relax',
  templateUrl: './relax.page.html',
  styleUrls: ['./relax.page.scss'],
})
export class RelaxPage implements OnInit {
  relax: number;
  joyful: number;
  positive: number;
  contented: number;
  absorbed: number;
  excited: number;
  lostTrack: number;

  uid;
  today;

  constructor(
    private afStore: AngularFirestore,
    private auth: AuthService,
    private router: Router,
    private alert: AlertController,
    public ema: EmaPage
  ) {
    const date = new Date();
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    const time = date.getHours();

    this.today = yyyy + '-' + mm + '-' + dd + '_'  + time;
    this.uid = auth.cUid;
  }

  relaxChange(event) {
    return this.relax = event.detail.value;
  }

  joyfulChange(event) {
    return this.joyful = event.detail.value;
  }

  positiveChange(event) {
    return this.positive = event.detail.value;
  }

  contentedChange(event) {
    return this.contented = event.detail.value;
  }

  absorbedChange(event) {
    return this.absorbed = event.detail.value;
  }

  excitedChange(event) {
    return this.excited = event.detail.value;
  }

  lostTrackChange(event) {
    return this.lostTrack = event.detail.value;
  }

  ngOnInit() {
  }

  submit() {
    const res = this.afStore.doc(`users/${this.uid}/EMA/${this.today}`);
    const date = this.today;
    const relax = this.relax;
    const joyful = this.joyful;
    const positive = this.positive;
    const contented = this.contented;
    const absorbed = this.absorbed;
    const excited = this.excited;
    const lostTrack = this.lostTrack;
    const data = {relax, joyful, positive, contented, absorbed, excited, lostTrack, date};
    const score = relax + joyful + positive + contented + absorbed + excited + lostTrack;
    const navExtras: NavigationExtras = {
      queryParams: {score: JSON.stringify(score)}
    };
    try {
      res.set(data, {merge: true});
      this.router.navigate(['/ema/perma'], navExtras);
    } catch (err) {
      console.log('Please answer all questions');
      this.showAlert('Please answer all questions');
    }
  }

  async showAlert(message: string) {
    const alert = this.alert.create({
      message,
      buttons: ['OK']
    });
    await (await alert).present();
  }
}
