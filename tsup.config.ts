import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  entry: ['bin/relaxer.ts'],
  format: 'esm',
  outDir: 'dist/bin',
  sourcemap: false,
  splitting: false,
});
