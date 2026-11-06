import { readFile, mkdir, writeFile } from 'node:fs/promises'
import { resolve, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

const escapeHtml = (value) =>
  value.replace(
    /[&<>"']/g,
    (char) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })[char],
  )

// Parse the source as data: importing it would execute browser-only asset imports.
export function readProjectMetadata(source, translations) {
  const file = ts.createSourceFile('projects.ts', source, ts.ScriptTarget.Latest, true)
  let entries
  for (const statement of file.statements) {
    if (!ts.isVariableStatement(statement)) continue
    for (const declaration of statement.declarationList.declarations) {
      if (
        declaration.name.getText(file) === 'projects' &&
        declaration.initializer &&
        ts.isArrayLiteralExpression(declaration.initializer)
      )
        entries = declaration.initializer.elements
    }
  }
  if (!entries?.length) throw new Error('Missing projects array')
  const slugs = new Set()
  return entries.map((entry) => {
    if (!ts.isObjectLiteralExpression(entry)) throw new Error('Projects must be object literals')
    const fields = {}
    for (const property of entry.properties) {
      if (ts.isPropertyAssignment(property) && ts.isStringLiteral(property.initializer)) {
        fields[property.name.getText(file).replace(/^['"]|['"]$/g, '')] = property.initializer.text
      }
    }
    const { slug, title, translationKey } = fields
    if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error(`Unsafe slug: ${slug}`)
    if (slugs.has(slug)) throw new Error(`Duplicate slug: ${slug}`)
    slugs.add(slug)
    const description = translations.projects?.items?.[translationKey]?.description
    if (!title?.trim() || typeof description !== 'string' || !description.trim()) {
      throw new Error(`Missing metadata for ${slug}`)
    }
    return { slug, title, description }
  })
}

export async function generateProjectPages(root = process.cwd()) {
  const [source, translations, html] = await Promise.all([
    readFile(join(root, 'src/data/projects.ts'), 'utf8'),
    readFile(join(root, 'src/i18n/en.json'), 'utf8').then(JSON.parse),
    readFile(join(root, 'dist/index.html'), 'utf8'),
  ])
  const projects = readProjectMetadata(source, translations)
  if (!/<title>[^]*?<\/title>/i.test(html) || !html.includes('</head>')) {
    throw new Error('Built HTML is missing its title or head')
  }
  for (const { slug, title, description } of projects) {
    const page = html
      .replace(/<title>[^]*?<\/title>/i, `<title>${escapeHtml(title)} | Erick's Polaroids</title>`)
      .replace(/\s*<meta\s+name=["']description["'][^>]*>/gi, '')
      .replace(
        '</head>',
        `  <meta name="description" content="${escapeHtml(description)}" />\n  </head>`,
      )
    const directory = join(root, 'dist/projects', slug)
    await mkdir(directory, { recursive: true })
    await writeFile(join(directory, 'index.html'), page)
  }
  return projects
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const projects = await generateProjectPages()
  console.log(`Generated ${projects.length} static project entries.`)
}
