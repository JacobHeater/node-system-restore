/**
 * @file Defines the RestorePointType enum.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */

/**
 * Specifies the valid restore point types accepted by PowerShell's Checkpoint-Computer cmdlet.
 */
export enum RestorePointType {
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

export function getRestorePointTypeValue(input: string | number): string | undefined {
  if (typeof input === 'number') {
    return RestorePointType[String(input) as any];
  } else if (typeof input === 'string') {
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

export function getRestorePointTypeKeys(): string[] {
  return Object.keys(RestorePointType).filter((key) => isNaN(Number(key)));
}

export function getRestorePointTypeKeyValuePairs(): string {
  const keys = getRestorePointTypeKeys();
  return keys
    .map((key) => `${key}: ${RestorePointType[key as keyof typeof RestorePointType]}`)
    .join('\n');
}
