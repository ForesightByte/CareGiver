import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Chart} from 'chart.js';
import {UserService} from 'src/app/user.service';
import {GarminService} from 'src/app/garmin.service';


@Component({
    selector: 'app-heart-rate',
    templateUrl: './heart-rate.page.html',
    styleUrls: ['./heart-rate.page.scss'],
})
export class HeartRatePage implements OnInit {
    public firebaseAuth: AngularFireAuth;
    @ViewChild('barChart', {static: false}) barChart;
    bars: any;
    public calendarDate: string;
    public averageHeartRateInBeatsPerMinute: number;
    public minHeartRateInBeatsPerMinute: number;
    public maxHeartRateInBeatsPerMinute: number;
    public restingHeartRateInBeatsPerMinute: number;

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
                    const heartRateData = [];
                    const dateData = [];
                    for (const item of garminData) {
                        if (item.dailies) {
                            dailiesDataset.push(item.dailies);
                            heartRateData.push(item.dailies.averageHeartRateInBeatsPerMinute);
                            dateData.push(item.dailies.calendarDate);
                        }
                    }
                    this.createLineChart(heartRateData, dateData);
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
                    this.averageHeartRateInBeatsPerMinute = sortedDataSet[0].averageHeartRateInBeatsPerMinute;
                    this.maxHeartRateInBeatsPerMinute = sortedDataSet[0].maxHeartRateInBeatsPerMinute;
                    this.minHeartRateInBeatsPerMinute = sortedDataSet[0].minHeartRateInBeatsPerMinute;
                    this.restingHeartRateInBeatsPerMinute = sortedDataSet[0].restingHeartRateInBeatsPerMinute;
                }
            });
            // tslint:disable-next-line: only-arrow-functions
            setTimeout(function () {
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
                    label: 'Average Heart-Beats/Minute per Day',
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
