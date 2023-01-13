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
  indeterminateState: boolean;
  whereParent: boolean;
  whoParent: boolean;
  whatParent: boolean;
  whereParent2: boolean;
  whoParent2: boolean;
  whatParent2: boolean;
  whereBoxes: any;
  whoBoxes: any;
  whatBoxes: any;
  whereBoxes2: any;
  whoBoxes2: any;
  whatBoxes2: any;

  sleep: any = '';
  hours: number;
  minutes: number;
  wellSleep: number;
  isSleep: string;

  where: string;
  who: string;
  what: string;
  where2: string;
  who2: string;
  what2: string;

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
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    const time = date.getHours();

    this.today = yyyy + '-' + mm + '-' + dd + '_'  + time;
    this.uid = this.auth.cUid;
    console.log('today', this.today);
    this.sleepData(this.uid, this.today);

    this.whereBoxes = [
      {
        value: "At home",
        isItemChecked: false
      }, {
        value: "At work",
        isItemChecked: false
      }, {
        value: "At the hospital",
        isItemChecked: false
      }, {
        value: "At an appointment for patient",
        isItemChecked: false
      }, {
        value: "Other",
        isItemChecked: false
      }
    ];

    this.whereBoxes2 = [
      {
        value: "At_home",
        isItemChecked: false
      }, {
        value: "At_work",
        isItemChecked: false
      }, {
        value: "Running errands",
        isItemChecked: false
      }, {
        value: "At the gym",
        isItemChecked: false
      }, {
        value: "Outdoors in nature",
        isItemChecked: false
      }, {
        value: "At the hospital/doctor’s office for the patient’s appointment",
        isItemChecked: false
      }, {
        value: "At the hospital/doctor’s office for my own appointment",
        isItemChecked: false
      }, {
        value: "Out to eat",
        isItemChecked: false
      }, {
        value: "At school",
        isItemChecked: false
      }, {
        value: "Other",
        isItemChecked: false
      }
    ];

    this.whoBoxes = [
      {
        value: "Alone",
        isItemChecked: false
      }, {
        value: "With the patient",
        isItemChecked: false
      }, {
        value: "With friends",
        isItemChecked: false
      }, {
        value: "With family",
        isItemChecked: false
      }, {
        value: "With colleagues",
        isItemChecked: false
      }, {
        value: "Other",
        isItemChecked: false
      }
    ];

    this.whoBoxes2 = [
      {
        value: "With_the_patient",
        isItemChecked: false
      }, {
        value: "With a romantic partner",
        isItemChecked: false
      }, {
        value: "With_friends",
        isItemChecked: false
      }, {
        value: "On my own",
        isItemChecked: false
      }, {
        value: "Around people I do not know",
        isItemChecked: false
      }, {
        value: "With work colleagues",
        isItemChecked: false
      }, {
        value: "Other",
        isItemChecked: false
      }
    ];

    this.whatBoxes = [
      {
        value: "Sleeping",
        isItemChecked: false
      }, {
        value: "Eating",
        isItemChecked: false
      }, {
        value: "Tending to the patient",
        isItemChecked: false
      }, {
        value: "Working",
        isItemChecked: false
      }, {
        value: "Reading",
        isItemChecked: false
      }, {
        value: "Engaging in physical activity",
        isItemChecked: false
      },  {
        value: "In nature",
        isItemChecked: false
      },  {
        value: "Cooking",
        isItemChecked: false
      }, {
        value: "Relaxing",
        isItemChecked: false
      }, {
        value: "Other",
        isItemChecked: false
      }
    ];

    this.whatBoxes2 = [
      {
        value: "Exercising",
        isItemChecked: false
      }, {
        value: "Eating",
        isItemChecked: false
      }, {
        value: "Caring for the patient",
        isItemChecked: false
      }, {
        value: "Working (job)",
        isItemChecked: false
      }, {
        value: "Doing work around the house (e.g., cleaning)",
        isItemChecked: false
      }, {
        value: "Quality time with family",
        isItemChecked: false
      },  {
        value: "Watching TV",
        isItemChecked: false
      },  {
        value: "On my phone (e.g., social media, text, call)",
        isItemChecked: false
      }, {
        value: "Quality time with friends",
        isItemChecked: false
      }, {
        value: "Other",
        isItemChecked: false
      }
    ];
  }

  wellSleepChange(event) {
    this.sleep = this.hours + ' hr ' + this.minutes + ' mn';
    this.afStore.doc(`users/${this.uid}/EMA/${this.today}`)
      .set({
        wellSleep: event.detail.value,
        sleep: this.sleep
      }, {merge: true});
    this.wellSleep = event.detail.value;
  }

  ngOnInit() {
  }

  sleepData(uid: string, date: string) {
    this.user.getSleepEMA(uid, date).subscribe(user => {
      if (user) {
        if (user.wellSleep) {
        this.isSleep = user.wellSleep;
        console.log('isSleep', this.isSleep);
      } else { this.isSleep = null; }
    } else { this.isSleep = null; }
    });
  }

  //*************Where Question**********
  whereCheckbox() {
    setTimeout(() => {
      this.whereBoxes.forEach(item => {
        item.isItemChecked = this.whereParent;
      });
    });
  }

  verifyWhereEvent() {
    const allItems = this.whereBoxes.length;
    let selected = 0;

    this.whereBoxes.map(item => {
      if (item.isItemChecked) selected++;
    });

    if (selected > 0 && selected < allItems) {
      // One item is selected among all checkbox elements
      this.indeterminateState = true;
      this.whereParent = false;
    } else if (selected == allItems) {
      // All item selected
      this.whereParent = true;
      this.indeterminateState = false;
    } else {
      // No item is selected
      this.indeterminateState = false;
      this.whereParent = false;
    }
  }

  //*************Where Question**********
  whereCheckbox2() {
    setTimeout(() => {
      this.whereBoxes2.forEach(item => {
        item.isItemChecked = this.whereParent2;
      });
    });
  }

  verifyWhereEvent2() {
    const allItems = this.whereBoxes2.length;
    let selected = 0;

    this.whereBoxes2.map(item => {
      if (item.isItemChecked) selected++;
    });

    if (selected > 0 && selected < allItems) {
      // One item is selected among all checkbox elements
      this.indeterminateState = true;
      this.whereParent2 = false;
    } else if (selected == allItems) {
      // All item selected
      this.whereParent2 = true;
      this.indeterminateState = false;
    } else {
      // No item is selected
      this.indeterminateState = false;
      this.whereParent2 = false;
    }
  }

  //*************Who Question**********
  whoCheckbox() {
    setTimeout(() => {
      this.whoBoxes.forEach(item => {
        item.isItemChecked = this.whoParent;
      });
    });
  }

  verifyWhoEvent() {
    const allItems = this.whoBoxes.length;
    let selected = 0;

    this.whoBoxes.map(item => {
      if (item.isItemChecked) selected++;
    });

    if (selected > 0 && selected < allItems) {
      // One item is selected among all checkbox elements
      this.indeterminateState = true;
      this.whoParent = false;
    } else if (selected == allItems) {
      // All item selected
      this.whoParent = true;
      this.indeterminateState = false;
    } else {
      // No item is selected
      this.indeterminateState = false;
      this.whoParent = false;
    }
  }


  //*************Who Question**********
  whoCheckbox2() {
    setTimeout(() => {
      this.whoBoxes2.forEach(item => {
        item.isItemChecked = this.whoParent2;
      });
    });
  }

  verifyWhoEvent2() {
    const allItems = this.whoBoxes2.length;
    let selected = 0;

    this.whoBoxes2.map(item => {
      if (item.isItemChecked) selected++;
    });

    if (selected > 0 && selected < allItems) {
      // One item is selected among all checkbox elements
      this.indeterminateState = true;
      this.whoParent2 = false;
    } else if (selected == allItems) {
      // All item selected
      this.whoParent2 = true;
      this.indeterminateState = false;
    } else {
      // No item is selected
      this.indeterminateState = false;
      this.whoParent2 = false;
    }
  }

  //*************What Question**********
  whatCheckbox() {
    setTimeout(() => {
      this.whatBoxes.forEach(item => {
        item.isItemChecked = this.whatParent;
      });
    });
  }

  verifyWhatEvent() {
    const allItems = this.whatBoxes.length;
    let selected = 0;

    this.whatBoxes.map(item => {
      if (item.isItemChecked) selected++;
    });

    if (selected > 0 && selected < allItems) {
      // One item is selected among all checkbox elements
      this.indeterminateState = true;
      this.whatParent = false;
    } else if (selected == allItems) {
      // All item selected
      this.whatParent = true;
      this.indeterminateState = false;
    } else {
      // No item is selected
      this.indeterminateState = false;
      this.whatParent = false;
    }
  }

  //*************What Question**********
  whatCheckbox2() {
    setTimeout(() => {
      this.whatBoxes2.forEach(item => {
        item.isItemChecked = this.whatParent2;
      });
    });
  }

  verifyWhatEvent2() {
    const allItems = this.whatBoxes2.length;
    let selected = 0;

    this.whatBoxes2.map(item => {
      if (item.isItemChecked) selected++;
    });

    if (selected > 0 && selected < allItems) {
      // One item is selected among all checkbox elements
      this.indeterminateState = true;
      this.whatParent2 = false;
    } else if (selected == allItems) {
      // All item selected
      this.whatParent2 = true;
      this.indeterminateState = false;
    } else {
      // No item is selected
      this.indeterminateState = false;
      this.whatParent2 = false;
    }
  }

  submit() {
    try {
      let tempWhere = []; let tempWhat = []; let tempWho = [];
      let tempWhere2 = []; let tempWhat2 = []; let tempWho2 = [];
      for(let i =0; i < this.whereBoxes.length; i++) {
        if (this.whereBoxes[i].isItemChecked == true){
          tempWhere.push(this.whereBoxes[i].value);
          console.log('where', tempWhere);
        }
      }
      for(let i =0; i < this.whoBoxes.length; i++) {
        if (this.whoBoxes[i].isItemChecked == true){
          tempWho.push(this.whoBoxes[i].value);
          console.log('who', tempWho);
        }
      }
      for(let i =0; i < this.whatBoxes.length; i++) {
        if (this.whatBoxes[i].isItemChecked == true){
          tempWhat.push(this.whatBoxes[i].value);
          console.log('what', tempWhat);
        }
      }
      // for 2nd
      for(let i =0; i < this.whereBoxes2.length; i++) {
        if (this.whereBoxes2[i].isItemChecked == true){
          tempWhere2.push(this.whereBoxes2[i].value);
          console.log('where', tempWhere2);
        }
      }
      for(let i =0; i < this.whoBoxes2.length; i++) {
        if (this.whoBoxes2[i].isItemChecked == true){
          tempWho2.push(this.whoBoxes2[i].value);
          console.log('who', tempWho2);
        }
      }
      for(let i =0; i < this.whatBoxes2.length; i++) {
        if (this.whatBoxes2[i].isItemChecked == true){
          tempWhat2.push(this.whatBoxes2[i].value);
          console.log('what', tempWhat2);
        }
      }
      this.afStore.doc(`users/${this.uid}/EMA/${this.today}`)
      .set({
        where: tempWhere,
        what: tempWhat,
        who: tempWho,
        where2: tempWhere2,
        what2: tempWhat2,
        who2: tempWho2
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
