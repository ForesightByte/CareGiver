import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
    private auth: AuthService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private alert: AlertController) {
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