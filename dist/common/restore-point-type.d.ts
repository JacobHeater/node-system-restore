/**
 * @file Defines the RestorePointType enum.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */
/**
 * Specifies the valid restore point types accepted by PowerShell's Checkpoint-Computer cmdlet.
 */
export declare enum RestorePointType {
  /**
   * A restore point created before an application is installed.
   */
  APPLICATION_INSTALL = 0,
  /**
   * A restore point created before an application is uninstalled.
   */
  APPLICATION_UNINSTALL = 1,
  /**
   * A restore point created before a device driver is installed.
   */
  DEVICE_DRIVER_INSTALL = 10,
  /**
   * A restore point created after a system setting is modified.
   */
  MODIFY_SETTINGS = 12,
  /**
   * A restore point created after an operation has been canceled.
   */
  CANCELLED_OPERATION = 13,
}
export declare function getRestorePointTypeValue(input: string | number): string | undefined;
export declare function getRestorePointTypeKeys(): string[];
export declare function getRestorePointTypeKeyValuePairs(): string;
