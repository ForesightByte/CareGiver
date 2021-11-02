import {Component, OnInit, ViewChild} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {UserService} from '../../user.service';
import {AuthService} from '../../auth.service';
import {Observable, Subscription, interval} from 'rxjs';
import { IonloaderService } from 'src/app/ionloader.service';
import { AngularFirestore } from '@angular/fire/firestore';

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
    private afStore: AngularFirestore,
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
    
      
    this.user.getUser(uid).subscribe(user =>{
      let step = 0;
      let sleep = 0;
      let stress = 0;
      let pulseOX = 0;
    })
  }


  ngOnInit() {
  }

  getTodayScore(uid) {
    //********Vital Score*********
    let vitalScore=0;
    this.user.getUser(uid).subscribe(user => {
      let gid;
      let step = 0;
      let sleep = 0;
      let stress = 0;
      let pulseOX = 0;
      if (user) {
        
      gid = user.garminUserId;
      console.log('gid',gid);
      this.user.getVitalScore(gid, this.today).subscribe(vital =>{
        if(vital){
          if(vital.dailies){
            step = this.stepScore(vital.dailies.steps);
            console.log('steps', step);
            if(vital.dailies.averageStressLevel == -1){
              stress = 0;
            }else{
              stress = 100 - (vital.dailies.averageStressLevel);
            }
            console.log('stress', stress);
          }
          if(vital.sleeps){
            sleep = this.sleepScore(vital.sleeps.durationInSeconds);
            console.log('Sleep', sleep);
            pulseOX = Number(this.getAveragePulseox(vital.sleeps.timeOffsetSleepSpo2).toFixed(0));
            console.log('pulse', pulseOX);
          }
        }else{
          vitalScore = 0; 
        }

        vitalScore = step+sleep+stress+pulseOX;
      })
      } else { vitalScore = 0; }


    //********survey score**********
    let surveyScore;
    this.user.getSurveyScore(uid, this.today).subscribe(user => {
      if(user) {
        surveyScore = user.wellbeingScore;
      }
      else {
        surveyScore = 'Null';
      }
      if(surveyScore == 'Null'){
        this.todayScore = 'Null';
        this.ionLoaderService.dismissLoader();
      }
      else {
        this.todayScore = Number((0.75 * surveyScore) + (0.25 * ((vitalScore)/4))).toFixed(0);
        console.log('todayScore', this.todayScore);
        this.ionLoaderService.dismissLoader();
        this.storeWellbeing(uid, this.todayScore)
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

  public stepScore(totalSteps){
    let steps = 0;
          if(totalSteps > 12500){
            return steps = 100;
          } else {
            return steps = Number(((totalSteps/12500)*100).toFixed(0));
          }
  }

  public sleepScore(duration){
    let sleep = 0;
    if (duration >= 27000 && duration <= 30600){
      return sleep = 100;
    } else if (duration < 27000 || duration > 30600) {
      return sleep = 90;
    } else if (duration < 23400 || duration > 34200) {
      return sleep = 80;
    } else if (duration < 19800 || duration > 37800) {
      return sleep = 70;
    } else if (duration < 16200 || duration > 41400) {
      return sleep = 60;
    } else if (duration < 12600 || duration > 45000) {
      return sleep = 50;
    } else if (duration < 9000 || duration > 48600) {
      return sleep = 40;
    } else if (duration < 7200 || duration > 50400) {
      return sleep = 30;
    } else if (duration < 5400 || duration > 52200) {
      return sleep = 20;
    } else if (duration < 3600 || duration > 54000) {
      return sleep = 10;
    } else {
      return sleep = 0;
    }
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

  storeWellbeing(uid, wellbeingScore){
    const date = this.today;
    this.afStore.doc(`users/${uid}/Wellbeing/${date}`).
    set({wellbeingScore,date}, {merge: true});
  }
}
