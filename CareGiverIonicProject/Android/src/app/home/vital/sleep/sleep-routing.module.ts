import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SleepPage} from './sleep.page';

const routes: Routes = [
  {
    path: '',
    component: SleepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepPageRoutingModule {
}