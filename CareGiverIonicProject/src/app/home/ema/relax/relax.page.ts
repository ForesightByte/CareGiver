import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/auth.service';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

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
    private alert: AlertController
    ) {
      const date = new Date();
      const dd = String(date.getUTCDate()).padStart(2, '0');
      const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
      const yyyy = date.getUTCFullYear();

      this.today = yyyy + '-' + mm + '-' + dd;
      this.uid = auth.cUid;
    }

  relaxChange(event: number) {
      return this.relax = event;
  }

  joyfulChange(event: number) {
    return this.joyful = event;
  }

  positiveChange(event: number) {
    return this.positive = event;
  }

  contentedChange(event: number) {
    return this.contented = event;
  }

  absorbedChange(event: number) {
    return this.absorbed = event;
  }

  excitedChange(event: number) {
    return this.excited = event;
  }

  lostTrackChange(event: number) {
    return this.lostTrack = event;
  }

  ngOnInit() {
  }

  submit() {
    try {
      const res = this.afStore.doc(`users/${this.uid}/EMA/${this.today}`);
      const relax = this.relax;
      const joyful = this.joyful;
      const positive = this.positive;
      const contented = this.contented;
      const absorbed = this.absorbed;
      const excited = this.excited;
      const lostTrack = this.lostTrack;
      const data = {relax, joyful, positive, contented, absorbed, excited, lostTrack};
      const score = relax + joyful + positive + contented + absorbed + excited + lostTrack;
      const navExtras: NavigationExtras = {
        queryParams: {score: JSON.stringify(score)}
      };

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
