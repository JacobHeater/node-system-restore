/**
 * @file Defines the ArgsRuleResult class that is used
 *       to summarize the validation result of the rule.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */
import { ArgumentNullException } from '../exceptions/argument-null-exception.js';
/**
 * ArgsRuleResult represents a result that is
 * returned after the rule validaion has completed.
 */
export class ArgsRuleResult {
    /**
     * The status code that explains the result
     * of the rule validation.
     */
    statusCode;
    /**
     * In the event of an error during validation,
     * this error will be thrown.
     */
    error;
    /**
     * Should the application error out when the
     * status code is anything but OK.
     */
    throwOnFailure = false;
    /**
     * Initializes a new instance of the ArgsRuleResult class.
     */
    constructor(statusCode, error) {
        if (!error) {
            throw new ArgumentNullException('error');
        }
        this.statusCode = statusCode;
        this.error = error;
    }
}
//# sourceMappingURL=args-rule-result.js.map