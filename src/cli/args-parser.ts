/**
 * @file Defines the ArgsParser class for parsing
 *       and validating CLI arguments.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */

import { argv } from 'yargs';
import { KeyValuePair } from '../common/keyvaluepair';
import { StatusCode } from '../common/status-code';
import { Exception } from '../exceptions/exception';
import { ArgsRuleResult } from './args-rule-result';
import { IArgsParser } from './iargs-parser';
import { IArgsRule } from './iargs-rule';

/**
 * This class is responsible for parsing
 * the arguments given to the command line
 * as part of creating the system restore
 * point.
 */
export class ArgsParser implements IArgsParser {
    /**
     * The rules that tell the ArgsParser how validate
     * the arguments.
     */
    public rules: IArgsRule[];

    /**
     *
     * @param rules Initializes a new instance of the
     *              ArgsParser class with the given rules.
     */
    constructor(rules: IArgsRule[]) {
        this.rules = rules;
    }

    /**
     * Validate that all of the arguments that
     * are expected are present in argv.
     */
    public validateArgv(): StatusCode {
        let status: StatusCode = StatusCode.OK;

        if (this.rules && this.rules.length) {
            for (const rule of this.rules) {
                const result: ArgsRuleResult = rule.validate(argv);

                if (result.statusCode !== StatusCode.OK) {
                    if (result.throwOnFailure) {
                        if (result.error) {
                            throw result.error;
                        } else {
                            throw new Exception('Invalid argument present.');
                        }
                    } else if (result.error) {
                        console.log(`- ${result.error.message}`);
                        console.log('');
                    }
                    
                    status = StatusCode.ArgvInvalid;
                }
            }
        }

        return status;
    }

    /**
     * Returns the parameter name and value.
     * 
     * @param name The name to lookup.
     */
    public getParam(name: string) : KeyValuePair<string, string> {
        
        return new KeyValuePair<string, string>(name, argv[name]);
    }
}
