'use strict';
/**
 * @file Defines the ArgsRuleResult class that is used
 *       to summarize the validation result of the rule.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.ArgsRuleResult = void 0;
const argument_null_exception_js_1 = require('../exceptions/argument-null-exception.js');
/**
 * ArgsRuleResult represents a result that is
 * returned after the rule validaion has completed.
 */
class ArgsRuleResult {
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
      throw new argument_null_exception_js_1.ArgumentNullException('error');
    }
    this.statusCode = statusCode;
    this.error = error;
  }
}
exports.ArgsRuleResult = ArgsRuleResult;
//# sourceMappingURL=args-rule-result.js.map
