import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PermaPage } from './perma.page';

const routes: Routes = [
  {
    path: '',
    component: PermaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermaPageRoutingModule {}
