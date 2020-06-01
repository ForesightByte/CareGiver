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
    relax = 0;
    joyful = 0;
    positive = 0;
    contented = 0;
    absorbed = 0;
    excited = 0;
    lostTrack = 0;
    helped = 0;
    loved = 0;
    satisfied = 0;
    purposeful = 0;
    valuable = 0;
    sense = 0;
    prgress = 0;
    achieve = 0;
    handle = 0;

    sleep: any = '';
    hours = 0;
    minutes = 0;
    wellSleep = 0;

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
        this.uid = auth.cUid;
        this.wellbeingScore = 0;
    }

    ngOnInit() {
    }

    relaxChange(event: number) {
        this.relax = event;
        console.log(event);
        return this.afStore
            .doc(`users/${this.uid}/EMA/${this.today}`)
            .set(
                {relax: this.relax}, {merge: true});
    }

    joyfulChange(event: number) {
        this.joyful = event;
        console.log('event:', event);
        return this.afStore
            .doc(`users/${this.uid}/EMA/${this.today}`)
            .set({joyful: this.joyful}, {merge: true});
    }

    positiveChange(event: number) {
        this.positive = event;
        console.log('event:', event);
        return this.afStore
            .doc(`users/${this.uid}/EMA/${this.today}`)
            .set({positive: this.positive}, {merge: true});
    }

    contentedChange(event: number) {
        this.contented = event;
        console.log('event:' + event);
        return this.afStore
            .doc(`users/${this.uid}/EMA/${this.today}`)
            .set({contented: this.contented}, {merge: true});
    }

    absorbedChange(event: number) {
        this.absorbed = event;
        console.log('event:' + event);
        return this.afStore
            .doc(`users/${this.uid}/EMA/${this.today}`)
            .set({absorbed: this.absorbed}, {merge: true});
    }

    excitedChange(event: number) {
        this.excited = event;
        console.log('event:' + event);
        return this.afStore
            .doc(`users/${this.uid}/EMA/${this.today}`)
            .set({excited: this.excited}, {merge: true});
    }

    lostTrackChange(event: number) {
        this.lostTrack = event;
        console.log('event:' + event);
        return this.afStore
            .doc(`users/${this.uid}/EMA/${this.today}`)
            .set({lostTrack: this.lostTrack}, {merge: true});
    }

    helpedChange(event: number) {
        this.helped = event;
        console.log('event:' + event);
        return this.afStore
            .doc(`users/${this.uid}/EMA/${this.today}`)
            .set({helped: this.helped}, {merge: true});
    }

    lovedChange(event: number) {
        this.loved = event;
        console.log('event:' + event);
        return this.afStore
            .doc(`users/${this.uid}/EMA/${this.today}`)
            .set({loved: this.loved}, {merge: true});
    }

    satisfiedChange(event: number) {
        this.satisfied = event;
        console.log('event:' + event);
        return this.afStore
            .doc(`users/${this.uid}/EMA/${this.today}`)
            .set({satisfied: this.satisfied}, {merge: true});
    }

    purposefulChange(event: number) {
        this.purposeful = event;
        console.log('event:' + event);
        return this.afStore
            .doc(`users/${this.uid}/EMA/${this.today}`)
            .set({purposeful: this.purposeful}, {merge: true});
    }

    valuableChange(event: number) {
        this.valuable = event;
        console.log('event:' + event);
        return this.afStore
            .doc(`users/${this.uid}/EMA/${this.today}`)
            .set({valuable: this.valuable}, {merge: true});
    }

    senseChange(event: number) {
        this.sense = event;
        console.log('event:' + event);
        return this.afStore
            .doc(`users/${this.uid}/EMA/${this.today}`)
            .set({sense: this.sense}, {merge: true});
    }

    prgressChange(event: number) {
        this.prgress = event;
        console.log('event:' + event);
        return this.afStore
            .doc(`users/${this.uid}/EMA/${this.today}`)
            .set({prgress: this.prgress}, {merge: true});
    }

    achieveChange(event: number) {
        this.achieve = event;
        console.log('event:' + event);
        return this.afStore
            .doc(`users/${this.uid}/EMA/${this.today}`)
            .set({achieve: this.achieve}, {merge: true});
    }

    handleChange(event: number) {
        this.handle = event;
        console.log('event:' + event);

        this.afStore
            .doc(`users/${this.uid}/EMA/${this.today}`)
            .set({handle: this.handle},
                {merge: true});

    }

    wellSleepChange(event) {
        this.wellSleep = event;
        this.wellbeingScore =
            (Number(this.joyful) + Number(this.positive) +
                Number(this.contented) + Number(this.absorbed) +
                Number(this.excited) + Number(this.lostTrack) +
                Number(this.helped) + Number(this.loved) +
                Number(this.satisfied) + Number(this.purposeful) +
                Number(this.valuable) + Number(this.sense) +
                Number(this.prgress) + Number(this.achieve) + Number(this.handle)) / 15;

        this.sleep = this.hours + ' hr ' + this.minutes + ' mn';
        this.afStore
            .doc(`users/${this.uid}/EMA/${this.today}`)
            .set({
                wellSleep: this.wellSleep,
                sleep: this.sleep,
                wellbeingScore: this.wellbeingScore.toFixed(0)
            }, {merge: true});

        this.afStore
            .doc(`users/${this.uid}`)
            .set({wellbeingScore: Number(this.wellbeingScore).toFixed(0)},
                {merge: true});
        return this.router.navigate(['/tabs']);
    }
}
