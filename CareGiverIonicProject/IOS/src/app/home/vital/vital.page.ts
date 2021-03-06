import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-vital',
  templateUrl: './vital.page.html',
  styleUrls: ['./vital.page.scss'],
})
export class VitalPage implements OnInit {

  steps = '../../../assets/vitals/steps.png';
  heartRate = '../../../assets/vitals/heartRate.png';
  sleep = '../../../assets/vitals/sleep.png';
  calories = '../../../assets/vitals/calories.png';
  stress = '../../../assets/vitals/stress.png';
  pulseOx = '../../../assets/vitals/pulseOx.png';

  constructor() {
  }

  ngOnInit() {
  }

}
