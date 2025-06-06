/**
 * @file Defines the Exception class from which all
 *       child classes derive.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */

export class Exception extends Error {
    /**
     * Initializes a new instance of the Exception class
     * with the given message.
     *
     * @param message The message to display for the exception.
     */
    constructor(message: string) {
        super(message);
    }
}
