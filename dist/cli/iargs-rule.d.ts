/**
 * @file Defines the IArgsRule interface.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */
import { ArgsRuleResult } from './args-rule-result.js';
export interface IArgsRule {
    validate(argv: any): ArgsRuleResult;
}
