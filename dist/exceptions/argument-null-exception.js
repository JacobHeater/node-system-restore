/**
 * @file Defines the ArgumentNullException class.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */
import { Exception } from './exception.js';
export class ArgumentNullException extends Exception {
    /**
     * Initializes a new instance of the ArgumentNullException
     * class.
     */
    constructor(argumentName) {
        super(`Argument '${argumentName}' cannot be null.`);
    }
}
//# sourceMappingURL=argument-null-exception.js.map