'use strict';
/**
 * @file Defines the RestorePointTypeRule class.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.RestorePointTypeRule = void 0;
const args_rule_js_1 = require('../cli/args-rule.js');
const args_rule_result_js_1 = require('../cli/args-rule-result.js');
const restore_point_type_js_1 = require('../common/restore-point-type.js');
const status_code_js_1 = require('../common/status-code.js');
const restore_point_type_invalid_exception_js_1 = require('../exceptions/restore-point-type-invalid-exception.js');
class RestorePointTypeRule extends args_rule_js_1.ArgsRule {
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
      const rpType = restore_point_type_js_1.RestorePointType[Number(argv.restorePointType)];
      if (rpType !== undefined) {
        isValid = true;
      }
    } else if (
      typeof argv.restorePointType === 'number' &&
      argv.restorePointType >= 0 &&
      argv.restorePointType <= 14
    ) {
      const rpType = restore_point_type_js_1.RestorePointType[String(argv.restorePointType)];
      if (rpType !== undefined) {
        isValid = true;
      }
    }
    const status =
      isPresent && isValid
        ? status_code_js_1.StatusCode.OK
        : status_code_js_1.StatusCode.ArgumentInvalid;
    return new args_rule_result_js_1.ArgsRuleResult(
      status,
      new restore_point_type_invalid_exception_js_1.RestorePointTypeInvalidException(),
    );
  }
}
exports.RestorePointTypeRule = RestorePointTypeRule;
//# sourceMappingURL=restore-point-type-rule.js.map
