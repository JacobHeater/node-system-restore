# node-system-restore

Create a restore point on your Windows machine using NodeJS.

## About the Project

This project provides a scriptable alternative to PowerShell for creating restore points on Windows machines, implemented in Node.js.

## Getting Started

If you are interested in contributing, please clone the repository and have a look around. Constructive criticism is always desired, and meaningful contributions are greatly appreciated.

## Brief Overview of `npm` Scripts

```json
{
  "clean": "rimraf coverage dist tsconfig.release.tsbuildinfo",
  "build": "tsc -p tsconfig.release.json",
  "watch": "tsc -w -p tsconfig.release.json",
  "lint": "eslint .",
  "format": "prettier . --write",
  "pretest": "npm run lint",
  "test": "npm run test-only",
  "test-only": "jest --coverage",
  "test:watch": "jest --watch"
}
```

1. `clean` - Clear directories that have artifacts.
2. `build` - Compile the TypeScript code.
3. `watch` - Watch `*.ts` files for changes, and recompile.
4. `lint` - Lint the TypeScript source.
5. `format` - Format the codebase using Prettier.
6. `pretest` - Lints the TypeScript source.
7. `test` - Runs all unit tests.
8. `test-only` - Runs all unit tests.
9. `test:watch` - Watches all unit tests.

## How to Use `system-restore` as a Module

The `system-restore` module exports a single function called `createRestorePoint`. You can import it using the following example:

```javascript
const { createRestorePoint } = require('system-restore');
```

### `createRestorePoint` Information

```typescript
/**
 * Creates a system restore point.
 *
 * @param restorePointName The name of the restore point.
 * @param restorePointType The type of restore point to create.
 */
createRestorePoint(restorePointName: string, restorePointType: string): boolean
```

### Values for Restore Point Type

- APPLICATION_INSTALL
- APPLICATION_UNINSTALL
- DEVICE_DRIVER_INSTALL
- MODIFY_SETTINGS
- CANCELLED_OPERATION

## Using the CLI

You can use the CLI directly with `npx`:

```shell
npx system-restore --restorePointName="Hello, world!" --restorePointType=APPLICATION_INSTALL
```

### CLI Arguments

- `--restorePointName` {String} The name of the restore point.
- `--restorePointType` {String} The type of restore point to create.

### Values for Restore Point Type

- APPLICATION_INSTALL
- APPLICATION_UNINSTALL
- DEVICE_DRIVER_INSTALL
- MODIFY_SETTINGS
- CANCELLED_OPERATION

## Possible Caveats

You may need to run your scripts with Administrator privileges to get your JavaScript implementation to work. If you get an error, it's possible that you need to run the script using elevated permissions.

## Questions/Comments/Concerns

Please use the issue tracker to ask any questions, or to opine about something regarding the project.
