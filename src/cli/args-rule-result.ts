/**
 * @file Defines the ArgsRuleResult class that is used
 *       to summarize the validation result of the rule.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */

import { StatusCode } from '../common/status-code';
import { ArgumentNullException } from '../exceptions/argument-null-exception';
import { Exception } from '../exceptions/exception';

/**
 * ArgsRuleResult represents a result that is
 * returned after the rule validaion has completed.
 */
export class ArgsRuleResult {
    /**
     * The status code that explains the result
     * of the rule validation.
     */
    public statusCode: StatusCode;

    /**
     * In the event of an error during validation,
     * this error will be thrown.
     */
    public error: Exception;

    /**
     * Should the application error out when the
     * status code is anything but OK.
     */
    public throwOnFailure: boolean = false;

    /**
     * Initializes a new instance of the ArgsRuleResult class.
     */
    constructor(statusCode: StatusCode, error: Exception) {
        
        if (!error) {
            throw new ArgumentNullException('error');
        }
        
        this.statusCode = statusCode;
        this.error = error;
    }

}
