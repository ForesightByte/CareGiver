import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {PermaPageRoutingModule} from './perma-routing.module';
import {PermaPage} from './perma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PermaPageRoutingModule
  ],
  declarations: [PermaPage]
})
export class PermaPageModule {
}
