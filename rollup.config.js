import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from "rollup-plugin-uglify";
import { terser } from "rollup-plugin-terser";
import { name } from './package.json'

export default {
  input: 'src/index.js',
  output: {
    name, // 包名
    file: 'libs/bundle.js', // 路径
    format: 'umd',
    globals: {
      'postcss': 'postcss'
    }
  },
  external: [ 'postcss' ],
  plugins: [ commonjs(), json(), babel(), uglify(), terser() ]
}