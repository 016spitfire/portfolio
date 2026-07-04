export function parseFrontmatter(raw) {
  if (!raw.startsWith('---')) return { data: {}, content: raw }
  const end = raw.indexOf('\n---', 4)
  if (end === -1) return { data: {}, content: raw }
  const yamlStr = raw.slice(4, end)
  const content = raw.slice(end + 4).trim()
  const data = {}
  yamlStr.split('\n').forEach(line => {
    const colon = line.indexOf(':')
    if (colon === -1) return
    const key = line.slice(0, colon).trim()
    const value = line.slice(colon + 1).trim().replace(/^["']|["']$/g, '')
    if (key) data[key] = value
  })
  return { data, content }
}

export function loadPosts() {
  const modules = import.meta.glob('/content/posts/*.md', { query: '?raw', import: 'default', eager: true })
  return Object.entries(modules)
    .map(([path, raw]) => {
      const slug = path.split('/').pop().replace('.md', '')
      const { data, content } = parseFrontmatter(raw)
      return { slug, content, ...data }
    })
    .filter(post => import.meta.env.DEV || new Date(post.publishDate || post.date) <= new Date())
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}
