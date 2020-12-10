"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CCNumberFormatDirective = void 0;
var core_1 = require("@angular/core");
var Payment = require("payment");
var i0 = require("@angular/core");
var CCNumberFormatDirective = /** @class */ (function () {
    function CCNumberFormatDirective(renderer2, el) {
        this.renderer2 = renderer2;
        this.el = el;
        var element = this.el.nativeElement;
        this.cardType = "";
        // call lib functions
        Payment.formatCardNumber(element);
        Payment.restrictNumeric(element);
    }
    CCNumberFormatDirective.prototype.onKeypress = function (e) {
        var element = this.el.nativeElement;
        var elementValue = element.value;
        this.cardType = Payment.fns.cardType(elementValue);
        if (this.cardType !== "") {
            this.renderer2.removeClass(element, this.cardType);
        }
        else {
            this.cardType = "";
        }
    };
    CCNumberFormatDirective.ɵfac = function CCNumberFormatDirective_Factory(t) { return new (t || CCNumberFormatDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    CCNumberFormatDirective.ɵdir = i0.ɵɵdefineDirective({ type: CCNumberFormatDirective, selectors: [["", "ccNum", ""]], hostBindings: function CCNumberFormatDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keypress", function CCNumberFormatDirective_keypress_HostBindingHandler($event) { return ctx.onKeypress($event); });
        } } });
    return CCNumberFormatDirective;
}());
exports.CCNumberFormatDirective = CCNumberFormatDirective;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CCNumberFormatDirective, [{
        type: core_1.Directive,
        args: [{
                selector: '[ccNum]'
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { onKeypress: [{
            type: core_1.HostListener,
            args: ['keypress', ['$event']]
        }] }); })();
//# sourceMappingURL=cc-number-format.directive.js.map