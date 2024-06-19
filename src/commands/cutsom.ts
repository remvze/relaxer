import ora from 'ora';
import chalk from 'chalk';

import { customBreathing } from '@/exercises/cutsom';

import { info, error } from '@/lib/logger';

interface Options {
  exhale: string;
  'hold-exhale': string;
  'hold-inhale': string;
  inhale: string;
}

export async function customCommand(options: Options) {
  const inhale = parseInt(options.inhale) || 4;
  const exhale = parseInt(options.exhale) || 4;
  const holdInhale = parseInt(options['hold-inhale']) || 0;
  const holdExhale = parseInt(options['hold-exhale']) || 0;

  info(`Press ${chalk.bold.whiteBright('Ctrl+C')} to stop the exercise.`);

  const spinner = ora({ text: '' });
  const startTime = Date.now();

  process.on('SIGINT', () => {
    const endTime = Date.now();
    const elapsedTime = (endTime - startTime) / 1000;
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = Math.floor(elapsedTime % 60);

    spinner.succeed(
      `Exercise finished. Total time: ${minutes} minutes and ${seconds} seconds.`,
    );

    process.exit();
  });

  if (inhale < 1) return error('Inhale duration should be above 0 seconds');
  if (exhale < 1) return error('Exhale duration should be above 0 seconds');

  try {
    customBreathing(spinner, {
      exhale,
      holdExhale,
      holdInhale,
      inhale,
    });
  } catch (err) {
    if (err instanceof Error) {
      spinner.fail(`An error occurred: ${err.message}`);
    } else {
      spinner.fail('An error occured.');
    }

    process.exit(1);
  }
}
