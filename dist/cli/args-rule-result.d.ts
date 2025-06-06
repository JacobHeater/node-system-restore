/**
 * @file Defines the ArgsRuleResult class that is used
 *       to summarize the validation result of the rule.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */
import { StatusCode } from '../common/status-code.js';
import { Exception } from '../exceptions/exception.js';
/**
 * ArgsRuleResult represents a result that is
 * returned after the rule validaion has completed.
 */
export declare class ArgsRuleResult {
  /**
   * The status code that explains the result
   * of the rule validation.
   */
  statusCode: StatusCode;
  /**
   * In the event of an error during validation,
   * this error will be thrown.
   */
  error: Exception;
  /**
   * Should the application error out when the
   * status code is anything but OK.
   */
  throwOnFailure: boolean;
  /**
   * Initializes a new instance of the ArgsRuleResult class.
   */
  constructor(statusCode: StatusCode, error: Exception);
}
