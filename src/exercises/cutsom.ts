import type { Ora } from 'ora';

import { logExerciseName, logStep } from '@/lib/logger';

interface Durations {
  exhale: number;
  holdExhale: number;
  holdInhale: number;
  inhale: number;
}

export async function customBreathing(spinner: Ora, durations: Durations) {
  logExerciseName('Custom Breathing');

  spinner.start();

  while (true) {
    await logStep('Breath in', durations.inhale, spinner);

    if (durations.holdInhale > 0) {
      await logStep('Hold', durations.holdInhale, spinner);
    }

    await logStep('Breath out', durations.exhale, spinner);

    if (durations.holdExhale > 0) {
      await logStep('Hold', durations.holdExhale, spinner);
    }
  }
}
