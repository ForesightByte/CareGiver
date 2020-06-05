import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {Userelement} from '../../../users';
import {AngularFireAuth} from "@angular/fire/auth";

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

    constructor(public _afAuth: AngularFireAuth) {
        this.firebaseAuth = _afAuth;
    }

    ngOnInit() {
        this.showSleepData();
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

    async showSleepData() {
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
        let sleepDataset = [];
        if (garminData) {
            console.log(garminData);
            for (let item of garminData.documents) {
                if (item.fields.sleeps) {
                    sleepDataset.push(item.fields.sleeps);
                }
            }
        }
        if (sleepDataset.length > 0) {
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

            let sortedDataSet = sleepDataset.sort(compare);
            this.calendarDate = sortedDataSet[0].mapValue.fields.calendarDate.stringValue;
            this.durationInSeconds = sortedDataSet[0].mapValue.fields.durationInSeconds.integerValue;
            this.lightSleepDurationInSeconds = sortedDataSet[0].mapValue.fields.lightSleepDurationInSeconds.integerValue;
            this.deepSleepDurationInSeconds = sortedDataSet[0].mapValue.fields.deepSleepDurationInSeconds.integerValue;
            this.unmeasurableSleepDurationInSeconds = sortedDataSet[0].mapValue.fields.unmeasurableSleepInSeconds.integerValue;
            this.remSleepInSeconds = sortedDataSet[0].mapValue.fields.remSleepInSeconds.integerValue;
            this.awakeDurationInSeconds = sortedDataSet[0].mapValue.fields.awakeDurationInSeconds.integerValue;
        }
    }
}
