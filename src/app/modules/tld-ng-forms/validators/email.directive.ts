
import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector:
    '[tldEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidator,
      multi: true,
    },
  ],
})

/** פונקציונליות שבודקת האם התעודת זהות שהוזנה תקינה */
export class EmailValidator implements Validator {

  validate(c: AbstractControl) {
    const value = c.value;

    if (value !== undefined && value !== null && value.length > 0) {

      let valid = true;
      const regexp = new RegExp('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$');


      valid = regexp.test(value);

      if (!valid) {
        return {
          email: true
        };
      }

      return null;

    }
  }
}
