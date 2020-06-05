import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Chart} from 'chart.js';


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
    public stressDurationInSeconds: number;
    public activityStressDurationInSeconds: number;
    public restStressDurationInSeconds: number;
    public highStressDurationInSeconds: number;
    public mediumStressDurationInSeconds: number;
    public lowStressDurationInSeconds: number;

    constructor(public _afAuth: AngularFireAuth) {
        this.firebaseAuth = _afAuth;
    }

    ngOnInit() {
        this.showStressRateData();
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

    async showStressRateData() {
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
            let averageStressData = [];
            for (let item of garminData.documents) {
                if (item.fields.dailies) {
                    dailiesDataset.push(item.fields.dailies);
                    averageStressData.push(item.fields.dailies.mapValue.fields.averageStressLevel.integerValue);
                }
            }
            this.createStressRateChart(averageStressData);
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
            this.averageStressLevel = sortedDataSet[0].mapValue.fields.averageStressLevel.integerValue;
            this.maxStressLevel = sortedDataSet[0].mapValue.fields.maxStressLevel.integerValue;
            this.stressDurationInSeconds = sortedDataSet[0].mapValue.fields.stressDurationInSeconds.integerValue;
            this.activityStressDurationInSeconds = sortedDataSet[0].mapValue.fields.activityStressDurationInSeconds.integerValue;
            this.restStressDurationInSeconds = sortedDataSet[0].mapValue.fields.restStressDurationInSeconds.integerValue;
            this.highStressDurationInSeconds = sortedDataSet[0].mapValue.fields.highStressDurationInSeconds.integerValue;
            this.mediumStressDurationInSeconds = sortedDataSet[0].mapValue.fields.mediumStressDurationInSeconds.integerValue;
            this.lowStressDurationInSeconds = sortedDataSet[0].mapValue.fields.lowStressDurationInSeconds.integerValue;
        }
    }


    createStressRateChart(dataSet: number[]) {
        let labelData = [];
        for (let item in dataSet) {
            labelData.push('');
        }
        this.bars = new Chart(this.barChart.nativeElement, {
            type: 'line',
            data: {
                labels: labelData,
                datasets: [{
                    label: 'Average Stress level per Day',
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
