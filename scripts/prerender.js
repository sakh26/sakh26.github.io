// Fyller <div id="root"> i dist/index.html med ferdig HTML fra React.
import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const dist = fileURLToPath(new URL('../dist/', import.meta.url))
const ssr = fileURLToPath(new URL('../dist-ssr/', import.meta.url))

const { render } = await import(new URL('../dist-ssr/entry-server.js', import.meta.url))
const template = await readFile(dist + 'index.html', 'utf8')

if (!template.includes('<!--app-html-->')) {
  throw new Error('Fant ikke <!--app-html--> i dist/index.html')
}

await writeFile(dist + 'index.html', template.replace('<!--app-html-->', render()))
await rm(ssr, { recursive: true, force: true })
console.log('Prerendret dist/index.html')
