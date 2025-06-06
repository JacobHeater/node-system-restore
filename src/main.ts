/**
 * @file system-restore entry point.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */

import { execFileSync } from 'child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs-extra';
import { join, resolve } from 'path';
import { ArgsParser } from './cli/args-parser';
import { StatusCode } from './common/status-code';
import { RestorePointNameRule } from './rules/restore-point-name-rule';
import { RestorePointTypeRule } from './rules/restore-point-type-rule';

let entryPoint = '';

/**
 * This function is to be used by the command line
 * executable.
 */
export function run() {
    entryPoint = 'run';

    const parser = new ArgsParser([
        new RestorePointNameRule(),
        new RestorePointTypeRule(),
    ]);

    const status: StatusCode = parser.validateArgv();

    if (status !== StatusCode.OK) {
        process.exit(status as number);
    }

    // Everything is good if we're here.

    const restorePointName: string = parser.getParam('restorePointName').value;
    const restorePointType: string = parser.getParam('restorePointType').value;

    if (createRestorePoint(restorePointName, restorePointType)) {
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
export function createRestorePoint(
    restorePointName: string,
    restorePointType: string
): boolean {
    entryPoint = 'commonjs';

    try {
        callExe(restorePointName, restorePointType);

        return true;
    } catch (ex) {
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
function callExe(restorePointName: string, restorePointType: string): void {
    const workingDir = process.cwd();
    const winRestoratorDirName = 'WinRestorator';
    const winRestoratorExeName = `${winRestoratorDirName}.exe`;
    let exePath = join(
        workingDir,
        winRestoratorDirName,
        winRestoratorExeName,
    );

    if (entryPoint === 'run' && !existsSync(exePath)) {
        mkdirSync(join(workingDir, winRestoratorDirName));

        writeFileSync(exePath, readFileSync(`./exe/${winRestoratorExeName}`));
    } else {
        exePath = resolve(__dirname, '../../', 'exe', winRestoratorExeName);
    }

    try {
        execFileSync(exePath, [
            `--restorePointName=${restorePointName}`,
            `--restorePointType=${restorePointType}`,
        ]);
    } catch (err) {
        console.log('Error running WinRestorator.exe');
        process.exit(1);
    }
}
