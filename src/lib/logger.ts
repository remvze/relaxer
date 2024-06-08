import chalk from 'chalk';
import logSymbols from 'log-symbols';
import type { Ora } from 'ora';

import { sleep } from '@/helpers/sleep';

export function info(message: string) {
  console.log(logSymbols.info, message);
}

export async function logStep(step: string, duration: number, spinner: Ora) {
  for (let i = duration; i > 0; i--) {
    spinner.text = `${chalk.bold.whiteBright(step)} ${chalk.gray(`(${i} seconds left)`)}`;
    await sleep(1000);
  }
}

export function logExerciseName(name: string) {
  info(`${chalk.bold.whiteBright('Selected Exercise')}: ${name}\n`);
}
