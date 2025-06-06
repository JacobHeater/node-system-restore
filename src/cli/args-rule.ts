/**
 * @file Defines the ArgsRule class for the
 *       ArgsParser class to use.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */

import { ArgsRuleResult } from './args-rule-result';
import { IArgsRule } from './iargs-rule';

export abstract class ArgsRule implements IArgsRule {
    // tslint:disable-next-line:no-any
    public abstract validate(argv: any): ArgsRuleResult;
}
