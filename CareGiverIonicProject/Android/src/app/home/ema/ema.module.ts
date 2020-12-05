import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {EmaPageRoutingModule} from './ema-routing.module';
import {EmaPage} from './ema.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmaPageRoutingModule
  ],
  declarations: [EmaPage],
})
export class EmaPageModule {
}
