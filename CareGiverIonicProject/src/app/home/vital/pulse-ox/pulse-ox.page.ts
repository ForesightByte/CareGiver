import {Observable} from 'rxjs';
import {Userelement} from '../../../users';
import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Chart} from 'chart.js';
import { UserService } from 'src/app/user.service';
import { GarminService } from 'src/app/garmin.service';

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
                            const average = this.getAveragePulseox(pulseOxItem.timeOffsetSpo2Values);
                            pulseOxItem.averageSpLevel = Number(average.toFixed(0));
                            averagePulseoxData.push(Number(average.toFixed(0)));
                            pulseoxDataset.push(pulseOxItem);
                            dateData.push(item.pulseox.calendarDate);
                        }
                    }
                    this.createLineChart(averagePulseoxData, dateData);
                }
                if (pulseoxDataset.length > 0) {
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

                    const sortedDataSet = pulseoxDataset.sort(compare);
                    this.calendarDate = sortedDataSet[0].calendarDate;
                    this.durationInSeconds = sortedDataSet[0].durationInSeconds;
                    this.averageSpLevel = sortedDataSet[0].averageSpLevel;
                }
            });
            // tslint:disable-next-line: only-arrow-functions
            setTimeout(function() {
            }, 1000, []);
        }
    }

    createLineChart(dataset: number[], date: string[]) {
        this.bars = new Chart(this.barChart.nativeElement, {
            type: 'line',
            data: {
                labels: date,
                datasets: [{
                    label: 'Average Pulse Rate per Day',
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


