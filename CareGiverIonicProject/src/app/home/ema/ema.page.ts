import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-ema',
    templateUrl: './ema.page.html',
    styleUrls: ['./ema.page.scss'],
})
export class EmaPage implements OnInit {
    one = '../../../assets/score/1.png';
    two = '../../../assets/score/2.png';
    three = '../../../assets/score/3.png';
    four = '../../../assets/score/4.png';
    five = '../../../assets/score/5.png';

    constructor() {}


    ngOnInit() {
    }
}
