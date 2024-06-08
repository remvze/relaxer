import chalk from 'chalk';
import logSymbols from 'log-symbols';
import type { Ora } from 'ora';

import { sleep } from '@/helpers/sleep';

export async function logStep(step: string, duration: number, spinner: Ora) {
  for (let i = duration; i > 0; i--) {
    spinner.text = `${chalk.whiteBright(step)} ${chalk.gray(`(${i} seconds left)`)}`;
    await sleep(1000);
  }
}

export function logExerciseName(name: string) {
  console.log(
    `${logSymbols.info} ${chalk.whiteBright('Selected Exercise')}: ${name}\n`,
  );
}
