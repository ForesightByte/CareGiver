import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../user.service';
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
    public firebaseAuth: AngularFireAuth;
    @ViewChild('barChart', {static: false}) barChart;
    bars: any;
    public activityType: string;
    public calendarDate: string;
    public totalSteps: number;
    public distanceInMeters: number;
    public stepsGoal: number;

    constructor(private user: UserService, private garmin: GarminService, public _afAuth: AngularFireAuth, private httpClient: HttpClient) {
        this.firebaseAuth = _afAuth;
    }

    ngOnInit() {
        this.showStepsData();
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
        let garminId, garminData, latestEntry;
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
            let stepsData = [];
            for (let item of garminData.documents) {
                if (item.fields.dailies) {
                    dailiesDataset.push(item.fields.dailies);
                    stepsData.push(item.fields.dailies.mapValue.fields.steps.integerValue);
                }
            }
            this.createStepsChart(stepsData);
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
            console.log(sortedDataSet[0]);
            this.totalSteps = sortedDataSet[0].mapValue.fields.steps.integerValue;
            this.activityType = sortedDataSet[0].mapValue.fields.activityType.stringValue;
            this.calendarDate = sortedDataSet[0].mapValue.fields.calendarDate.stringValue;
            this.distanceInMeters = sortedDataSet[0].mapValue.fields.distanceInMeters.integerValue;
            this.stepsGoal = sortedDataSet[0].mapValue.fields.stepsGoal.integerValue;
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
