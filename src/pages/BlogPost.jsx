import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { loadPosts } from '../lib/parseFrontmatter.js'

const posts = loadPosts()

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

const components = Object.fromEntries(
  Object.entries(proseStyles).map(([tag, style]) => [
    tag,
    ({ node, ...props }) => {
      const Tag = tag
      return <Tag style={style} {...props} />
    },
  ])
)

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div>
        <p style={{ color: 'var(--text-muted)' }}>Post not found.</p>
        <Link to="/blog">Back to blog</Link>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: 680 }}>
      <div style={{ marginBottom: 40 }}>
        <Link
          to="/blog"
          style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}
        >
          ← Blog
        </Link>
      </div>

      <div style={{ marginBottom: 32 }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: 8 }}>
          {post.date}
        </p>
        <h1 style={{ marginBottom: 0 }}>{post.title}</h1>
      </div>

      <ReactMarkdown components={components}>{post.content}</ReactMarkdown>
    </div>
  )
}
