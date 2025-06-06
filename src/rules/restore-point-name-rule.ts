/**
 * @file Defines the RestorePointNameRule class.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */

import { ArgsRule } from '../cli/args-rule';
import { ArgsRuleResult } from '../cli/args-rule-result';
import { StatusCode } from '../common/status-code';
import { RestorePointNameInvalidException } from '../exceptions/restore-point-name-invalid-exception';

export class RestorePointNameRule extends ArgsRule {
    /**
     * Checks to see if the restorePointName parameter
     * is present in the argv collection.
     *
     * @param argv The argv instance to check against.
     */
    public validate(argv: any): ArgsRuleResult { // tslint:disable-line no-any
        let isPresent: boolean = false;
        let isValid: boolean = false;

        if (argv.restorePointName) {
            isPresent = true;
        }

        if (typeof argv.restorePointName === 'string' && argv.restorePointName.length > 0) {
            isValid = true;
        }

        const status: StatusCode = isPresent && isValid ? StatusCode.OK : StatusCode.ArgumentInvalid;

        return new ArgsRuleResult(status, new RestorePointNameInvalidException());
    }
}
