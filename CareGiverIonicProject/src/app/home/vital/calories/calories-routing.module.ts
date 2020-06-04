import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CaloriesPage} from './calories.page';

const routes: Routes = [
  {
    path: '',
    component: CaloriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaloriesPageRoutingModule {
}
