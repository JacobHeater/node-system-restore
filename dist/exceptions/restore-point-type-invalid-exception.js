'use strict';
/**
 * @file Defines the RestorePointTypeInvalidException class.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.RestorePointTypeInvalidException = void 0;
const exception_js_1 = require('./exception.js');
const restore_point_type_js_1 = require('../common/restore-point-type.js');
function getValidRestorePointTypes() {
  return Object.keys(restore_point_type_js_1.RestorePointType)
    .filter((key) => isNaN(Number(key)))
    .map((key, idx) => `    ${idx + 1} = ${key}`)
    .join('\n');
}
class RestorePointTypeInvalidException extends exception_js_1.Exception {
  /**
   * Initializes a new instance of the RestorePointTypeInvalidException.
   */
  constructor() {
    super(
      `Parameter --restorePointType is invalid. You may only use one of these values:\n\n${getValidRestorePointTypes()}`,
    );
  }
}
exports.RestorePointTypeInvalidException = RestorePointTypeInvalidException;
//# sourceMappingURL=restore-point-type-invalid-exception.js.map
