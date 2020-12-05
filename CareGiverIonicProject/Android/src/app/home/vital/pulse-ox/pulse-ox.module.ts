import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {PulseOxPageRoutingModule} from './pulse-ox-routing.module';

import {PulseOxPage} from './pulse-ox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PulseOxPageRoutingModule
  ],
  declarations: [PulseOxPage]
})
export class PulseOxPageModule {
}
