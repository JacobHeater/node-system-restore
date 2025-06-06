'use strict';
/**
 * @file Defines the ArgumentNullException class.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.ArgumentNullException = void 0;
const exception_js_1 = require('./exception.js');
class ArgumentNullException extends exception_js_1.Exception {
  /**
   * Initializes a new instance of the ArgumentNullException
   * class.
   */
  constructor(argumentName) {
    super(`Argument '${argumentName}' cannot be null.`);
  }
}
exports.ArgumentNullException = ArgumentNullException;
//# sourceMappingURL=argument-null-exception.js.map
