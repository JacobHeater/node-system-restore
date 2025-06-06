# node-system-restore

Create a restore point on your Windows machine using NodeJS.

## About the Project

This project uses a C# executable (WinRestorator.exe) to create
System Restore points on Windows machines. The inspiration for
this project is to provide a scriptable alternative to PowerShell
for creating restore points on Windows machines.

## Getting Started

If you decide that you are interested in contributing, please
clone the repository and have a look around. Get to know the
code, and how it was implemented. Constructive criticism is
always desired, and meaningful contributions are greatly
appreciated.

## Brief Overview of `npm` Scripts

```json
{
  "clean": "rimraf coverage bin tmp",
  "build": "tsc -p tsconfig.release.json",
  "watch": "tsc -w -p tsconfig.release.json",
  "lint": "tslint -t stylish --project \"tsconfig.json\"",
  "pretest": "npm run lint",
  "test": "npm run test-only",
  "test-only": "jest --coverage",
  "test:watch": "jest --watch",
  "package": "node ./build-scripts/package.js",
  "build-n-package": "npm run build && npm run package"
}
```

1. `clean` - Clear directories that have artifacts.
2. `build` - Compile the TypeScript code.
3. `watch` - Watch `*.tsc` files for changes, and recompile.
4. `lint` - Lint the TypeScript source.
5. `pretest` - Lints the TypeScrpt source.
6. `test` - Runs all unit tests.
7. `test-only` - Runs all unit tests.
8. `test:watch` - Watches all unit tests in spec folder.
9. `package` - Calls `nexe` on the source by utilizing the
   `package.js` file. Generates `SystemResore.exe`.
10. `build-n-package` - Builds and packages the source.

## How to Use `system-restore` as a Module

The `system-restore` module export a single function called
`createRestorePoint`. You can imoprt it using the following
example as a baseline.

```javascript
const { createRestorePoint } = require('system-restore');
```

### `createRestorePoint` Information

```typescript
/**
 * Creates a system restore point.
 *
 * @param restorePointName The name of the restore point.
 * @param restorePointType The type of restore point to create
 */
createRestorePoint(restorePointName: string, restorePointType: string): boolean
```

### Values for Restore Point Type

- APPLICATION_INSTALL
- APPLICATION_UNINSTALL
- DEVICE_DRIVER_INSTALL
- MODIFY_SETTINGS
- CANCELLED_OPERATION

## How to Use SystemRestore.exe

SystemRestore.exe is the EXE that is published when the
`package` script is called. This is achieved using the `nexe`
package, and includes the NodeJS runtime in the EXE.

Overall, the parameters for SystemRestore.exe are the same
as the `system-restore` module. The parameters can be passed
into SystemRestore.exe using the following command line arguments.

`--restorePointName` {String} The name of the restore point.

`--restorePointType` {String} The type of restore point to create.

```shell
SystemRestore.exe --restorePointName="Hello, world!" --restorePointType=APPLICATION_INSTALL
```

### Values for Restore Point Type

- APPLICATION_INSTALL
- APPLICATION_UNINSTALL
- DEVICE_DRIVER_INSTALL
- MODIFY_SETTINGS
- CANCELLED_OPERATION

### Where to Find SystemRestore.exe

You can find the SystemRestore.exe artifact attached to the
tags that correlate to the version numbers when the artifacts
were generated. Go to the repository tags and find the
SystemRestore.exe artifact attached to a tag.

## Possible Caveats

You may need to run your scripts with Administrator privileges
to get your JavaScript implementation to work, and possibly
to use `SystemRestore.exe`. If you get an error using the
JavaScript implementation, it's possible that you need to
run the script using elevated permissions.

## Questions/Comments/Concerns

Please use the issue tracker to ask any questions, or to opine
about something regarding the project.
