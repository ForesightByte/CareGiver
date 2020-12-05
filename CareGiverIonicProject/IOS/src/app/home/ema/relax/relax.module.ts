import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {RelaxPageRoutingModule} from './relax-routing.module';
import {RelaxPage} from './relax.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelaxPageRoutingModule
  ],
  declarations: [RelaxPage]
})
export class RelaxPageModule {
}
