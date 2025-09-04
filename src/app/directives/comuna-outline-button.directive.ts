import { Directive, ElementRef, inject } from "@angular/core";

@Directive({
    selector: '[comunaOutlineButton]'
})
export class ComunaOutlineButtonDirective {
    private elementRef: ElementRef = inject(ElementRef);

    constructor() {
        this.elementRef.nativeElement.classList.add('comuna_outline_button');
    }
}