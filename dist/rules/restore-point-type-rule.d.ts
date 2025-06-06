/**
 * @file Defines the RestorePointTypeRule class.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */
import { ArgsRule } from '../cli/args-rule.js';
import { ArgsRuleResult } from '../cli/args-rule-result.js';
export declare class RestorePointTypeRule extends ArgsRule {
    /**
     * Validates that the --restorePointType parameter is present
     * and has a valid value.
     */
    validate(argv: any): ArgsRuleResult;
}
