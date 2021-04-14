import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../user.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {HttpClient} from '@angular/common/http';
import {Chart} from 'chart.js';
import {AuthService} from '../auth.service';
import {GarminService} from 'src/app/garmin.service';
import { Observable } from 'rxjs';
import { Userelement } from '../users';

@Component({
  selector: 'app-wellbeing-score',
  templateUrl: './wellbeing-score.page.html',
  styleUrls: ['./wellbeing-score.page.scss'],
})
export class WellbeingScorePage implements OnInit {
  public wellbeingScore: number;
  @ViewChild('barChart', {static: false}) barChart;
  bars: any;

  private wellScore: number;
  private totalSteps: number;
  private averageStressLevel: number;
  private totalSleeps: number;
  private pulseOx: number;
  private garminId: string;

  constructor(
    private user: UserService,
    private http: HttpClient,
    public afAuth: AngularFireAuth,
    private auth: AuthService) {
  }

  ngOnInit() {
    this.showScore();
  }

  async showScore() {
    const uid = this.auth.cUid;
    const score = this.user.getEma(uid);
    let wellbeingData;
    const dailiesDataset = [];
    if (score) {
      score.subscribe(data => {
        wellbeingData = data;
        const wellbeingDataset = [];
        if (wellbeingData) {
          const dateData = [];
          for (const item of wellbeingData) {
            if (item) {
              wellbeingDataset.push(item.wellbeingScore);
              dateData.push(item.date);
            }
          }
          this.createWellbeingScoreChart(wellbeingDataset, dateData);
        }
      });
      // tslint:disable-next-line: only-arrow-functions
      setTimeout(function() {
      }, 1000, []);
    }
  }

  createWellbeingScoreChart(dataSet: number[], date: string[]) {
    const labelData = [];
    // tslint:disable-next-line: forin
    for (const item in dataSet) {
      labelData.push('');
    }
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: date,
        datasets: [{
          label: 'Well-being Score per Day',
          data: dataSet,
          backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'royalblue', // array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: false,
            barPercentage: 1.3,
            ticks: {
              max: 3,
            }
          }, {
            display: true,
            ticks: {
              autoSkip: false,
              max: 4,
            }
          }],
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
