import { Link } from 'react-router-dom'
import { loadPosts } from '../lib/parseFrontmatter.js'

const posts = loadPosts()

export default function Blog() {
  return (
    <div>
      <h1 style={{ marginBottom: 8 }}>Blog</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: 40 }}>
        Writing on development, game design, and systems thinking.
      </p>

      {posts.length === 0 ? (
        <p style={{ color: 'var(--text-muted)' }}>No posts yet.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {posts.map((post, i) => (
            <div
              key={post.slug}
              style={{
                padding: '20px 0',
                borderBottom: i < posts.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              <div style={{ marginBottom: 4 }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {post.date}
                </span>
              </div>
              <h2 style={{ fontSize: '1.1rem', marginBottom: 6 }}>
                <Link to={`/blog/${post.slug}`} style={{ color: 'var(--text-heading)' }}>
                  {post.title}
                </Link>
              </h2>
              {post.excerpt && (
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  {post.excerpt}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
