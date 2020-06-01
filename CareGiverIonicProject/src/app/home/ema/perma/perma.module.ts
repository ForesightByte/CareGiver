import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {PermaPageRoutingModule} from './perma-routing.module';
import {IonicRatingModule} from 'ionic-rating';
import {RatingComponent} from '../rating/rating.component';

import {PermaPage} from './perma.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        IonicRatingModule,
        PermaPageRoutingModule
    ],
    declarations: [PermaPage, RatingComponent]
})
export class PermaPageModule {
}
