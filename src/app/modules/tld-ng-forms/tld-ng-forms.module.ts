import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsraeliIdValidator } from './validators/israeli-id.directive';
import { EmailValidator } from './validators/email.directive';
import { PasswordVisibilityDirective } from './directives/password-visibility.directive';

@NgModule({
  declarations: [
    IsraeliIdValidator,
    EmailValidator,
    PasswordVisibilityDirective
  ],
  exports: [
    IsraeliIdValidator,
    EmailValidator,
    PasswordVisibilityDirective
  ],
  imports: [
    CommonModule
  ]
})
export class TldNgFormsModule { }
