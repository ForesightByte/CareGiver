import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../user.service';
import {GarminService} from 'src/app/garmin.service';
import {Chart} from 'chart.js';
import {AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/auth.service';
import { IonloaderService } from 'src/app/ionloader.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.page.html',
  styleUrls: ['./steps.page.scss'],
})
export class StepsPage implements OnInit {
  public firebaseAuth: AngularFireAuth;
  @ViewChild('barChart', {static: false}) barChart;
  bars: any;

  public activityType: string;
  public calendarDate: string;
  public totalSteps: number;
  public distanceInMeters: number;
  public stepsGoal: number;

  public uid: string;
  private garminId: string;

  constructor(
    public ionLoaderService: IonloaderService,
    private afStore: AngularFirestore,
    public auth: AuthService,
    private user: UserService,
    private garmin: GarminService,
    public afAuth: AngularFireAuth) {
    this.firebaseAuth = afAuth;
    this.uid = auth.cUid;
    console.log('uid', this.uid);
    this.garminId = this.user.garminId;
    console.log('garminId', this.garminId);
  }

  ngOnInit() {
    this.showData();
  }

  async showData() {
    this.ionLoaderService.simpleLoader();
    let garminData;
    if (this.garminId) {
      this.garmin.getGarminDataset(this.garminId).subscribe(data => {
        garminData = data;
        const dailiesDataset = [];
        if (garminData) {
          const stepsData = [];
          const dateData = [];
          for (const item of garminData) {
            if (item.dailies) {
              dailiesDataset.push(item.dailies);
              stepsData.push(item.dailies.steps);
              dateData.push(item.dailies.calendarDate);
            }
          }
          this.createLineChart(stepsData, dateData);
        }
        if (dailiesDataset.length > 0) {
          const sortedDataSet = dailiesDataset.sort((a, b) =>{
            if(a.calendarDate < b.calendarDate) {
              return 1
            } else if(a.calendarDate > b.calendarDate) {
              return -1
            } else {
              return 0
            }
          });

          this.totalSteps = sortedDataSet[0].steps;
          console.log('totalSteps', this.totalSteps);
          this.activityType = sortedDataSet[0].activityType;
          this.calendarDate = sortedDataSet[0].calendarDate;
          this.distanceInMeters = Number((sortedDataSet[0].distanceInMeters * 0.000621).toFixed(2));
          this.stepsGoal = sortedDataSet[0].stepsGoal;

          let steps = 0;
          if(this.totalSteps > 12500){
            steps = 100;
          } else {
            steps = Number(((this.totalSteps/12500)*100).toFixed(0));
          }
          this.afStore.doc(`users/${this.uid}`).set({steps: steps}, {merge: true});
        }
      });
      // tslint:disable-next-line: only-arrow-functions
      setTimeout(function () {
      }, 1000, []);
    }
  }


  createLineChart(dataset: number[], date: string[]) {
    const labelData = [];
    // tslint:disable-next-line: forin
    for (const item in dataset) {
      labelData.push('');
    }
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: date,
        datasets: [{
          label: 'Steps per day',
          data: dataset,
          backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'royalblue', // array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          filler: {
            propagate: true
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    this.ionLoaderService.dismissLoader();
  }
}
