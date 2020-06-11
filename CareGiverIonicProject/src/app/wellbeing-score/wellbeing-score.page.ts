import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../user.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {HttpClient} from '@angular/common/http';
import {Chart} from 'chart.js';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-wellbeing-score',
  templateUrl: './wellbeing-score.page.html',
  styleUrls: ['./wellbeing-score.page.scss'],
})
export class WellbeingScorePage implements OnInit {
  public wellbeingScore: number;
  @ViewChild('barChart', {static: false}) barChart;
    bars: any;

  constructor(
    private user: UserService,
    private http: HttpClient,
    public afAuth: AngularFireAuth,
    private auth: AuthService) { }

  ngOnInit() {
    this.showScore();
  }

  async showScore() {
    const uid = this.auth.cUid;
    const score = this.user.getEma(uid);
    let wellbeingData;
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
        type: 'line',
        data: {
            labels: date,
            datasets: [{
                label: 'Well-being Score per Day',
                data: dataSet,
                backgroundColor: 'rgba(0, 0, 0, 0)', // array should have same number of elements as number of dataset
                borderColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
                borderWidth: 4,
                pointBorderColor: 'royalblue',
                pointBorderWidth: 1,
                pointBackgroundColor: 'royalblue'
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
