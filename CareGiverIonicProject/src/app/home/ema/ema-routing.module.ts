import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EmaPage} from './ema.page';

const routes: Routes = [
    {
        path: '',
        component: EmaPage,
        children: [
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
                redirectTo: '/ema/perma',
                pathMatch: 'full'
            },
            {
                path: '',
                redirectTo: '/ema/perma',
                pathMatch: 'full'
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EmaPageRoutingModule {
}
