import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelaxPageRoutingModule } from './relax-routing.module';
import {IonicRatingModule} from 'ionic-rating';
import { RelaxPage } from './relax.page';
import { RatingComponent } from '../rating/rating.component';
import { EmaPageModule } from '../ema.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    RelaxPageRoutingModule
  ],
  declarations: [RelaxPage, RatingComponent]
})
export class RelaxPageModule {}
