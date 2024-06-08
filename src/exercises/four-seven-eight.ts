import type { Ora } from 'ora';

import { logExerciseName, logStep } from '@/lib/logger';

export async function fourSevenEightBreathing(spinner: Ora) {
  const breathInTime = 4; // seconds
  const holdTime = 7; // seconds
  const breathOutTime = 8; // seconds

  logExerciseName('4-7-8 Breathing');

  spinner.start();

  while (true) {
    await logStep('Breath in', breathInTime, spinner);
    await logStep('Hold', holdTime, spinner);
    await logStep('Breath out', breathOutTime, spinner);
  }
}
