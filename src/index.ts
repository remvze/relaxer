import { Command } from 'commander';

import { exerciseCommand } from './commands/exercise';

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

export { program };
