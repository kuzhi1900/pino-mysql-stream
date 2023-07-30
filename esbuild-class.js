require('esbuild').buildSync({
  // entryPoints: ['src/index.mjs'],
  entryPoints: ['src/PinoMySQLStream.js'],
  bundle: true,
  platform: 'node',
  // format: 'esm',
  external: ['./node_modules/*'],
  minify: true,
  outdir: 'dist'
  // outfile: 'dist/index.js'
})
