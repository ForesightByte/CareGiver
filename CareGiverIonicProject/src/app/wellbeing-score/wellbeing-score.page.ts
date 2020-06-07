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

  public async getDataByRestApi(url: string): Promise<any> {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    const result = await fetch(proxyurl + url, {
        headers: {
            Bearer: 'AIzaSyA5U7_XDrz5HxBqPRlp8xlPJI7LIsZMMZk'
        },
    }); // https://cors-anywhere.herokuapp.com/https://example.com
    return await result.json();
  }

  async showScore() {
    const uid = this.auth.cUid;
    // tslint:disable-next-line: max-line-length
    const userData = await this.getDataByRestApi('https://firestore.googleapis.com/v1/projects/care-giver-project/databases/(default)/documents/users/' + uid + '/EMA');
    // tslint:disable-next-line: only-arrow-functions
    setTimeout(function() {
        }, 1000, []);
    const scoreData = [];
    if (userData) {
            for (const item of userData.documents) {
                if (item.fields.wellbeingScore) {
                  scoreData.push(item.fields.wellbeingScore.integerValue);
                }
            }
            this.createWellbeingScoreChart(scoreData);
        }
  }

  createWellbeingScoreChart(dataSet: number[]) {
    const labelData = [];
    for (const item in dataSet) {
        labelData.push('');
    }
    this.bars = new Chart(this.barChart.nativeElement, {
        type: 'line',
        data: {
            labels: labelData,
            datasets: [{
                label: 'Well-being Score per Day',
                data: dataSet,
                backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
                borderColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
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
