/**
 * @file system-restore entry point.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */
/**
 * This function is to be used by the command line
 * executable.
 */
export declare function run(): void;
/**
 * This function is to be used by modules that want
 * to directly import the capabilities to create a
 * restore point outside of the command line.
 *
 * @param restorePointName The name of the restore point to create.
 * @param restorePointType The type of restore point to create.
 */
export declare function createRestorePoint(restorePointName: string, restorePointType: string): boolean;
