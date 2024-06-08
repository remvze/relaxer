import type { Ora } from 'ora';

import { logExerciseName, logStep } from '@/lib/logger';

export async function boxBreathing(spinner: Ora) {
  const breathTime = 4; // seconds

  logExerciseName('Box Breathing');

  spinner.start();

  while (true) {
    await logStep('Breath in', breathTime, spinner);
    await logStep('Hold', breathTime, spinner);
    await logStep('Breath out', breathTime, spinner);
    await logStep('Hold', breathTime, spinner);
  }
}
