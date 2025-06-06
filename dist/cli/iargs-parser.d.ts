/**
 * @file Defines the IArgsParser interface.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */
import { KeyValuePair } from '../common/keyvaluepair.js';
import { StatusCode } from '../common/status-code.js';
import { IArgsRule } from './iargs-rule.js';
export interface IArgsParser {
    rules: IArgsRule[];
    validateArgv(): StatusCode;
    getParam(name: string): KeyValuePair<string, string>;
}
