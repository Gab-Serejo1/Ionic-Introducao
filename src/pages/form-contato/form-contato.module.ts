import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormContatoPage } from './form-contato';

@NgModule({
  declarations: [
    FormContatoPage,
  ],
  imports: [
    IonicPageModule.forChild(FormContatoPage),
  ],
})
export class FormContatoPageModule {}
