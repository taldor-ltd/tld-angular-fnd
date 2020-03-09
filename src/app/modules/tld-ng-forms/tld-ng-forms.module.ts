import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsraeliIdValidator } from './validators/israeli-id.directive';
import { EmailValidator } from './validators/email.directive';
import { PhoneNumberValidator } from './validators/phone-number.directive';

@NgModule({
  declarations: [
    IsraeliIdValidator,
    EmailValidator,
    PhoneNumberValidator
  ],
  exports: [
    IsraeliIdValidator,
    EmailValidator,
    PhoneNumberValidator
  ],
  imports: [
    CommonModule
  ]
})
export class TldNgFormsModule { }
