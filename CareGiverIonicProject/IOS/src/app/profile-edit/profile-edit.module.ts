import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';
import {ProfileEditPageRoutingModule} from './profile-edit-routing.module';
import {ProfileEditPage} from './profile-edit.page';

import {TagInputModule} from 'ngx-chips';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileEditPageRoutingModule,
    HttpClientModule,
    TagInputModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileEditPage]
})
export class ProfileEditPageModule {
}
