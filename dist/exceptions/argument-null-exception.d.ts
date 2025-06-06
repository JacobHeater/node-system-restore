/**
 * @file Defines the ArgumentNullException class.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */
import { Exception } from './exception.js';
export declare class ArgumentNullException extends Exception {
    /**
     * Initializes a new instance of the ArgumentNullException
     * class.
     */
    constructor(argumentName: string);
}
