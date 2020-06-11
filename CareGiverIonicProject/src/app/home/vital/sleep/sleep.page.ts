import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {Userelement} from '../../../users';
import {AngularFireAuth} from '@angular/fire/auth';
import { UserService } from 'src/app/user.service';
import { GarminService } from 'src/app/garmin.service';
import {Chart} from 'chart.js';

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
    @ViewChild('barChart', {static: false}) barChart;
    bars: any;
    public calendarDate: string;
    public durationInSeconds: number;
    public lightSleepDurationInSeconds: number;
    public deepSleepDurationInSeconds: number;
    public unmeasurableSleepDurationInSeconds: number;
    public remSleepInSeconds: number;
    public awakeDurationInSeconds: number;

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
                const sleepDataset = [];
                if (garminData) {
                    const totalSleepDuration = [];
                    const lightSleepDuration = [];
                    const deepSleepDuration = [];
                    const dateData = [];
                    for (const item of garminData) {
                        if (item) {
                            sleepDataset.push(item.sleeps);
                         //   totalSleepDuration.push(item.sleeps.durationInSeconds);
                         //   lightSleepDuration.push(item.sleeps.lightSleepDurationInSeconds);
                         //   deepSleepDuration.push(item.sleeps.deepSleepDurationInSeconds);
                         //   dateData.push(item.sleeps.calendarDate);
                        }
                    }
                  //  this.createLineChart(lightSleepDuration, dateData);
                }
                if (sleepDataset.length > 0) {
                    function compare(a, b) {
                        const aValue = a.calendarDate;
                        const bValue = b.calendarDate;
                        if (aValue < bValue) {
                            return 1;
                        }
                        if (aValue > bValue) {
                            return -1;
                        }
                        return 0;
                    }

                    const sortedDataSet = sleepDataset.sort(compare);
                    this.calendarDate = sortedDataSet[0].calendarDate;
                    this.durationInSeconds = sortedDataSet[0].durationInSeconds;
                    this.lightSleepDurationInSeconds = sortedDataSet[0].lightSleepDurationInSeconds;
                    this.deepSleepDurationInSeconds = sortedDataSet[0].deepSleepDurationInSeconds;
                    this.remSleepInSeconds = sortedDataSet[0].remSleepInSeconds;
                    this.unmeasurableSleepDurationInSeconds = sortedDataSet[0].unmeasurableSleepInSeconds;
                    this.awakeDurationInSeconds = sortedDataSet[0].awakeDurationInSeconds;
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
            type: 'line',
            data: {
                labels: date,
                datasets: [{
                    label: 'Active Calories per Day',
                    data: dataset,
                    backgroundColor: 'rgba(0, 0, 0, 0)', // array should have same number of elements as number of dataset
                    borderColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
                    borderWidth: 3,
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
