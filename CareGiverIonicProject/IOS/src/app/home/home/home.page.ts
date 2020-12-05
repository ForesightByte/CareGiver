import {Component, OnInit, ViewChild} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {UserService} from '../../user.service';
import {AuthService} from '../../auth.service';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {Userelement} from 'src/app/users';
import {map, take} from 'rxjs/operators';

const qualitativeScale = ['Distressing', 'Substandard', 'Ordinary', 'Adequate', 'Impressive'];

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('lineCanvas', {static: false}) lineCanvas;

  displayName: Observable<any>;
  scoreColor = 'red';
  defaultColor = 'rgba(0, 0, 0, 0.200)';

  todayScore: number;
  colorZone;
  coloredDial;
  wellbeingQual;
  wellbeingTextColor;
  dialRotation;

  ystScore: number;
  yesterdayZone;
  yesterdayClass;
  yesterdayTextColor;

  avgScore: number;
  averageZone;
  averageClass;
  averageTextColor;

  assetPath = '../../../assets/chart/';
  wheel: any = '../../../assets/chart/numberedwheel.svg';

  constructor(
    private router: Router,
    private afStore: AngularFirestore,
    public afAuth: AngularFireAuth,
    public auth: AuthService,
    public user: UserService,
    public actionSheetController: ActionSheetController) {
    const uid = this.auth.cUid;
    console.log(uid);
    const date = new Date();
    const td = String(date.getDate()).padStart(2, '0');
    const yd = String(date.getDate() - 1).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = date.getFullYear();
    const today = yyyy + '-' + mm + '-' + td;
    const yesterday = yyyy + '-' + mm + '-' + yd;

    this.displayName = this.user.getDisplayname(uid);
    this.getTodayScore(uid, today);
    this.getYstScore(uid, yesterday);
    this.getAvgScore(uid);
  }

  ngOnInit() {
  }

  getTodayScore(uid, date) {
    this.user.getWellScore(uid, date).subscribe(user => {
      let tempScore;
      if (user) {
        if (user.wellbeingScore) {
          tempScore = user.wellbeingScore;
        } else { tempScore = 0; }
      } else { tempScore = 0; }
      this.todayScore = tempScore;
      this.colorZone = this.todayScore >= 100 ? 4 :
          Math.floor(this.todayScore / 20);
      this.coloredDial = this.assetPath + 'dial' + this.colorZone + '.svg';
      this.wellbeingQual = qualitativeScale[this.colorZone];
      this.wellbeingTextColor = this.colorZone === 4 ? 'white' : 'black';

      this.dialRotation = {
          transform: `
            rotate(${(this.todayScore / 100.00) * 300 - 150}deg)
          `
        };
      this.formatSubtitle(this.todayScore);
    });
  }

  getYstScore(uid, date) {
    this.user.getWellScore(uid, date).subscribe(user => {
      let tempScore;
      if (user.wellbeingScore) {
        tempScore = user.wellbeingScore;
      } else { tempScore = 0; }
      this.ystScore = tempScore;
      this.yesterdayZone = this.ystScore >= 100 ? 4 :
          Math.floor((this.ystScore) / 20);
      this.yesterdayClass = 'GuageColor' + this.yesterdayZone;
      this.yesterdayTextColor = this.yesterdayZone === 4 ? 'white' : 'white';
    });
  }

  getAvgScore(uid) {
    const avgSc = this.user.getEma(uid);
    const score = [];
    const avg = [];
    let sc;
    avgSc.subscribe(user => {
      if (user) {
        for (const item of user) {
          avg.push(item);
          if (item.wellbeingScore) {
            sc = item.wellbeingScore;
          } else { sc = 0; }
          score.push(sc);
          this.avgScore = Number(this.getAverage(score).toFixed(0));
          this.averageZone = this.avgScore >= 100 ? 4 :
            Math.floor((this.avgScore) / 20);
          this.averageClass = 'GuageColor' + this.averageZone;
          this.averageTextColor = this.averageZone === 4 ? 'white' : 'white';
        }
      } else {console.log('data not found'); }
    });
  }

  public getAverage(score: any[]): number {
    let sum = 0, counter = 0;
    // tslint:disable-next-line: forin
    for (const key in score) {
        sum += Number(score[key]);
        counter++;
    }
    return sum / counter;
  }

  formatSubtitle = (score: number): string => {
    if (score < 20) {
      this.scoreColor = 'red';
      return 'Distressing';
    } else if (score < 40) {
      this.scoreColor = 'orange';
      return 'Substandard';
    } else if (score < 60) {
      this.scoreColor = 'gold';
      return 'Ordinary';
    } else if (score < 80) {
      this.scoreColor = 'lightgreen';
      return 'Adequate';
    } else {
      this.scoreColor = 'green';
      return 'Impressive';
    }
  }

  async overlap() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Tools',
      cssClass: 'EditIcon',
      buttons: [{
        text: 'Profile',
        role: 'information',
        icon: 'contact',
        handler: () => {
          return this.router.navigate(['./profile']);
        }
      }, {
        text: 'Settings',
        role: 'settings',
        icon: 'settings',
        handler: () => {
          return this.router.navigate(['./settings']);
        }
      }, {
        text: 'Sign Out',
        icon: 'power',
        handler: () => {
          this.afAuth.auth.signOut();
          return this.router.navigate(['/tabs']);
        }
      }]
    });
    await actionSheet.present();
  }
}
