/**
 * @file system-restore entry point.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */

import { spawn } from 'child_process';
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
    return await callExe(restorePointName, restorePointType);
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
async function callExe(restorePointName: string, restorePointType: string): Promise<boolean> {
  const typeEnumValue = getRestorePointTypeValue(restorePointType);

  if (typeEnumValue === undefined) {
    throw new Error(`Invalid restore point type: ${restorePointType}`);
  }

  try {
    await spawnPromise('powershell.exe', [
      '-Command',
      `Checkpoint-Computer -Description "${restorePointName}" -RestorePointType ${typeEnumValue}`,
    ]);
    return true;
  } catch (error) {
    console.error((error as Error).message);
    return false;
  }
}

function spawnPromise(command: string, args: string[]): Promise<void> {
  return new Promise((resolve, reject) => {
    let stderrBuffer = '';
    let stdoutBuffer = '';

    const child = spawn(command, args, {
      shell: true,
    });

    child.stdout.on('data', (data) => {
      const text = data.toString();
      stdoutBuffer += text;
      process.stdout.write(text);
    });

    child.stderr.on('data', (data) => {
      const text = data.toString();
      stderrBuffer += text;
      process.stderr.write(text);
    });

    child.on('error', reject);

    child.on('close', (code) => {
      const output = stdoutBuffer + stderrBuffer;
      const warningPattern =
        /A new system restore point cannot be created because one has already been created/i;

      if (warningPattern.test(output)) {
        return reject(new Error('Restore point creation rejected: 24-hour limit reached.'));
      }

      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Process exited with code ${code}`));
      }
    });
  });
}
