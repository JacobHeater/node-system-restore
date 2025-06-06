/**
 * @file Defines the RestorePointTypeInvalidException class.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */

import { Exception } from './exception.js';
import { RestorePointType } from '../common/restore-point-type.js';

function getValidRestorePointTypes(): string {
  return Object.keys(RestorePointType)
    .filter((key) => isNaN(Number(key)))
    .map((key, idx) => `    ${idx + 1} = ${key as string}`)
    .join('\n');
}

export class RestorePointTypeInvalidException extends Exception {
  /**
   * Initializes a new instance of the RestorePointTypeInvalidException.
   */
  constructor() {
    super(
      `Parameter --restorePointType is invalid. You may only use one of these values:\n\n${getValidRestorePointTypes()}`,
    );
  }
}
