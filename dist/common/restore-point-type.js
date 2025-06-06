"use strict";
/**
 * @file Defines the RestorePointType enum.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestorePointType = void 0;
exports.getRestorePointTypeValue = getRestorePointTypeValue;
exports.getRestorePointTypeKeys = getRestorePointTypeKeys;
exports.getRestorePointTypeKeyValuePairs = getRestorePointTypeKeyValuePairs;
/**
 * Specifies the valid restore point types accepted by PowerShell's Checkpoint-Computer cmdlet.
 */
var RestorePointType;
(function (RestorePointType) {
    /**
     * A restore point created before an application is installed.
     */
    RestorePointType[RestorePointType["APPLICATION_INSTALL"] = 0] = "APPLICATION_INSTALL";
    /**
     * A restore point created before an application is uninstalled.
     */
    RestorePointType[RestorePointType["APPLICATION_UNINSTALL"] = 1] = "APPLICATION_UNINSTALL";
    /**
     * A restore point created before a device driver is installed.
     */
    RestorePointType[RestorePointType["DEVICE_DRIVER_INSTALL"] = 10] = "DEVICE_DRIVER_INSTALL";
    /**
     * A restore point created after a system setting is modified.
     */
    RestorePointType[RestorePointType["MODIFY_SETTINGS"] = 12] = "MODIFY_SETTINGS";
    /**
     * A restore point created after an operation has been canceled.
     */
    RestorePointType[RestorePointType["CANCELLED_OPERATION"] = 13] = "CANCELLED_OPERATION";
})(RestorePointType || (exports.RestorePointType = RestorePointType = {}));
function getRestorePointTypeValue(input) {
    if (typeof input === 'number') {
        return RestorePointType[String(input)];
    }
    else if (typeof input === 'string') {
        if (Object.keys(RestorePointType).includes(input)) {
            if ([0, 1, 10, 12, 13].includes(Number(input))) {
                return getRestorePointTypeValue(Number(input));
            }
            return input;
        }
        return undefined;
    }
    return undefined;
}
function getRestorePointTypeKeys() {
    return Object.keys(RestorePointType).filter((key) => isNaN(Number(key)));
}
function getRestorePointTypeKeyValuePairs() {
    const keys = getRestorePointTypeKeys();
    return keys
        .map((key) => `${key}: ${RestorePointType[key]}`)
        .join('\n');
}
//# sourceMappingURL=restore-point-type.js.map