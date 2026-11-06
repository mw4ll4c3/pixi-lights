import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'lib/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'lib/index.mjs',
      format: 'esm',
      sourcemap: true,
    }
  ],
  // Keeps pixi.js out of your compiled library bundle
  external: ['pixi.js'],
  plugins: [
    alias(),
    json(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: './lib',
    }),
  ],
};