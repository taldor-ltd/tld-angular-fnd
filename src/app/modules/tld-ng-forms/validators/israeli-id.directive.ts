
import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector:
    '[tldIsraeliId]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: IsraeliIdValidator,
      multi: true,
    },
  ],
})

/** פונקציונליות שבודקת האם התעודת זהות שהוזנה תקינה */
export class IsraeliIdValidator implements Validator {
  @Input() tldIsraeliId: boolean;

  validate(c: AbstractControl) {
    const value = c.value;

    // apparently there is no such thing as default value for the @Input() variable
    // so... 'this.tldIsraeliId !== false' is a MUST!!! if no value set externally for '@Input() tldIsraeliId'
    // only if 'tldIsraeliId' is set as 'false' we won't check
    if (this.tldIsraeliId !== false && value && value.length > 0) {

      let valid = true;
      let counter = 0;
      let incNum: number;

      if (value.length !== 9) {
        valid = false;
      } else {
        for (let i = 0; i < value.length; i++) {
          if (isNaN(value[i])) {
            valid = false;
          }

          incNum = +value[i] * ((i % 2) + 1);  // multiply digit by 1 or 2
          counter += (incNum > 9) ? incNum - 9 : incNum; // sum the digits up and add to counter
        }

        if (counter % 10 !== 0) {
          valid = false;
        }

      }
      if (!valid) {
        return {
          israeliId: true
        };
      }
    }
    return null;
  }
}
