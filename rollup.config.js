import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
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
}

