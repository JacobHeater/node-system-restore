import { Command } from 'commander';
import { getRestorePointTypeKeyValuePairs } from '../common/restore-point-type';
import { version, name } from '../../package.json';

const program = new Command(`${name} - ${version}`);

program
  .version(version)
  .requiredOption('-n --restorePointName <name>', 'The name for your restore point.')
  .requiredOption('-t --restorePointType <type>', 'The restor point type.');

const helpMessage = `
--restorePointName Can be any given string and is required.
--restorePointType Can be number or a string.

Restore point type options:

${getRestorePointTypeKeyValuePairs()}
`.trim();

program.helpOption('-h --help', helpMessage)

export const argv = program.parse().opts();
