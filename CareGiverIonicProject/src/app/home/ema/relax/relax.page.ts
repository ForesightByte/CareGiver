import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/auth.service';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { EmaPage } from '../ema.page';

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
      const dd = String(date.getUTCDate()).padStart(2, '0');
      const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
      const yyyy = date.getUTCFullYear();

      this.today = yyyy + '-' + mm + '-' + dd;
      this.uid = auth.cUid;
    }

  relaxChange(event: number) {
      console.log(event);
      return this.relax = event;
  }

  joyfulChange(event: number) {
    console.log(event);
    return this.joyful = event;
  }

  positiveChange(event: number) {
    console.log(event);
    return this.positive = event;
  }

  contentedChange(event: number) {
    console.log(event);
    return this.contented = event;
  }

  absorbedChange(event: number) {
    console.log(event);
    return this.absorbed = event;
  }

  excitedChange(event: number) {
    console.log(event);
    return this.excited = event;
  }

  lostTrackChange(event: number) {
    console.log(event);
    return this.lostTrack = event;
  }

  ngOnInit() {
  }

  submit() {
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
      try {
      res.set(data, {merge: true});
      console.log(data);

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
