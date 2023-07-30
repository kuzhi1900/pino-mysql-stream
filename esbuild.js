require('esbuild').buildSync({
  entryPoints: ['src/pino-mysql-stream.mjs', 'src/index.mjs'],
  bundle: false,
  platform: 'node',
  external: ['./node_modules/.pnpm/cpu-features@0.0.8/*'],
  minify: false,
  outdir: 'dist'
  // outfile: 'dist/pino-mysql-stream.js'
})
