import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtemp, mkdir, writeFile, readFile, rm, access } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { generateProjectPages, readProjectMetadata } from './generate-project-pages.mjs'

const source = (slug = 'example') => `import image from '@/unavailable.png';
export const projects: Project[] = [{ slug: '${slug}', title: 'A & B', translationKey: 'example', visibleInArchive: false, image }];`
const translations = {
  projects: { items: { example: { description: 'Private "case study" <details>' } } },
}

test('parses typed project data without executing imports, including hidden projects', () => {
  assert.deepEqual(readProjectMetadata(source(), translations), [
    {
      slug: 'example',
      title: 'A & B',
      description: 'Private "case study" <details>',
    },
  ])
})

test('rejects unsafe and duplicate slugs and missing metadata', () => {
  for (const slug of ['../escape', '', 'bad/slug', 'Uppercase', '__proto__']) {
    assert.throws(() => readProjectMetadata(source(slug), translations), /Unsafe slug/)
  }
  const duplicate = source().replace(
    'visibleInArchive: false, image }',
    "visibleInArchive: false, image }, { slug: 'example', title: 'Duplicate', translationKey: 'example' }",
  )
  assert.throws(() => readProjectMetadata(duplicate, translations), /Duplicate slug/)
  assert.throws(() => readProjectMetadata(source(), {}), /Missing metadata/)
  assert.throws(
    () => readProjectMetadata(source().replace("title: 'A & B'", "title: ''"), translations),
    /Missing metadata/,
  )
  assert.throws(
    () => readProjectMetadata('export const projects = []', translations),
    /Missing projects/,
  )
})

test('writes escaped metadata, preserves bundled root-relative assets and leaves unknown routes absent', async () => {
  const root = await mkdtemp(join(tmpdir(), 'portfolio-pages-'))
  try {
    for (const path of ['src/data', 'src/i18n', 'dist'])
      await mkdir(join(root, path), { recursive: true })
    await writeFile(join(root, 'src/data/projects.ts'), source())
    await writeFile(join(root, 'src/i18n/en.json'), JSON.stringify(translations))
    const html =
      '<html><head><title>Erick\'s Polaroids</title><script src="/assets/app.js"></script><link href="/assets/app.css" rel="stylesheet"></head><body><div id="app"></div></body></html>'
    await writeFile(join(root, 'dist/index.html'), html)
    await generateProjectPages(root)
    const page = await readFile(join(root, 'dist/projects/example/index.html'), 'utf8')
    assert.match(page, /<title>A &amp; B \| Erick's Polaroids<\/title>/)
    assert.match(page, /content="Private &quot;case study&quot; &lt;details&gt;"/)
    assert.match(page, /src="\/assets\/app.js"/)
    assert.match(page, /href="\/assets\/app.css"/)
    assert.equal(await readFile(join(root, 'dist/index.html'), 'utf8'), html)
    await assert.rejects(access(join(root, 'dist/projects/unknown/index.html')))
    await assert.rejects(access(join(root, 'dist/404.html')))
  } finally {
    await rm(root, { recursive: true, force: true })
  }
})

test('every declared portfolio route has metadata in both languages', async () => {
  const source = await readFile(new URL('../src/data/projects.ts', import.meta.url), 'utf8')
  for (const locale of ['en', 'es']) {
    const translations = JSON.parse(
      await readFile(new URL(`../src/i18n/${locale}.json`, import.meta.url), 'utf8'),
    )
    const projects = readProjectMetadata(source, translations)
    assert.equal(projects.length, 11)
    assert.ok(projects.some(({ slug }) => slug === '3d-engine'))
  }
})
