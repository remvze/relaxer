import { Command } from 'commander';

import pkg from '../package.json';

const program = new Command();

program
  .name('relaxer')
  .description('Breathing exercises in your terminal')
  .version(pkg.version);

program.command('foo').action(() => console.log('bar'));

export { program };
