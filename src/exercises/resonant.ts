import type { Ora } from 'ora';

import { logExerciseName, logStep } from '@/lib/logger';

export async function resonantBreathing(spinner: Ora) {
  const breathInTime = 5; // seconds
  const breathOutTime = 5; // seconds

  logExerciseName('Resonant Breathing');

  spinner.start();

  while (true) {
    await logStep('Breath in', breathInTime, spinner);
    await logStep('Breath out', breathOutTime, spinner);
  }
}
