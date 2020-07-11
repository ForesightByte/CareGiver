import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Chart} from 'chart.js';
import {UserService} from 'src/app/user.service';
import {GarminService} from 'src/app/garmin.service';


@Component({
    selector: 'app-stress',
    templateUrl: './stress.page.html',
    styleUrls: ['./stress.page.scss'],
})
export class StressPage implements OnInit {
    public firebaseAuth: AngularFireAuth;
    @ViewChild('barChart', {static: false}) barChart;
    bars: any;
    public calendarDate: string;
    public averageStressLevel: number;
    public maxStressLevel: number;
    public stressDurationInSeconds: string;
    public highStressDurationInSeconds: string;
    public mediumStressDurationInSeconds: string;

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
                    const averageStressData = [];
                    const dateData = [];
                    for (const item of garminData) {
                        if (item.dailies) {
                            dailiesDataset.push(item.dailies);
                            averageStressData.push(item.dailies.averageStressLevel);
                            dateData.push(item.dailies.calendarDate);
                        }
                    }
                    this.createLineChart(averageStressData, dateData);
                }
                if (dailiesDataset.length > 0) {
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

                    const sortedDataSet = dailiesDataset.sort(compare);
                    this.calendarDate = sortedDataSet[0].calendarDate;
                    this.averageStressLevel = sortedDataSet[0].averageStressLevel;
                    this.maxStressLevel = sortedDataSet[0].maxStressLevel;
                    this.stressDurationInSeconds = this.secondsToHMS(sortedDataSet[0].stressDurationInSeconds);
                    this.highStressDurationInSeconds = this.secondsToHMS(sortedDataSet[0].highStressDurationInSeconds);
                    this.mediumStressDurationInSeconds = this.secondsToHMS(sortedDataSet[0].mediumStressDurationInSeconds);
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
                    label: 'Average Stress level per Day',
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
