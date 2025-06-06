import { Command } from 'commander';
import { getRestorePointTypeKeyValuePairs } from '../common/restore-point-type';

const program = new Command();

const helpMessage = `
--restorePointName Can be any given string and is required.
--restorePointType Can be number or a string.

Restore point type options:

${getRestorePointTypeKeyValuePairs()}
`.trim();

program
  .requiredOption('-n --restorePointName <name>', 'The name for your restore point.')
  .requiredOption('-t --restorePointType <type>', 'The restor point type.')
  .helpOption('-h --help', helpMessage);

export const argv = program.parse().opts();
