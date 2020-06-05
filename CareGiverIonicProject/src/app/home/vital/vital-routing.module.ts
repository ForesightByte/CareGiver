import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {VitalPage} from './vital.page';

const routes: Routes = [
    {
        path: '',
        component: VitalPage
    },
    {
        path: 'steps',
        loadChildren: () => import('./pulse-ox/pulse-ox.module').then(m => m.PulseOxPageModule)
    },
    {
        path: 'steps',
        loadChildren: () => import('./stress/stress.module').then(m => m.StressPageModule)
    },
    {
        path: 'steps',
        loadChildren: () => import('./heart-rate/heart-rate.module').then(m => m.HeartRatePageModule)
    },
    {
        path: 'steps',
        loadChildren: () => import('./steps/steps.module').then(m => m.StepsPageModule)
    },
    {
        path: 'calories',
        loadChildren: () => import('./calories/calories.module').then(m => m.CaloriesPageModule)
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class VitalPageRoutingModule {
}
