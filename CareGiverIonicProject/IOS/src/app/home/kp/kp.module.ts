import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {KpPageRoutingModule} from './kp-routing.module';

import {KpPage} from './kp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KpPageRoutingModule
  ],
  declarations: [KpPage]
})
export class KpPageModule {
}
