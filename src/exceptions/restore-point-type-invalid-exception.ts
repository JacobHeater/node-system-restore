/**
 * @file Defines the RestorePointTypeInvalidException class.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */

import { Exception } from './exception';

export class RestorePointTypeInvalidException extends Exception {
    /**
     * Initializes a new instance of the RestorePointTypeInvalidException.
     */
    constructor() {
        super(`Parameter --restorePointType is invalid. You may only use one of these values:
        
        1. APPLICATION_INSTALL
        2. APPLICATION_UNINSTALL
        3. DEVICE_DRIVER_INSTALL
        4. MODIFY_SETTINGS
        5. CANCELLED_OPERATION`);
    }
}