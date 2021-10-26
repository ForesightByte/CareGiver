import {Component, OnInit, ViewChild} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {UserService} from '../../user.service';
import {AuthService} from '../../auth.service';
import {Observable, Subscription, interval} from 'rxjs';

const qualitativeScale = ['Distressing', 'Substandard', 'Ordinary', 'Adequate', 'Impressive'];

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('lineCanvas', {static: false}) lineCanvas;
  private updateSubscription: Subscription;

  displayName: Observable<any>;
  scoreColor = 'red';
  defaultColor = 'rgba(0, 0, 0, 0.200)';

  todayScore;
  colorZone;
  coloredDial;
  wellbeingQual;
  wellbeingTextColor;
  dialRotation;

  assetPath = '../../../assets/chart/';
  wheel: any = '../../../assets/chart/numberedwheel.svg';

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth,
    public auth: AuthService,
    public user: UserService,
    public actionSheetController: ActionSheetController) {
    this.doStart();
  }

  doStart(){
    const uid = this.auth.cUid;
    console.log(uid);
    var count = 0;

    this.updateSubscription = interval(1000).subscribe(
      (val) => { 
        count++;
        if (count <2){
          this.displayName = this.user.getDisplayname(uid);
          this.getTodayScore(uid);
        }
      });
  }

  public getAveragePulseox(pulseoxValues: any[]): number {
    let sum = 0, counter = 0;
    // tslint:disable-next-line: forin;
    for (const key in pulseoxValues) {
        sum += Number(pulseoxValues[key]);
        counter++;
    }
    return sum / counter;
  }

  ngOnInit() {
  }

  getTodayScore(uid) {
    this.user.getUser(uid).subscribe(user => {
      let tempScore: any;
      let step = 0;
      let sleep = 0;
      let stress = 0;
      let pulseOX = 0;
      if (user) {
        if (user.wellbeingScore) {
          const wellbeing = user.wellbeingScore;
          if (user.steps){
            step = user.steps;
          }
          if (user.sleep){
            sleep = user.sleep;
          }
          if (user.stress){
            stress = user.stress;
          }
          if (user.pulseOX){
            pulseOX = user.pulseOX;
          }
          tempScore = Number((0.75 * wellbeing) + (0.25 * ((step+sleep+stress+pulseOX)/4))).toFixed(0);
        } else { tempScore = 'Null'; }
      } else { tempScore = 'Null'; }

    // Donut chart
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
      }, /* {
        text: 'Settings',
        role: 'settings',
        icon: 'settings',
        handler: () => {
          return this.router.navigate(['./settings']);
        }
      },*/ {
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

  doRefresh(event) {
    console.log('Begin async operation');

    this.doStart();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }
}
