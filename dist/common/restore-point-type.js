/**
 * @file Defines the RestorePointType enum.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */
export var RestorePointType;
(function (RestorePointType) {
    RestorePointType[RestorePointType["APPLICATION_INSTALL"] = 0] = "APPLICATION_INSTALL";
    RestorePointType[RestorePointType["APPLICATION_UNINSTALL"] = 1] = "APPLICATION_UNINSTALL";
    RestorePointType[RestorePointType["DEVICE_DRIVER_INSTALL"] = 10] = "DEVICE_DRIVER_INSTALL";
    RestorePointType[RestorePointType["MODIFY_SETTINGS"] = 12] = "MODIFY_SETTINGS";
    RestorePointType[RestorePointType["CANCELLED_OPERATION"] = 13] = "CANCELLED_OPERATION";
})(RestorePointType || (RestorePointType = {}));
//# sourceMappingURL=restore-point-type.js.map