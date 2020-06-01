import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../user.service';
import {Observable} from 'rxjs';
import {Userelement} from '../../../users';
import {GarminService} from 'src/app/garmin.service';

@Component({
    selector: 'app-stress',
    templateUrl: './stress.page.html',
    styleUrls: ['./stress.page.scss'],
})
export class StressPage implements OnInit {
    Info: Observable<Userelement>;
    uid;
    today;
    yesterday;

    constructor(
        private user: UserService,
        private garmin: GarminService
    ) {
    }

    ngOnInit() {
        const date = new Date();
        const dd = String(date.getDate()).padStart(2, '0');
        const ydd = String(date.getDate() - 1).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
        const yyyy = date.getFullYear();

        this.today = yyyy + '-' + mm + '-' + dd;
        this.yesterday = yyyy + '-' + mm + '-' + ydd;
        this.uid = this.user.userId;
        this.getData(this.today);
        console.log(this.Info);
    }

    getData(date: string) {
        this.Info = this.garmin.getGarmin(this.uid, date);
    }
}
