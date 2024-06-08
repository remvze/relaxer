import type { Ora } from 'ora';

import { logExerciseName, logStep } from '@/lib/logger';

export async function pursedLipBreathing(spinner: Ora) {
  const breathInTime = 2; // seconds
  const breathOutTime = 4; // seconds

  logExerciseName('Pursed Lip Breathing');

  spinner.start();

  while (true) {
    await logStep('Breath in through your nose', breathInTime, spinner);
    await logStep('Breath out through pursed lips', breathOutTime, spinner);
  }
}
