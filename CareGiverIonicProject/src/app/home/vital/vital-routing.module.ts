import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {VitalPage} from './vital.page';

const routes: Routes = [
  {
    path: '',
    component: VitalPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VitalPageRoutingModule {}
