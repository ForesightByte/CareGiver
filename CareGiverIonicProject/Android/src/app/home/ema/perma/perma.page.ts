import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from 'src/app/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {EmaPage} from '../ema.page';

@Component({
  selector: 'app-perma',
  templateUrl: './perma.page.html',
  styleUrls: ['./perma.page.scss'],
})
export class PermaPage implements OnInit {
  wellbeingScore: number;
  helped: number;
  loved: number;
  satisfied: number;
  purposeful: number;
  valuable: number;
  sense: number;
  progress: number;
  achieve: number;
  handle: number;
  adls: number;
  careHours: number;
  financial: number;
  timeOff: number;
  confusion: number;
  help: number;

  uid;
  today;
  today4EMA;

  constructor(
    private afStore: AngularFirestore,
    private auth: AuthService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private alert: AlertController,
    public ema: EmaPage) {
    const date = new Date();
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    const time = date.getHours();

    this.today = yyyy + '-' + mm + '-' + dd;
    this.today4EMA = yyyy + '-' + mm + '-' + dd + '_'  + time;
    this.uid = this.auth.cUid;

    this.aRoute.queryParams.subscribe(params => {
      if (params.score) {
        this.wellbeingScore = params.score;
      } else {
        console.log('Parameter error');
      }
    });
  }

  ngOnInit() {
  }

  helpedChange(event) {
    return this.helped = event.detail.value;
  }

  lovedChange(event) {
    return this.loved = event.detail.value;
  }

  satisfiedChange(event) {
    return this.satisfied = event.detail.value;
  }

  purposefulChange(event) {
    return this.purposeful = event.detail.value;
  }

  valuableChange(event) {
    return this.valuable = event.detail.value;
  }

  senseChange(event) {
    return this.sense = event.detail.value;
  }

  prgressChange(event) {
    return this.progress = event.detail.value;
  }

  achieveChange(event) {
    return this.achieve = event.detail.value;
  }

  handleChange(event) {
    return this.handle = event.detail.value;
  }

  adlsChange(event) {
    return this.adls = event.detail.value;
  }

  careHoursChange(event) {
    return this.careHours = event.detail.value;
  }

  financialChange(event) {
    return this.financial = event.detail.value;
  }

  timeOffChange(event) {
    return this.timeOff = event.detail.value;
  }

  mentalConfusionChange(event) {
    return this.confusion = event.detail.value;
  }

  helpChange(event) {
    return this.help = event.detail.value;
  }

  submit() {
    const res = this.afStore.doc(`users/${this.uid}`);
    const res2 = this.afStore.doc(`users/${this.uid}/EMA/${this.today}`);
    const res3 = this.afStore.doc(`users/${this.uid}/EMA/${this.today4EMA}`);
    const helped = this.helped;
    const loved = this.loved;
    const satisfied = this.satisfied;
    const purposeful = this.purposeful;
    const valuable = this.valuable;
    const sense = this.sense;
    const progress = this.progress;
    const achieve = this.achieve;
    const handle = this.handle;
    const adls = this.adls;
    const careHours = this.careHours;
    const financial = this.financial;
    const timeOff = this.timeOff;
    const confusion = this.confusion;
    const help = this.help;
    const score = helped + loved + satisfied + purposeful + valuable 
      + sense + progress + achieve + handle + adls + careHours + financial + timeOff + confusion + help;
    const wellbeingScore = Number(((Number(this.wellbeingScore) + Number(score)) / 23).toFixed(0));
    const data = {helped, loved, satisfied, purposeful, valuable, sense, progress, achieve, handle,
      adls, careHours, financial, timeOff, confusion, help, wellbeingScore};

    try {
      res3.set(data, {merge: true});
      // tslint:disable-next-line: object-literal-shorthand
      res2.set(data, {merge: true});
      res.set({wellbeingScore: wellbeingScore}, {merge: true});
      this.showAlert('Thank you for your participation! Your contribution matters');
      this.router.navigate(['/tabs']);
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
