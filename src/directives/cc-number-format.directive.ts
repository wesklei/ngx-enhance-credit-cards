import {
	Directive,
	ElementRef,
	Renderer2,
	HostListener
} from '@angular/core';

import * as Payment from 'payment';

@Directive({
	selector: '[ccNum]'
})
export class CCNumberFormatDirective {

	cardType: string;

	constructor(private renderer2: Renderer2, private el: ElementRef) {

		let element   = this.el.nativeElement;
		this.cardType = "";

    	// call lib functions
        Payment.formatCardNumber(element);
        Payment.restrictNumeric(element);
	}

	@HostListener('keypress', ['$event']) onKeypress(e) {

		let element 	  = this.el.nativeElement;
		let elementValue  = element.value;

		this.cardType = Payment.fns.cardType(elementValue);

		if ( this.cardType !== "" )
		{
      this.renderer2.removeClass(element, this.cardType);
		}
		else
		{
			this.cardType = "";
		}

	}

}
