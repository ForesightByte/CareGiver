import {Observable} from 'rxjs';
import {Userelement} from '../../../users';
import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Chart} from 'chart.js';

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
    public durationInSeconds: number;


    constructor(public _afAuth: AngularFireAuth) {
        this.firebaseAuth = _afAuth;
    }

    ngOnInit() {
        this.showPulseRateData();
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

    public getAveragePulseox(pulseoxValues: any[]): number {
        let sum = 0, counter = 0;
        for (let key in pulseoxValues) {
            sum += Number(pulseoxValues[key].integerValue);
            counter++;
        }
        return sum / counter;
    }

    async showPulseRateData() {
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
        let pulseoxDataset = [];
        if (garminData) {
            let averagePulseoxData = [];
            for (let item of garminData.documents) {
                if (item.fields.pulseox) {
                    let pulseoxItem = item.fields.pulseox;
                    let average = this.getAveragePulseox(pulseoxItem.mapValue.fields.timeOffsetSpo2Values.mapValue.fields);
                    pulseoxItem.averageSpLevel = average;
                    averagePulseoxData.push(average);
                    pulseoxDataset.push(pulseoxItem);
                }
            }
            this.createPulseRateChart(averagePulseoxData);
        }
        if (pulseoxDataset.length > 0) {
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

            let sortedDataSet = pulseoxDataset.sort()
            this.calendarDate = sortedDataSet[0].mapValue.fields.calendarDate.stringValue;
            this.durationInSeconds = sortedDataSet[0].mapValue.fields.durationInSeconds.integerValue;
            this.averageSpLevel = sortedDataSet[0].averageSpLevel;
        }
    }


    createPulseRateChart(dataSet: number[]) {
        let labelData = [];
        for (let item in dataSet) {
            labelData.push('');
        }
        this.bars = new Chart(this.barChart.nativeElement, {
            type: 'line',
            data: {
                labels: labelData,
                datasets: [{
                    label: 'Average Pulse Rate per Day',
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
