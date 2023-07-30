// rollup.config.mjs
import { uglify } from "rollup-plugin-uglify";
export default {
  input: 'src/PinoMySQLStream.js',
  output: {
    dir:'dist',
    format: 'cjs'
  },
  plugins: [uglify()]
}
