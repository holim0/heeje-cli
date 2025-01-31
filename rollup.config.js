import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'src/index.ts',
  output: {
    file: 'bin/cli.js',
    format: 'cjs',
    banner: '#!/usr/bin/env node',
  },
  plugins: [
    nodeResolve({ preferBuiltins: true }),
    commonjs(),
    json(),
    typescript(),
    terser(),
  ],
}
