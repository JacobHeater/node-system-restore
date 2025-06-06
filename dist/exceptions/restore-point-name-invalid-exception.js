'use strict';
/**
 * @file Defines the RestorePointNameInvalidException class.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.RestorePointNameInvalidException = void 0;
const exception_js_1 = require('./exception.js');
class RestorePointNameInvalidException extends exception_js_1.Exception {
  /**
   * Initializes a new instance of the RestorePointNameInvalidException
   * class.
   */
  constructor() {
    super(
      'Parameter --restorePointName is invalid. The paremter value must be a string greater than 0 characters in length.',
    );
  }
}
exports.RestorePointNameInvalidException = RestorePointNameInvalidException;
//# sourceMappingURL=restore-point-name-invalid-exception.js.map
