import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExtraPageRoutingModule } from './extra-routing.module';

import { ExtraPage } from './extra.page';
import { IonicRatingModule } from 'ionic-rating';
import { RatingComponent } from '../rating/rating.component';
import { EmaPageModule } from '../ema.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    ExtraPageRoutingModule
  ],
  declarations: [ExtraPage, RatingComponent]
})
export class ExtraPageModule {}
