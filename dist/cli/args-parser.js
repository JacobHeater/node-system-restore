'use strict';
/**
 * @file Defines the ArgsParser class for parsing
 *       and validating CLI arguments.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.ArgsParser = void 0;
const tslib_1 = require('tslib');
const yargs_1 = tslib_1.__importDefault(require('yargs'));
const keyvaluepair_js_1 = require('../common/keyvaluepair.js');
const status_code_js_1 = require('../common/status-code.js');
const exception_js_1 = require('../exceptions/exception.js');
/**
 * This class is responsible for parsing
 * the arguments given to the command line
 * as part of creating the system restore
 * point.
 */
class ArgsParser {
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
    let status = status_code_js_1.StatusCode.OK;
    if (this.rules && this.rules.length) {
      for (const rule of this.rules) {
        const result = rule.validate((0, yargs_1.default)(process.argv).argv);
        if (result.statusCode !== status_code_js_1.StatusCode.OK) {
          if (result.throwOnFailure) {
            if (result.error) {
              throw result.error;
            } else {
              throw new exception_js_1.Exception('Invalid argument present.');
            }
          } else if (result.error) {
            console.log(`- ${result.error.message}`);
            console.log('');
          }
          status = status_code_js_1.StatusCode.ArgvInvalid;
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
    const argv = (0, yargs_1.default)(process.argv).argv;
    return new keyvaluepair_js_1.KeyValuePair(name, argv[name]);
  }
}
exports.ArgsParser = ArgsParser;
//# sourceMappingURL=args-parser.js.map
