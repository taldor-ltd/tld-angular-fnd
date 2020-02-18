import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsraeliIdValidator } from './validators/israeli-id.directive';
import { EmailValidator } from './validators/email.directive';

@NgModule({
  declarations: [
    IsraeliIdValidator,
    EmailValidator
  ],
  exports: [
    IsraeliIdValidator,
    EmailValidator
  ],
  imports: [
    CommonModule
  ]
})
export class TldNgFormsModule { }
