import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.scss'],
})
export class CircleProgressComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  @Input() progressAmount: string = '33';
  // tslint:disable-next-line: no-inferrable-types
  @Input() progressColor: string = '#2ecc71';

  constructor() { }

  ngOnInit() {}

}
