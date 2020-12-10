"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CCExpiryFormatDirective = void 0;
var core_1 = require("@angular/core");
var Payment = require("payment");
var i0 = require("@angular/core");
var CCExpiryFormatDirective = /** @class */ (function () {
    function CCExpiryFormatDirective(el) {
        this.el = el;
        var element = this.el.nativeElement;
        // call lib functions
        Payment.formatCardExpiry(element);
        Payment.restrictNumeric(element);
    }
    CCExpiryFormatDirective.ɵfac = function CCExpiryFormatDirective_Factory(t) { return new (t || CCExpiryFormatDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    CCExpiryFormatDirective.ɵdir = i0.ɵɵdefineDirective({ type: CCExpiryFormatDirective, selectors: [["", "ccExp", ""]] });
    return CCExpiryFormatDirective;
}());
exports.CCExpiryFormatDirective = CCExpiryFormatDirective;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CCExpiryFormatDirective, [{
        type: core_1.Directive,
        args: [{
                selector: '[ccExp]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=cc-expiry-format.directive.js.map