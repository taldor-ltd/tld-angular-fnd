import { Directive, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[tldPasswordVisibility]'
})

export class PasswordVisibilityDirective implements OnChanges {

    @Input('tldPasswordVisibility') public passwordVisibility: boolean;

    constructor(public element: ElementRef) {
        this.setPasswordVisibility();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.setPasswordVisibility();
    }

    setPasswordVisibility() {
        if (!this.passwordVisibility) {
            this.element.nativeElement['type'] = 'password';
        } else {
            this.element.nativeElement['type'] = 'text';
        }
    }
}



