import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {WellbeingScorePageRoutingModule} from './wellbeing-score-routing.module';

import {WellbeingScorePage} from './wellbeing-score.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WellbeingScorePageRoutingModule
  ],
  declarations: [WellbeingScorePage]
})
export class WellbeingScorePageModule {
}
