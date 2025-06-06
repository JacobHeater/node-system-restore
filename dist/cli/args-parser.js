/**
 * @file Defines the ArgsParser class for parsing
 *       and validating CLI arguments.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */
import yargs from 'yargs';
import { KeyValuePair } from '../common/keyvaluepair.js';
import { StatusCode } from '../common/status-code.js';
import { Exception } from '../exceptions/exception.js';
/**
 * This class is responsible for parsing
 * the arguments given to the command line
 * as part of creating the system restore
 * point.
 */
export class ArgsParser {
    /**
     * The rules that tell the ArgsParser how validate
     * the arguments.
     */
    rules;
    /**
     *
     * @param rules Initializes a new instance of the
     *              ArgsParser class with the given rules.
     */
    constructor(rules) {
        this.rules = rules;
    }
    /**
     * Validate that all of the arguments that
     * are expected are present in argv.
     */
    validateArgv() {
        let status = StatusCode.OK;
        if (this.rules && this.rules.length) {
            for (const rule of this.rules) {
                const result = rule.validate(yargs().argv);
                if (result.statusCode !== StatusCode.OK) {
                    if (result.throwOnFailure) {
                        if (result.error) {
                            throw result.error;
                        }
                        else {
                            throw new Exception('Invalid argument present.');
                        }
                    }
                    else if (result.error) {
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
    getParam(name) {
        const argv = yargs().argv;
        return new KeyValuePair(name, argv[name]);
    }
}
//# sourceMappingURL=args-parser.js.map