import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';


@Directive({
  selector: '[tldPhoneNumber]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PhoneNumberValidator,
      multi: true,
    },
  ],
})


/** פונקציונליות שבודקת האם מספר טלפון שהוזן תקין */
export class PhoneNumberValidator implements Validator {

  private readonly phoneRegex = /^^((\+?972-?|0)(([23489]{1}-?\d{7})|[5|7]{1}(\d{8}|\d{1}-\d{7}))|1-?(800|900)-?(\d{3}-?\d{3}))$$/;

  @Input() tldPhoneNumber;

  validate(c: AbstractControl) {
    const value = c.value;

    console.log('phone number validate');

    if (value !== undefined && value !== null && value.length > 0) {

      let valid = true;

      const testResult = this.phoneRegex.test(value);

      if (!testResult) {
        valid = false;
      }


      if (!valid) {
        return {
          PhoneNumber: true
        };
      }

    }
    return null;
  }
}
