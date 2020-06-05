import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Chart} from 'chart.js';


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


    constructor(public _afAuth: AngularFireAuth) {
        this.firebaseAuth = _afAuth;
    }

    ngOnInit() {
        this.showHeartRateData();
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

    async showHeartRateData() {
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
        let dailiesDataset = [];
        if (garminData) {
            let heartRateData = [];
            for (let item of garminData.documents) {
                if (item.fields.dailies) {
                    dailiesDataset.push(item.fields.dailies);
                    heartRateData.push(item.fields.dailies.mapValue.fields.averageHeartRateInBeatsPerMinute.integerValue);
                }
            }
            this.createHeartRateChart(heartRateData);
        }
        if (dailiesDataset.length > 0) {
            function compare(a, b) {
                let aValue = a.mapValue.fields.calendarDate.stringValue;
                let bValue = b.mapValue.fields.calendarDate.stringValue;
                if (aValue < bValue) {
                    return 1;
                }
                if (aValue > bValue) {
                    return -1;
                }
                return 0;
            }

            let sortedDataSet = dailiesDataset.sort(compare);
            this.calendarDate = sortedDataSet[0].mapValue.fields.calendarDate.stringValue;
            this.averageHeartRateInBeatsPerMinute = sortedDataSet[0].mapValue.fields.averageHeartRateInBeatsPerMinute.integerValue;
            this.maxHeartRateInBeatsPerMinute = sortedDataSet[0].mapValue.fields.maxHeartRateInBeatsPerMinute.integerValue;
            this.minHeartRateInBeatsPerMinute = sortedDataSet[0].mapValue.fields.minHeartRateInBeatsPerMinute.integerValue;
            this.restingHeartRateInBeatsPerMinute = sortedDataSet[0].mapValue.fields.restingHeartRateInBeatsPerMinute.integerValue;
        }
    }


    createHeartRateChart(dataSet: number[]) {
        let labelData = [];
        for (let item in dataSet) {
            labelData.push('');
        }
        this.bars = new Chart(this.barChart.nativeElement, {
            type: 'line',
            data: {
                labels: labelData,
                datasets: [{
                    label: 'Average Heart-Beats/Minute per Day',
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
