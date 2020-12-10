import { ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CCNumberFormatDirective {
    private renderer2;
    private el;
    cardType: string;
    constructor(renderer2: Renderer2, el: ElementRef);
    onKeypress(e: any): void;
    static ɵfac: i0.ɵɵFactoryDef<CCNumberFormatDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CCNumberFormatDirective, "[ccNum]", never, {}, {}, never>;
}
