"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CCCvcFormatDirective = void 0;
var core_1 = require("@angular/core");
var Payment = require("payment");
var i0 = require("@angular/core");
var CCCvcFormatDirective = /** @class */ (function () {
    function CCCvcFormatDirective(el) {
        this.el = el;
        var element = this.el.nativeElement;
        // call lib functions
        Payment.formatCardCVC(element);
        Payment.restrictNumeric(element);
    }
    CCCvcFormatDirective.ɵfac = function CCCvcFormatDirective_Factory(t) { return new (t || CCCvcFormatDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    CCCvcFormatDirective.ɵdir = i0.ɵɵdefineDirective({ type: CCCvcFormatDirective, selectors: [["", "ccCvc", ""]] });
    return CCCvcFormatDirective;
}());
exports.CCCvcFormatDirective = CCCvcFormatDirective;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CCCvcFormatDirective, [{
        type: core_1.Directive,
        args: [{
                selector: '[ccCvc]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=cc-cvc-format.directive.js.map