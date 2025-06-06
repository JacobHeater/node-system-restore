/**
 * @file Defines the IArgsParser interface.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */

import { KeyValuePair } from '../common/keyvaluepair';
import { StatusCode } from '../common/status-code';
import { IArgsRule } from './iargs-rule';

export interface IArgsParser {
    rules: IArgsRule[];
    validateArgv(): StatusCode;
    getParam(name: string): KeyValuePair<string, string>
}
