import { build } from 'vite'
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

// Render the same React tree once at build time. Vercel only serves dist/.
const temporaryDirectory = await mkdtemp(resolve('node_modules/.maimonet-prerender-'))
try {
  await build()
  await build({
    publicDir: false,
    build: {
      ssr: 'src/entry-server.jsx',
      outDir: temporaryDirectory,
      emptyOutDir: true,
      rolldownOptions: { output: { entryFileNames: 'entry-server.mjs' } },
    },
  })
  const { render } = await import(pathToFileURL(resolve(temporaryDirectory, 'entry-server.mjs')).href)
  const template = await readFile('dist/index.html', 'utf8')
  if (!template.includes('<!--app-html-->')) throw new Error('Missing prerender placeholder')
  const html = template.replace('<!--app-html-->', () => render())
  await writeFile('dist/index.html', html)
  console.log('Home prerendered: dist/index.html')
} finally {
  await rm(temporaryDirectory, { recursive: true, force: true })
}
