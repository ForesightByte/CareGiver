import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'bar-progress',
  templateUrl: './bar-progress.component.html',
  styleUrls: ['./bar-progress.component.scss'],
})
export class BarProgressComponent implements OnInit {
  @Input() progress;

  constructor() { }

  ngOnInit() {}

}
