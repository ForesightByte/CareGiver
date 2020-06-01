import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {UserService} from '../../user.service';
import {AuthService} from '../../auth.service';

import {IonicModule} from '@ionic/angular';
import {VitalPageRoutingModule} from './vital-routing.module';
import {VitalPage} from './vital.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VitalPageRoutingModule
  ],
  declarations: [VitalPage],
  providers: [
    UserService,
    AuthService
  ]
})
export class VitalPageModule {}
