import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../user.service';
import {Observable} from 'rxjs';
import {Userelement} from '../../../users';
import {GarminService} from 'src/app/garmin.service';
import {Chart} from 'chart.js';
import {AngularFireAuth} from "@angular/fire/auth";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-steps',
  templateUrl: './steps.page.html',
  styleUrls: ['./steps.page.scss'],
})
export class StepsPage implements OnInit {
  Info: Observable<Userelement>;
  uid;
  today;
  yesterday;
  public firebaseAuth: AngularFireAuth;
  @ViewChild('barChart', {static: false}) barChart;
  bars: any;

  constructor(private user: UserService, private garmin: GarminService, public _afAuth: AngularFireAuth, private httpClient: HttpClient) {
    this.firebaseAuth = _afAuth;
  }

  ngOnInit() {
    const date = new Date();
    const dd = String(date.getDate()).padStart(2, '0');
    const ydd = String(date.getDate() - 1).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = date.getFullYear();

    this.today = yyyy + '-' + mm + '-' + dd;
        this.yesterday = yyyy + '-' + mm + '-' + ydd;
    this.uid = this.user.userId;
    // this.Info = this.garmin.getGarmin(this.uid, yesterday);
    this.getData(this.today);
    console.log(this.Info);
    this.showStepsData();
  }

  getData(date: string) {
    this.Info = this.garmin.getGarmin(this.uid, date);
  }

  public async getDataByRestApi(url: string): Promise<any> {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    const result = await fetch(proxyurl + url, {
      headers: {
        'Bearer': 'AIzaSyA5U7_XDrz5HxBqPRlp8xlPJI7LIsZMMZk'
      },
    }); // https://cors-anywhere.herokuapp.com/https://example.com
    return await result.json();
  }

  async showStepsData() {
    let garminId, garminData;
    let userData = await this.getDataByRestApi('https://firestore.googleapis.com/v1/projects/care-giver-project/databases/(default)/documents/users/' + this.firebaseAuth.auth.currentUser.uid);
    setTimeout(function () {
    }, 1000, []);
    if (userData) {
      garminId = userData.fields.garminUserId.stringValue;
      garminData = await this.getDataByRestApi('https://firestore.googleapis.com/v1/projects/care-giver-project/databases/(default)/documents/users/' + garminId + '/garmin');
      setTimeout(function () {
      }, 1000, []);
    }
    if (garminData) {
      let stepsData = [];
      for (let item of garminData.documents) {
        item.fields.dailies ? stepsData.push(item.fields.dailies.mapValue.fields.steps.integerValue) : item;
      }
      this.createStepsChart(stepsData);
    }
  }


  createStepsChart(dataSet: number[]) {
    let labelData = [];
    for (let item in dataSet) {
      labelData.push('');
    }
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: labelData,
        datasets: [{
          label: 'Steps per Day',
          data: dataSet,
          backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
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
