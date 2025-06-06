/**
 * @file Defines the RestorePointNameRule class.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */
import { ArgsRule } from '../cli/args-rule.js';
import { ArgsRuleResult } from '../cli/args-rule-result.js';
import { StatusCode } from '../common/status-code.js';
import { RestorePointNameInvalidException } from '../exceptions/restore-point-name-invalid-exception.js';
export class RestorePointNameRule extends ArgsRule {
    /**
     * Checks to see if the restorePointName parameter
     * is present in the argv collection.
     *
     * @param argv The argv instance to check against.
     */
    validate(argv) {
        let isPresent = false;
        let isValid = false;
        if (argv.restorePointName) {
            isPresent = true;
        }
        if (typeof argv.restorePointName === 'string' && argv.restorePointName.length > 0) {
            isValid = true;
        }
        const status = isPresent && isValid ? StatusCode.OK : StatusCode.ArgumentInvalid;
        return new ArgsRuleResult(status, new RestorePointNameInvalidException());
    }
}
//# sourceMappingURL=restore-point-name-rule.js.map