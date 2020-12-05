import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EmaPage} from './ema.page';

const routes: Routes = [
  {
    path: '',
    component: EmaPage,
    children: [
      {
        path: 'extra',
        children: [
          {
            path: '',
            loadChildren: () => import('./extra/extra.module').then(m => m.ExtraPageModule)
          }
        ]
      },
      {
        path: 'relax',
        children: [
          {
            path: '',
            loadChildren: () => import('./relax/relax.module').then(m => m.RelaxPageModule)
          }
        ]
      },
      {
        path: 'perma',
        children: [
          {
            path: '',
            loadChildren: () => import('./perma/perma.module').then(m => m.PermaPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/ema/extra',
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: '/ema/extra',
        pathMatch: 'full'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmaPageRoutingModule {
}
