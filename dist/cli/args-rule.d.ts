/**
 * @file Defines the ArgsRule class for the
 *       ArgsParser class to use.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */
import { ArgsRuleResult } from './args-rule-result.js';
import { IArgsRule } from './iargs-rule.js';
export declare abstract class ArgsRule implements IArgsRule {
    abstract validate(argv: any): ArgsRuleResult;
}
