import {Component, OnInit, ViewChild} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {UserService} from '../../user.service';
import {AuthService} from '../../auth.service';
import {Observable, Subscription, interval} from 'rxjs';
import { IonloaderService } from 'src/app/ionloader.service';

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

  today;
  todayScore;
  colorZone;
  coloredDial;
  wellbeingQual;
  wellbeingTextColor;
  dialRotation;

  assetPath = '../../../assets/chart/';
  wheel: any = '../../../assets/chart/numberedwheel.svg';

  constructor(
    public ionLoaderService: IonloaderService,
    private router: Router,
    public afAuth: AngularFireAuth,
    public auth: AuthService,
    public user: UserService,
    public actionSheetController: ActionSheetController) {
      const date = new Date();
      const dd = String(date.getDate()).padStart(2, '0');
      const mm = String(date.getMonth() + 1).padStart(2, '0');
      const yyyy = date.getFullYear();  
      this.today = yyyy + '-' + mm + '-' + dd;
 
    this.ionLoaderService.simpleLoader();
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
    //********Vital Score*********
    let vitalScore;
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
          vitalScore = step+sleep+stress+pulseOX;
        } else { vitalScore = 0; }
      } else { vitalScore = 0; }

    //********survey score**********
    let surveyScore;
    this.user.getWellScore(uid, this.today).subscribe(user => {
      if(user) {
        surveyScore = user.wellbeingScore;
      }
      else {
        surveyScore = 'Null';
      }
      if(surveyScore == 'Null'){
        this.todayScore = 'Null';
        console.log('Nullscore', this.todayScore);
        this.ionLoaderService.dismissLoader();
      }
      else {
        this.todayScore = Number((0.75 * surveyScore) + (0.25 * ((vitalScore)/4))).toFixed(0);
        console.log('todayScore', this.todayScore);
        this.ionLoaderService.dismissLoader();
      }

      //***********Donut chart***********
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
    })
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
