import ora from 'ora';
import logSymbols from 'log-symbols';

import { boxBreathing } from '@/exercises/box';
import { fourSevenEightBreathing } from '@/exercises/four-seven-eight';
import { pursedLipBreathing } from '@/exercises/pursed-lip';
import { resonantBreathing } from '@/exercises/resonant';

interface Options {
  type: string;
}

export async function exerciseCommand({ type }: Options) {
  console.log(logSymbols.info, 'Press Ctrl+C to stop the exercise.');

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

  try {
    switch (type.toLowerCase()) {
      case 'box':
        await boxBreathing(spinner);
        break;
      case '4-7-8':
        await fourSevenEightBreathing(spinner);
        break;
      case 'pursed-lip':
        await pursedLipBreathing(spinner);
        break;
      case 'resonant':
        await resonantBreathing(spinner);
        break;
      default:
        spinner.fail(
          'Unknown exercise type. Please choose "box", "4-7-8", "nadi-shodhana", "pursed-lip", "diaphragmatic", or "resonant".',
        );
        process.exit(1);
    }
  } catch (err) {
    if (err instanceof Error) {
      spinner.fail(`An error occurred: ${err.message}`);
    } else {
      spinner.fail('An error occured.');
    }

    process.exit(1);
  }
}
