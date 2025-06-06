/**
 * @file Defines the RestorePointTypeRule class.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */
import { ArgsRule } from '../cli/args-rule.js';
import { ArgsRuleResult } from '../cli/args-rule-result.js';
import { RestorePointType } from '../common/restore-point-type.js';
import { StatusCode } from '../common/status-code.js';
import { RestorePointTypeInvalidException } from '../exceptions/restore-point-type-invalid-exception.js';
export class RestorePointTypeRule extends ArgsRule {
    /**
     * Validates that the --restorePointType parameter is present
     * and has a valid value.
     */
    validate(argv) {
        let isPresent = false;
        let isValid = false;
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
        return new ArgsRuleResult(status, new RestorePointTypeInvalidException());
    }
}
//# sourceMappingURL=restore-point-type-rule.js.map