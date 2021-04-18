import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import hashbang from 'rollup-plugin-hashbang'

export default [
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'cjs',
      exports: 'default'
    },
    plugins: [
      typescript({
        exclude: '__tests__/**/*'
      }),
      nodeResolve()
    ]
  },
  {
    input: 'src/cli/index.ts',
    output: {
      file: 'dist/cli.js',
      format: 'cjs',
      // exports: 'default'
    },
    plugins: [
      typescript({
        exclude: '__tests__/**/*'
      }),
      nodeResolve(),
      hashbang(),
      json()
    ]
  }
]

