import { ElementRef, Renderer2 } from '@angular/core';
export declare class CCNumberFormatDirective {
    private renderer2;
    private el;
    cardType: string;
    constructor(renderer2: Renderer2, el: ElementRef);
    onKeypress(e: any): void;
}
