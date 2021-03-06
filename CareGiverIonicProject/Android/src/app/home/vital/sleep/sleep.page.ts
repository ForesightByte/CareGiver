import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {Userelement} from '../../../users';
import {AngularFireAuth} from '@angular/fire/auth';
import {UserService} from 'src/app/user.service';
import {GarminService} from 'src/app/garmin.service';
import {Chart} from 'chart.js';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/auth.service';

const lineColors = ['rgb(38, 194, 129)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)'];

@Component({
    selector: 'app-sleep',
    templateUrl: './sleep.page.html',
    styleUrls: ['./sleep.page.scss'],
})
export class SleepPage implements OnInit {
    Info: Observable<Userelement>;
    uid;
    today;
    yesterday;
    public firebaseAuth: AngularFireAuth;
    @ViewChild('barChart', {static: true}) barChart;
    bars: any;

    public calendarDate: string;
    public totalDuration: string;
    public lightSleepDuration: string;
    public deepSleepDuration: string;
    public remSleepDuration: string;

    private garminId: string;

    constructor(
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
        let garminData;
        if (this.garminId) {
            this.garmin.getGarminDataset(this.garminId).subscribe(data => {
                garminData = data;
                const sleepDataset = [];
                if (garminData) {
                    const totalSleepDuration = [];
                    const lightSleepDuration = [];
                    const deepSleepDuration = [];
                    const remSleepDuration = [];
                    const dateData = [];
                    const allSleepData = [];
                    for (const item of garminData) {
                        if (item) {
                            const sleepItem = item.sleeps;
                            if (sleepItem) {
                                sleepDataset.push(sleepItem);
                                totalSleepDuration.push(Number(this.secondsToHMForGraph(sleepItem.durationInSeconds)));
                                lightSleepDuration.push(Number(this.secondsToHMForGraph(sleepItem.lightSleepDurationInSeconds)));
                                deepSleepDuration.push(Number(this.secondsToHMForGraph(sleepItem.deepSleepDurationInSeconds)));
                                remSleepDuration.push(Number(this.secondsToHMForGraph(sleepItem.remSleepInSeconds)));
                                dateData.push(sleepItem.calendarDate);
                            }
                        }
                    }
                    allSleepData.push(
                        {title: 'Total sleep', datasets: totalSleepDuration},
                        {title: 'Light Sleep', datasets: lightSleepDuration},
                        {title: 'Deep Sleep', datasets: deepSleepDuration},
                        {title: 'Rem Sleep', datasets: remSleepDuration});
                    this.createLineChart(allSleepData, dateData);
                }
                if (sleepDataset.length > 0) {
                    const sortedDataSet = sleepDataset.sort((a, b) =>{
                        if(a.calendarDate < b.calendarDate) {
                          return 1
                        } else if(a.calendarDate > b.calendarDate) {
                          return -1
                        } else {
                          return 0
                        }
                      });
                      
                    this.calendarDate = sortedDataSet[0].calendarDate;
                    const duration = sortedDataSet[0].durationInSeconds;
                    this.totalDuration = this.secondsToHMS(sortedDataSet[0].durationInSeconds);
                    this.lightSleepDuration = this.secondsToHMS(sortedDataSet[0].lightSleepDurationInSeconds);
                    this.deepSleepDuration = this.secondsToHMS(sortedDataSet[0].deepSleepDurationInSeconds);
                    this.remSleepDuration = this.secondsToHMS(sortedDataSet[0].remSleepInSeconds);
                    
                    let sleep = 0;
                    if (duration >= 27000 && duration <= 30600){
                        sleep = 100;
                    } else if (duration < 27000 || duration > 30600) {
                        sleep = 90;
                    } else if (duration < 23400 || duration > 34200) {
                        sleep = 80;
                    } else if (duration < 19800 || duration > 37800) {
                        sleep = 70;
                    } else if (duration < 16200 || duration > 41400) {
                        sleep = 60;
                    } else if (duration < 12600 || duration > 45000) {
                        sleep = 50;
                    } else if (duration < 9000 || duration > 48600) {
                        sleep = 40;
                    } else if (duration < 7200 || duration > 50400) {
                        sleep = 30;
                    } else if (duration < 5400 || duration > 52200) {
                        sleep = 20;
                    } else if (duration < 3600 || duration > 54000) {
                        sleep = 10;
                    } else {
                        sleep = 0;
                    }
                    this.afStore.doc(`users/${this.uid}`).set({sleep: sleep}, {merge: true});
                }
            });
            // tslint:disable-next-line: only-arrow-functions
            setTimeout(function() {
            }, 1000, []);
        }
    }

    public secondsToHMS(seconds): string {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor(seconds % 3600 / 60);
        const hms = h + ' hr ' + m + ' m';
        return hms;
      }

    public secondsToHMForGraph(seconds): string {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor(seconds % 3600 / 60);
        const hm = h + '.' + m;
        return hm;
      }

      createLineChart(dataset, date: string[]) {
        this.bars = new Chart(this.barChart.nativeElement, {
            type: 'bar',
            data: {
                labels: date,
                datasets: dataset.map((data, ndx) =>
                ({
                    label: data.title,
                    data: data.datasets,
                    borderColor: lineColors[ndx], // array should have same number of elements as number of dataset
                    backgroundColor: lineColors[ndx], // array should have same number of elements as number of dataset
                    borderWidth: 1
                }))
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
