import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {KpPage} from './kp.page';

const routes: Routes = [
    {
        path: '',
        component: KpPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class KpPageRoutingModule {
}
