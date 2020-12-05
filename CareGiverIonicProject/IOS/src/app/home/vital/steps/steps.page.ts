import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../user.service';
import {GarminService} from 'src/app/garmin.service';
import {Chart} from 'chart.js';
import {AngularFireAuth} from '@angular/fire/auth';

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

  private garminId: string;

  constructor(
    private user: UserService,
    private garmin: GarminService,
    public afAuth: AngularFireAuth) {
    this.firebaseAuth = afAuth;
    this.garminId = this.user.garminId;
    console.log('garminId', this.garminId);
  }

  ngOnInit() {
    this.showData();
  }

  async showData() {
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

          console.log('sort 2', sortedDataSet);
          this.totalSteps = sortedDataSet[0].steps;
          this.activityType = sortedDataSet[0].activityType;
          this.calendarDate = sortedDataSet[0].calendarDate;
          this.distanceInMeters = sortedDataSet[0].distanceInMeters;
          this.stepsGoal = sortedDataSet[0].stepsGoal;
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
  }
}