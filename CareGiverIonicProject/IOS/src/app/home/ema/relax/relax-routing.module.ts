import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RelaxPage} from './relax.page';

const routes: Routes = [
  {
    path: '',
    component: RelaxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelaxPageRoutingModule {
}
