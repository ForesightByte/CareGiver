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

  uid;
  today;

  constructor(
    private afStore: AngularFirestore,
    private auth: AuthService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private alert: AlertController,
    public ema: EmaPage) {
    const date = new Date();
    const dd = String(date.getUTCDate()).padStart(2, '0');
    const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
    const yyyy = date.getUTCFullYear();

    this.today = yyyy + '-' + mm + '-' + dd;
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

  helpedChange(event: number) {
    console.log(event);
    return this.helped = event;
  }

  lovedChange(event: number) {
    console.log(event);
    return this.loved = event;
  }

  satisfiedChange(event: number) {
    console.log(event);
    return this.satisfied = event;
  }

  purposefulChange(event: number) {
    console.log(event);
    return this.purposeful = event;
  }

  valuableChange(event: number) {
    console.log(event);
    return this.valuable = event;
  }

  senseChange(event: number) {
    console.log(event);
    return this.sense = event;
  }

  prgressChange(event: number) {
    console.log(event);
    return this.progress = event;
  }

  achieveChange(event: number) {
    console.log(event);
    return this.achieve = event;
  }

  handleChange(event: number) {
    console.log(event);
    return this.handle = event;
  }

  submit() {
    const res = this.afStore.doc(`users/${this.uid}/EMA/${this.today}`);
    const res2 = this.afStore.doc(`users/${this.uid}`);
    const helped = this.helped;
    const loved = this.loved;
    const satisfied = this.satisfied;
    const purposeful = this.purposeful;
    const valuable = this.valuable;
    const sense = this.sense;
    const progress = this.progress;
    const achieve = this.achieve;
    const handle = this.handle;
    const score = helped + loved + satisfied + purposeful + valuable
      + sense + progress + achieve + handle;
    const wellbeingScore = Number(((Number(this.wellbeingScore) + Number(score)) / 17).toFixed(0));
    const data = {helped, loved, satisfied, purposeful, valuable, sense, progress, achieve, handle, wellbeingScore};

    try {
      this.router.navigate(['/extra']);
      res.set(data, {merge: true});
      // tslint:disable-next-line: object-literal-shorthand
      res2.set({wellbeingScore: wellbeingScore}, {merge: true});
      this.router.navigate(['/ema/extra']);
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
