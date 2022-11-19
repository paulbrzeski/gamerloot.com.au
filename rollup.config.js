// ES2015 Support
import buble from 'rollup-plugin-buble';

// Import pug templates as view functions
import pug from 'rollup-plugin-pug';

// Import css files (for extraction)
import postcss from 'rollup-plugin-postcss';
import path from 'path';

// Resolve node plugins in scripts so they are bundled too.
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/scripts/main.js',
  output: {
    name: 'main',
  	file: 'docs/main.js',
  	format: 'iife',
    sourcemap: false
  },
  plugins: [
    nodeResolve(),
    postcss({
      extract: path.resolve('docs/main.css'),
      minimize: true,
    }),
    pug(),
    buble({ transforms: { asyncAwait: false } })
  ]
};
