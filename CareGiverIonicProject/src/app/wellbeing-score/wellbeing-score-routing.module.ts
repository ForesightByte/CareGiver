import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WellbeingScorePage } from './wellbeing-score.page';

const routes: Routes = [
  {
    path: '',
    component: WellbeingScorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WellbeingScorePageRoutingModule {}
