// Fyller <div id="root"> i hver side i dist med ferdig HTML fra React.
import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const dist = fileURLToPath(new URL('../dist/', import.meta.url))
const ssr = fileURLToPath(new URL('../dist-ssr/', import.meta.url))

const { sider } = await import(new URL('../dist-ssr/entry-server.js', import.meta.url))

for (const [fil, render] of Object.entries(sider)) {
  const template = await readFile(dist + fil, 'utf8')
  if (!template.includes('<!--app-html-->')) {
    throw new Error(`Fant ikke <!--app-html--> i dist/${fil}`)
  }
  await writeFile(dist + fil, template.replace('<!--app-html-->', render()))
  console.log(`Prerendret dist/${fil}`)
}
await rm(ssr, { recursive: true, force: true })
