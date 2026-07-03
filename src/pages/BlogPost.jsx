import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { loadPosts } from '../lib/parseFrontmatter.js'

const posts = loadPosts()

function readingTime(content) {
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / 200)
  return `${minutes} min read`
}

const proseStyles = {
  h1: { color: 'var(--text-heading)', margin: '1.5rem 0 0.75rem', fontSize: '1.75rem' },
  h2: { color: 'var(--text-heading)', margin: '1.5rem 0 0.5rem', fontSize: '1.3rem' },
  h3: { color: 'var(--text-heading)', margin: '1.25rem 0 0.5rem', fontSize: '1.1rem' },
  p:  { marginBottom: '1rem', lineHeight: 1.75 },
  ul: { paddingLeft: '1.5rem', marginBottom: '1rem' },
  ol: { paddingLeft: '1.5rem', marginBottom: '1rem' },
  li: { marginBottom: '0.25rem' },
  code: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 4,
    padding: '2px 6px',
    fontSize: '0.85em',
    fontFamily: 'ui-monospace, Consolas, monospace',
  },
  pre: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 6,
    padding: '16px',
    overflow: 'auto',
    marginBottom: '1rem',
  },
  blockquote: {
    borderLeft: '3px solid var(--accent)',
    paddingLeft: '1rem',
    color: 'var(--text-muted)',
    margin: '1rem 0',
    fontStyle: 'italic',
  },
  hr: { border: 'none', borderTop: '1px solid var(--border)', margin: '2rem 0' },
}

const components = {
  ...Object.fromEntries(
    Object.entries(proseStyles).map(([tag, style]) => [
      tag,
      ({ node, ...props }) => {
        const Tag = tag
        return <Tag style={style} {...props} />
      },
    ])
  ),
  a: ({ node, href, children, ...props }) => {
    const isExternal = href && href.startsWith('http')
    if (isExternal) {
      return <a href={href} target="_blank" rel="noreferrer" {...props}>{children}</a>
    }
    return <Link to={href}>{children}</Link>
  },
}

export default function BlogPost() {
  const { slug } = useParams()
  const index = posts.findIndex(p => p.slug === slug)
  const post = posts[index]

  if (!post) {
    return (
      <div>
        <p style={{ color: 'var(--text-muted)' }}>Post not found.</p>
        <Link to="/blog">Back to blog</Link>
      </div>
    )
  }

  const prev = posts[index + 1] || null
  const next = posts[index - 1] || null

  return (
    <div style={{ maxWidth: 680 }}>
      <div style={{ marginBottom: 40 }}>
        <Link to="/blog" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          ← Blog
        </Link>
      </div>

      <div style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>
            {post.date}
          </p>
          <span style={{ color: 'var(--border)' }}>·</span>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>
            {readingTime(post.content)}
          </p>
        </div>
        <h1 style={{ marginBottom: 0 }}>{post.title}</h1>
      </div>

      <ReactMarkdown components={components}>{post.content}</ReactMarkdown>

      {(prev || next) && (
        <div style={{
          borderTop: '1px solid var(--border)',
          marginTop: 48,
          paddingTop: 32,
          display: 'flex',
          justifyContent: 'space-between',
          gap: 16,
        }}>
          {prev ? (
            <Link to={`/blog/${prev.slug}`} style={{ textDecoration: 'none', flex: 1 }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: 4 }}>
                ← Older
              </div>
              <div style={{ color: 'var(--text-heading)', fontSize: '0.9rem', fontWeight: 500 }}>
                {prev.title}
              </div>
            </Link>
          ) : <div style={{ flex: 1 }} />}

          {next ? (
            <Link to={`/blog/${next.slug}`} style={{ textDecoration: 'none', flex: 1, textAlign: 'right' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: 4 }}>
                Newer →
              </div>
              <div style={{ color: 'var(--text-heading)', fontSize: '0.9rem', fontWeight: 500 }}>
                {next.title}
              </div>
            </Link>
          ) : <div style={{ flex: 1 }} />}
        </div>
      )}
    </div>
  )
}
