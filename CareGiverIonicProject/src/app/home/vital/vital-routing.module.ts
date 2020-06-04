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
