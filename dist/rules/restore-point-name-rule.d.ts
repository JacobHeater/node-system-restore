/**
 * @file Defines the RestorePointNameRule class.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */
import { ArgsRule } from '../cli/args-rule.js';
import { ArgsRuleResult } from '../cli/args-rule-result.js';
export declare class RestorePointNameRule extends ArgsRule {
    /**
     * Checks to see if the restorePointName parameter
     * is present in the argv collection.
     *
     * @param argv The argv instance to check against.
     */
    validate(argv: any): ArgsRuleResult;
}
