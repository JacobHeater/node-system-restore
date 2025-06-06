/**
 * @file Defines the IArgsRule interface.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */

import { ArgsRuleResult } from './args-rule-result';

export interface IArgsRule {
    // tslint:disable-next-line:no-any
    validate(argv: any): ArgsRuleResult;
}
