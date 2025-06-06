/**
 * @file Defines the RestorePointNameInvalidException class.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */

import { Exception } from './exception';

export class RestorePointNameInvalidException extends Exception {

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
