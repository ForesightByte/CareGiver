import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {EmaPageRoutingModule} from './ema-routing.module';
import {EmaPage} from './ema.page';
import { RatingComponent } from './rating/rating.component';
import { IonicRatingModule } from 'ionic-rating';
import { RelaxPageModule } from './relax/relax.module';
import { PermaPageModule } from './perma/perma.module';
import { ExtraPage } from './extra/extra.page';
import { ExtraPageModule } from './extra/extra.module';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        IonicRatingModule,
        RelaxPageModule,
        PermaPageModule,
        ExtraPageModule,
        EmaPageRoutingModule
    ],
    declarations: [EmaPage],
})
export class EmaPageModule {
}
