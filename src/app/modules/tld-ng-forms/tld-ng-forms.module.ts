import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsraeliIdValidator } from './validators/israeli-id.directive';

@NgModule({
  declarations: [
    IsraeliIdValidator
  ],
  exports: [
    IsraeliIdValidator
  ],
  imports: [
    CommonModule
  ]
})
export class TldNgFormsModule { }
