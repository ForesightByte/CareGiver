import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { EmaPage } from '../ema.page';

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

  uid;
  today;

  constructor(
    private afStore: AngularFirestore,
    auth: AuthService,
    private router: Router,
    public ema: EmaPage) {
      const date = new Date();
      const dd = String(date.getUTCDate()).padStart(2, '0');
      const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
      const yyyy = date.getUTCFullYear();

      this.today = yyyy + '-' + mm + '-' + dd;
      this.uid = auth.cUid;
     }

     wellSleepChange(event) {
      return this.wellSleep = event;
  }
  ngOnInit() {
  }

  submit() {
    this.sleep = this.hours + ' hr ' + this.minutes + ' mn';
    this.afStore.doc(`users/${this.uid}/EMA/${this.today}`)
        .set({
            wellSleep: this.wellSleep,
            sleep: this.sleep
        }, {merge: true});
    this.router.navigate(['/tabs']);
  }

}
