import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'

const origin = 'https://maimonet.es/'
const html = await readFile('dist/index.html', 'utf8')
assert.match(html, /<html lang="es">/)
assert.match(html, /<title>Maimonet \| Software, automatización e inteligencia artificial<\/title>/)
assert.equal((html.match(/<h1\b/g) || []).length, 1, 'Exactly one H1')
assert.match(html, /<main\b/)
assert.match(html, /Albacete/)
assert.ok(!html.includes('<!--app-html-->'), 'Home must be prerendered')
assert.ok(!/noindex|nofollow/i.test(html), 'Home must remain indexable')
assert.equal((html.match(/rel="canonical"/g) || []).length, 1)
assert.match(html, /rel="canonical" href="https:\/\/maimonet\.es\/"/)
for (const name of ['description', 'viewport', 'theme-color', 'robots', 'twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']) {
  assert.ok(html.includes(`name="${name}"`), `Missing ${name}`)
}
for (const name of ['title', 'description', 'url', 'type', 'site_name', 'locale', 'image']) {
  assert.ok(html.includes(`property="og:${name}"`), `Missing og:${name}`)
}
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1])
assert.equal(ids.length, new Set(ids).size, 'IDs must be unique')
for (const [, id] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(id), `Broken anchor: #${id}`)
for (const [, tag] of html.matchAll(/(<img\b[^>]*>)/g)) {
  for (const attribute of ['alt', 'width', 'height']) assert.ok(tag.includes(`${attribute}="`), `Image missing ${attribute}`)
}
const jsonBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
assert.equal(jsonBlocks.length, 1)
const schema = JSON.parse(jsonBlocks[0][1])
assert.equal(schema['@context'], 'https://schema.org')
const graph = schema['@graph']
const organization = graph.find(node => node['@type'] === 'Organization')
const person = graph.find(node => node['@type'] === 'Person')
const website = graph.find(node => node['@type'] === 'WebSite')
assert.equal(organization['@id'], `${origin}#organization`)
assert.equal(organization.url, origin)
assert.equal(organization.founder['@id'], person['@id'])
assert.equal(website.publisher['@id'], organization['@id'])
assert.equal(person.name, 'Julia Jiménez Ayuso')
assert.equal(organization.contactPoint.email, 'juliajimenezayuso@maimonet.es')
assert.equal(organization.location.name, 'Albacete')
assert.equal(organization.areaServed.name, 'España')
assert.ok(!/"address"|"streetAddress"|"LocalBusiness"/.test(JSON.stringify(schema)))
// Include stable absolute metadata URLs when checking the built local assets.
for (const [, value] of html.matchAll(/(?:src|href|content)="([^"]+)"/g)) {
  if ((value.startsWith('/') && !value.startsWith('//')) || value.startsWith(origin)) {
    const path = new URL(value, origin).pathname
    if (path !== '/') await access(`dist${path}`)
  }
}
await access(`dist${new URL(organization.logo.url).pathname}`)
const robots = await readFile('dist/robots.txt', 'utf8')
assert.match(robots, /User-agent: \*/)
assert.match(robots, /Allow: \//)
assert.match(robots, /Sitemap: https:\/\/maimonet\.es\/sitemap\.xml/)
assert.ok(!/Disallow:\s*\//i.test(robots))
const sitemap = await readFile('dist/sitemap.xml', 'utf8')
assert.match(sitemap, /xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9"/)
assert.deepEqual([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]), [origin])
console.log('SEO: OK — prerendered home, metadata, JSON-LD graph, assets, anchors, sitemap and robots.txt')
