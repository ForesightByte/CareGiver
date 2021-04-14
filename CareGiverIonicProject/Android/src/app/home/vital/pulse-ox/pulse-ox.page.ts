import {Observable} from 'rxjs';
import {Userelement} from '../../../users';
import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Chart} from 'chart.js';
import {UserService} from 'src/app/user.service';
import {GarminService} from 'src/app/garmin.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/auth.service';

@Component({
    selector: 'app-pulse-ox',
    templateUrl: './pulse-ox.page.html',
    styleUrls: ['./pulse-ox.page.scss'],
})
export class PulseOxPage implements OnInit {
    Info: Observable<Userelement>;
    uid;
    today;
    yesterday;
    public firebaseAuth: AngularFireAuth;
    @ViewChild('barChart', {static: false}) barChart;
    bars: any;
    public calendarDate: string;
    public averageSpLevel: number;
    public durationInSeconds: string;

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

    public getAveragePulseox(pulseoxValues: any[]): number {
        let sum = 0, counter = 0;
        // tslint:disable-next-line: forin
        for (const key in pulseoxValues) {
            sum += Number(pulseoxValues[key]);
            counter++;
        }
        return sum / counter;
    }

    async showData() {
        let garminData;
        if (this.garminId) {
            this.garmin.getGarminDataset(this.garminId).subscribe(data => {
                garminData = data;
                const pulseoxDataset = [];
                if (garminData) {
                    const averagePulseoxData = [];
                    const dateData = [];
                    for (const item of garminData) {
                        if (item) {
                            const pulseOxItem = item.pulseox;
                            if (pulseOxItem) {
                                const average = this.getAveragePulseox(pulseOxItem.timeOffsetSpo2Values);
                                pulseOxItem.averageSpLevel = Number(average.toFixed(0));
                                averagePulseoxData.push(Number(average.toFixed(0)));
                                pulseoxDataset.push(pulseOxItem);
                                dateData.push(item.pulseox.calendarDate);
                            } else {
                                console.log('pulseox not found');
                            }
                        }
                    }
                    this.createLineChart(averagePulseoxData, dateData);
                }
                if (pulseoxDataset.length > 0) {
                    const sortedDataSet = pulseoxDataset.sort((a, b) =>{
                        if(a.calendarDate < b.calendarDate) {
                          return 1
                        } else if(a.calendarDate > b.calendarDate) {
                          return -1
                        } else {
                          return 0
                        }
                      });
                      
                    this.calendarDate = sortedDataSet[0].calendarDate;
                    this.durationInSeconds = this.secondsToHMS(sortedDataSet[0].durationInSeconds);
                    this.averageSpLevel = sortedDataSet[0].averageSpLevel;
                    
                    this.afStore.doc(`users/${this.uid}`).set({pulseOX: this.averageSpLevel}, {merge: true});
                }
            });
            // tslint:disable-next-line: only-arrow-functions
            setTimeout(function () {
            }, 1000, []);
        }
    }

    public secondsToHMS(seconds): string {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor(seconds % 3600 / 60);
        const hms = h + ' hr ' + m + ' m';
        return hms;
      }

    createLineChart(dataset: number[], date: string[]) {
        this.bars = new Chart(this.barChart.nativeElement, {
            type: 'bar',
            data: {
                labels: date,
                datasets: [{
                    label: 'Average Pulse Rate per Day',
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


