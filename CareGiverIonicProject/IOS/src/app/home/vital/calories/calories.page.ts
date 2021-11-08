import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../user.service';
import {GarminService} from '../../../garmin.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {Chart} from 'chart.js';
import { AuthService } from 'src/app/auth.service';
import { IonloaderService } from 'src/app/ionloader.service';


@Component({
  selector: 'app-calories',
  templateUrl: './calories.page.html',
  styleUrls: ['./calories.page.scss'],
})
export class CaloriesPage implements OnInit {
  public firebaseAuth: AngularFireAuth;
  @ViewChild('barChart', {static: false}) barChart;
  bars: any;
  public calendarDate: string;
  public activeKilocalories = 0;
  public bmrKilocalories = 0;
  public totalKilocalories = 0;

  constructor(
    public ionLoaderService: IonloaderService,
    private user: UserService,
    private garmin: GarminService,
    public afAuth: AngularFireAuth) {
    this.firebaseAuth = afAuth;
    let gId;
    gId =  this.user.garminId;
    this.showData(gId);
    console.log('garminId', gId);
  }

  ngOnInit() {
  }

  async showData(garminId) {
    this.ionLoaderService.simpleLoader();
    let garminData;
    if (garminId) {
      this.garmin.getGarminDataset(garminId).subscribe(data => {
        garminData = data;
        const dailiesDataset = [];
        if (garminData) {
          const caloriesData = [];
          const dateData = [];
          for (const item of garminData) {
            if (item) {
              const caloriesItem = item.dailies;
              if (caloriesItem) {
                dailiesDataset.push(item.dailies);
                caloriesData.push(item.dailies.activeKilocalories + item.dailies.bmrKilocalories);
                dateData.push(item.dailies.calendarDate);
              }
            }
          }
          this.createLineChart(caloriesData, dateData);
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
          
          this.calendarDate = sortedDataSet[0].calendarDate;
          this.activeKilocalories = sortedDataSet[0].activeKilocalories;
          this.bmrKilocalories = sortedDataSet[0].bmrKilocalories;
          this.totalKilocalories = Number(this.activeKilocalories) + Number(this.bmrKilocalories);
        }
      });
      // tslint:disable-next-line: only-arrow-functions
      setTimeout(function() {
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
          label: 'Total Calories per Day',
          data: dataset,
          backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'royalblue', // array should have same number of elements as number of dataset
          borderWidth: 1,
        //  pointBorderColor: 'royalblue',
        //  pointBorderWidth: 1,
        //  pointBackgroundColor: 'royalblue'
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
