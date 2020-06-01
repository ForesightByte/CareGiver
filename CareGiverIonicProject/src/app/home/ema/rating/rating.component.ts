import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmaPage} from '../ema.page';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
    @Output() public OnSelectRating: EventEmitter<any> = new EventEmitter<any>();
    @Input() isDisabled: boolean;
    public ratingSelected = 10;

    constructor(public ema: EmaPage) {
    }

    ngOnInit() {
    }

    public OnClickAction(value: number) {
        this.ratingSelected = value;
        this.OnSelectRating.emit(value);
    }
}
