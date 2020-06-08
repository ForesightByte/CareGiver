import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {RouterModule} from '@angular/router';
import {AngularFireDatabaseModule} from '@angular/fire/database';

import {HomePage} from './home.page';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AngularFireDatabaseModule,
        NgCircleProgressModule.forRoot({
            // set defaults here
            radius: 100,
            outerStrokeWidth: 16,
            innerStrokeWidth: 8,
            outerStrokeColor: '#78C000',
            innerStrokeColor: '#C7E596',
            animationDuration: 300
          }),
        RouterModule.forChild([{path: '', component: HomePage}])
    ],
    declarations: [HomePage]
})
export class HomePageModule {
}
