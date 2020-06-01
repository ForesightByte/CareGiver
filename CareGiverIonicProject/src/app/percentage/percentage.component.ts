import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-percentage',
    templateUrl: './percentage.component.html',
    styleUrls: ['./percentage.component.scss']
})
export class PercentageComponent implements OnInit, OnChanges {
    @Input() value: number;
    radius = 54;
    circumference = 2 * Math.PI * this.radius;
    dashoffset: number;

    constructor() {
        this.progress(0);
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.value.currentValue !== changes.value.previousValue) {
            this.progress(changes.value.currentValue);
        }
    }

    public progress(value: number) {
        console.log('value', value);
        const progress = value / 100;
        this.dashoffset = this.circumference * (1 - progress);
        console.log('dash', this.dashoffset);
    }
}
