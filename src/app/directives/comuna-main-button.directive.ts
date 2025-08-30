import { Directive, ElementRef, inject } from "@angular/core";

@Directive({
    selector: '[comunaMainButton]'
})
export class ComunaMainButtonDirective {
    private elementRef: ElementRef = inject(ElementRef);

    constructor() {
        this.elementRef.nativeElement.classList.add('comuna_main_button');
    }
}