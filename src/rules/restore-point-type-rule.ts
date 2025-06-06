/**
 * @file Defines the RestorePointTypeRule class.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */

import { ArgsRule } from '../cli/args-rule';
import { ArgsRuleResult } from '../cli/args-rule-result';
import { RestorePointType } from '../common/restore-point-type';
import { StatusCode } from '../common/status-code';
import { RestorePointTypeInvalidException } from '../exceptions/restore-point-type-invalid-exception';

export class RestorePointTypeRule extends ArgsRule {
    /**
     * Validates that the --restorePointType parameter is present
     * and has a valid value.
     */
    public validate(argv: any): ArgsRuleResult { // tslint:disable-line no-any
        let isPresent: boolean = false;
        let isValid: boolean = false;

        if (argv.restorePointType) {
            isPresent = true;
        }

        if (typeof argv.restorePointType === 'string' && argv.restorePointType.length > 0) {

            const rpType = RestorePointType[argv.restorePointType];

            if (rpType !== undefined) {
                isValid = true;
            }
        }

        const status = isPresent && isValid ? StatusCode.OK : StatusCode.ArgumentInvalid;

        return new ArgsRuleResult(status, new RestorePointTypeInvalidException())
    }
}