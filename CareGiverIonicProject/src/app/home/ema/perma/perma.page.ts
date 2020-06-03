import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from 'src/app/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

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
        private alert: AlertController) {
        const date = new Date();
        const dd = String(date.getUTCDate()).padStart(2, '0');
        const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
        const yyyy = date.getUTCFullYear();

        this.today = yyyy + '-' + mm + '-' + dd;
        this.uid = auth.cUid;

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
      return this.helped = event;
    }

    lovedChange(event: number) {
      return this.loved = event;
    }

    satisfiedChange(event: number) {
      return this.satisfied = event;
    }

    purposefulChange(event: number) {
      return this.purposeful = event;
    }

    valuableChange(event: number) {
      return this.valuable = event;
    }

    senseChange(event: number) {
      return this.sense = event;
    }

    prgressChange(event: number) {
      return this.progress = event;
    }

    achieveChange(event: number) {
      return this.achieve = event;
    }

    handleChange(event: number) {
      return this.handle = event;
    }

    submit() {
      const res = this.afStore.doc(`users/${this.uid}/EMA/${this.today}`);
      const helped = this.helped;
      const loved = this.loved;
      const satisfied = this.satisfied;
      const purposeful = this.purposeful;
      const valuable = this.valuable;
      const sense = this.sense;
      const progress = this.progress;
      const achieve = this.achieve;
      const handle = this.handle;
      const data = {helped, loved, satisfied, purposeful, valuable, sense,
        progress, achieve, handle};
      const score = helped + loved + satisfied + purposeful + valuable
      + sense + progress + achieve + handle;

      const welbeingscore = this.wellbeingScore + score;

      res.set({data, welbeingScore: welbeingscore}, {merge: true});

      this.router.navigate(['/extra']);
    }
}
