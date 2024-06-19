import { Command } from 'commander';

import { exerciseCommand } from './commands/exercise';
import { customCommand } from './commands/cutsom';

import pkg from '../package.json';

const program = new Command();

program
  .name('relaxer')
  .description('Breathing exercises in your terminal')
  .version(pkg.version);

program
  .command('exercise')
  .description('Start a breathing exercise')
  .option(
    '-t, --type <type>',
    'Type of the breathing exercise (box, 4-7-8, pursed-lip, resonant)',
    'box',
  )
  .action(exerciseCommand);

program
  .command('custom')
  .description('Start a custom breathing exercise')
  .requiredOption('--inhale <seconds>', 'Custom breath in time in seconds')
  .option(
    '--hold-inhale <seconds>',
    'Custom hold time after inhaling in seconds',
    '0',
  )
  .requiredOption('--exhale <seconds>', 'Custom breath out time in seconds')
  .option(
    '--hold-exhale <seconds>',
    'Custom hold time after exhaling in seconds',
    '0',
  )
  .action(customCommand);

export { program };
