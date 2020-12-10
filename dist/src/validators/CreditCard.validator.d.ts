import { FormControl } from '@angular/forms';
export declare class CreditCardValidator {
    /**
     * Validates a cc number
     * @param control
     */
    static validateCardNumber(control: FormControl): {
        error: string;
    };
    /**
     * Validates the expiry date.
     * Breaks exp by "/" string and assumes that first array entry is month and second year
     * Also removes any spaces
     * @param control
     */
    static validateCardExpiry(control: FormControl): {
        error: string;
    };
    /**
     * Validates cards CVC
     * Also removes any spaces
     * @param control
     */
    static validateCardCvc(control: FormControl): {
        error: string;
    };
}
