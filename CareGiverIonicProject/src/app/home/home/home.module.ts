import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {RouterModule} from '@angular/router';
import {AngularFireDatabaseModule} from '@angular/fire/database';

import {HomePage} from './home.page';
import {PercentageComponent} from 'src/app/percentage/percentage.component';
import { BarProgressComponent } from 'src/app/bar-progress/bar-progress.component';
import {ProgressBarModule} from 'angular-progress-bar';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProgressBarModule,
        AngularFireDatabaseModule,
        RouterModule.forChild([{path: '', component: HomePage}])
    ],
    declarations: [HomePage, PercentageComponent, BarProgressComponent]
})
export class HomePageModule {
}
