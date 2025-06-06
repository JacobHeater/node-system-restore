/**
 * @file Defines the ArgsParser class for parsing
 *       and validating CLI arguments.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */
import { KeyValuePair } from '../common/keyvaluepair.js';
import { StatusCode } from '../common/status-code.js';
import { IArgsParser } from './iargs-parser.js';
import { IArgsRule } from './iargs-rule.js';
/**
 * This class is responsible for parsing
 * the arguments given to the command line
 * as part of creating the system restore
 * point.
 */
export declare class ArgsParser implements IArgsParser {
    /**
     * The rules that tell the ArgsParser how validate
     * the arguments.
     */
    rules: IArgsRule[];
    /**
     *
     * @param rules Initializes a new instance of the
     *              ArgsParser class with the given rules.
     */
    constructor(rules: IArgsRule[]);
    /**
     * Validate that all of the arguments that
     * are expected are present in argv.
     */
    validateArgv(): StatusCode;
    /**
     * Returns the parameter name and value.
     *
     * @param name The name to lookup.
     */
    getParam(name: string): KeyValuePair<string, string>;
}
