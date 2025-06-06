/**
 * @file system-restore entry point.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */

import { exec } from 'child_process';
import { argv } from './cli/argv';
import { getRestorePointTypeValue } from './common/restore-point-type.js';
/**
 * This function is to be used by the command line
 * executable.
 */
export async function run() {
  const restorePointName: string = argv.restorePointName;
  const restorePointType: string = argv.restorePointType;

  if (await createRestorePoint(restorePointName, restorePointType)) {
    process.exit(0);
  } else {
    process.exit(1);
  }
}

/**
 * This function is to be used by modules that want
 * to directly import the capabilities to create a
 * restore point outside of the command line.
 *
 * @param restorePointName The name of the restore point to create.
 * @param restorePointType The type of restore point to create.
 */
export async function createRestorePoint(
  restorePointName: string,
  restorePointType: string,
): Promise<boolean> {
  try {
    await callExe(restorePointName, restorePointType);

    return true;
  } catch {
    return false;
  }
}

/**
 * A private function for calling out the executable to create
 * the restore point.
 *
 * @param restorePointName The name of the restore point to create.
 * @param restorePointType The type of restore point to create.
 */
async function callExe(restorePointName: string, restorePointType: string): Promise<void> {
  const typeEnumValue = getRestorePointTypeValue(restorePointType);

  if (!typeEnumValue) {
    throw new Error(`Invalid restore point type: ${restorePointType}`);
  }
  await execPromise(
    `powershell.exe -Command "Checkpoint-Computer -Description \\"${restorePointName}\\" -RestorePointType \\"${typeEnumValue}\\""`,
  );
}

function execPromise(command: string) {
  return new Promise<void>((resolve, reject) => {
    exec(command, (error, _, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return reject(error);
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return reject(stderr);
      }
      resolve();
    });
  });
}
