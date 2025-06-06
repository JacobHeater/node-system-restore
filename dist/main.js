'use strict';
/**
 * @file system-restore entry point.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.run = run;
exports.createRestorePoint = createRestorePoint;
const child_process_1 = require('child_process');
const argv_1 = require('./cli/argv');
const restore_point_type_js_1 = require('./common/restore-point-type.js');
/**
 * This function is to be used by the command line
 * executable.
 */
async function run() {
  const restorePointName = argv_1.argv.restorePointName;
  const restorePointType = argv_1.argv.restorePointType;
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
async function createRestorePoint(restorePointName, restorePointType) {
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
async function callExe(restorePointName, restorePointType) {
  const typeEnumValue = (0, restore_point_type_js_1.getRestorePointTypeValue)(restorePointType);
  if (!typeEnumValue) {
    throw new Error(`Invalid restore point type: ${restorePointType}`);
  }
  await execPromise(
    `powershell.exe -Command "Checkpoint-Computer -Description \\"${restorePointName}\\" -RestorePointType \\"${typeEnumValue}\\""`,
  );
}
function execPromise(command) {
  return new Promise((resolve, reject) => {
    (0, child_process_1.exec)(command, (error, _, stderr) => {
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
//# sourceMappingURL=main.js.map
