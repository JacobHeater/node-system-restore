'use strict';
/**
 * @file Defines the RestorePointNameRule class.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.RestorePointNameRule = void 0;
const args_rule_js_1 = require('../cli/args-rule.js');
const args_rule_result_js_1 = require('../cli/args-rule-result.js');
const status_code_js_1 = require('../common/status-code.js');
const restore_point_name_invalid_exception_js_1 = require('../exceptions/restore-point-name-invalid-exception.js');
class RestorePointNameRule extends args_rule_js_1.ArgsRule {
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
    const status =
      isPresent && isValid
        ? status_code_js_1.StatusCode.OK
        : status_code_js_1.StatusCode.ArgumentInvalid;
    return new args_rule_result_js_1.ArgsRuleResult(
      status,
      new restore_point_name_invalid_exception_js_1.RestorePointNameInvalidException(),
    );
  }
}
exports.RestorePointNameRule = RestorePointNameRule;
//# sourceMappingURL=restore-point-name-rule.js.map
