import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
    @Output() public OnSelectRating: EventEmitter<any> = new EventEmitter<any>();
    @Input() isDisabled: boolean;
    public ratingSelected = 10;

    one = '../../../assets/score/1.png';
    two = '../../../assets/score/2.png';
    three = '../../../assets/score/3.png';
    four = '../../../assets/score/4.png';
    five = '../../../assets/score/5.png';

    constructor() {}

    ngOnInit() {
    }

    public OnClickAction(value: number) {
        this.ratingSelected = value;
        this.OnSelectRating.emit(value);
    }
}
