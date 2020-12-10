"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NgXCreditCardsModule = void 0;
var core_1 = require("@angular/core");
var cc_number_format_directive_1 = require("./directives/cc-number-format.directive");
var cc_expiry_format_directive_1 = require("./directives/cc-expiry-format.directive");
var cc_cvc_format_directive_1 = require("./directives/cc-cvc-format.directive");
var i0 = require("@angular/core");
var CC_DIRECTIVES = [
    cc_number_format_directive_1.CCNumberFormatDirective,
    cc_expiry_format_directive_1.CCExpiryFormatDirective,
    cc_cvc_format_directive_1.CCCvcFormatDirective
];
var NgXCreditCardsModule = /** @class */ (function () {
    function NgXCreditCardsModule() {
    }
    NgXCreditCardsModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgXCreditCardsModule });
    NgXCreditCardsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgXCreditCardsModule_Factory(t) { return new (t || NgXCreditCardsModule)(); } });
    return NgXCreditCardsModule;
}());
exports.NgXCreditCardsModule = NgXCreditCardsModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgXCreditCardsModule, { declarations: [cc_number_format_directive_1.CCNumberFormatDirective,
        cc_expiry_format_directive_1.CCExpiryFormatDirective,
        cc_cvc_format_directive_1.CCCvcFormatDirective], exports: [cc_number_format_directive_1.CCNumberFormatDirective,
        cc_expiry_format_directive_1.CCExpiryFormatDirective,
        cc_cvc_format_directive_1.CCCvcFormatDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgXCreditCardsModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [CC_DIRECTIVES],
                exports: [CC_DIRECTIVES]
            }]
    }], null, null); })();
//# sourceMappingURL=ngxcreditcard.module.js.map