import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {Userelement} from '../../../users';
import {AngularFireAuth} from '@angular/fire/auth';
import {UserService} from 'src/app/user.service';
import {GarminService} from 'src/app/garmin.service';
import {Chart} from 'chart.js';

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
                    this.totalDuration = this.secondsToHMS(sortedDataSet[0].durationInSeconds);
                    this.lightSleepDuration = this.secondsToHMS(sortedDataSet[0].lightSleepDurationInSeconds);
                    this.deepSleepDuration = this.secondsToHMS(sortedDataSet[0].deepSleepDurationInSeconds);
                    this.remSleepDuration = this.secondsToHMS(sortedDataSet[0].remSleepInSeconds);
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
            type: 'line',
            data: {
                labels: date,
                datasets: dataset.map((data, ndx) =>
                ({
                    label: data.title,
                    data: data.datasets,
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderColor: lineColors[ndx],
                    borderWidth: 3,
                    pointBorderColor: 'royalblue',
                    pointBorderWidth: 1,
                    pointBackgroundColor: 'royalblue'
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
