import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ProfilePageRoutingModule} from './profile-routing.module';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {ProfilePage} from './profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    AngularFireDatabaseModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {
}
