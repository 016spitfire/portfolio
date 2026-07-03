import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import { currentWork } from '../data/current.js'
import { loadPosts } from '../lib/parseFrontmatter.js'

const posts = loadPosts()
const latestPost = posts[0] || null
const featuredProject = projects.find(p => p.featured) || null

const sectionLabelStyle = {
  fontSize: '0.72rem',
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  marginBottom: 16,
}

const dividerStyle = {
  borderTop: '1px solid var(--border)',
  marginBottom: 40,
  marginTop: 40,
}

export default function Home() {
  return (
    <div style={{ maxWidth: 680 }}>

      {/* Hero */}
      <div style={{ marginBottom: 40 }}>
        <h1 style={{ marginBottom: 12 }}>Spencer Kittle</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: 24 }}>
          Frontend Engineer · Systems Designer · Game Maker
        </p>
        <p style={{ lineHeight: 1.8, marginBottom: 32 }}>
          I make tools. Mainly for games, but really for anyone who wants to build their own
          experience without writing a line of code. Explaining what that means takes about three
          minutes and usually involves at least one glazed-over expression — so instead, here's
          the work.
        </p>
        <div style={{ display: 'flex', gap: 12 }}>
          <Link
            to="/projects"
            style={{
              padding: '10px 20px',
              background: 'var(--accent)',
              color: '#fff',
              borderRadius: 6,
              fontWeight: 500,
              fontSize: '0.9rem',
              textDecoration: 'none',
            }}
          >
            See my work
          </Link>
          <Link
            to="/blog"
            style={{
              padding: '10px 20px',
              background: 'var(--bg-card)',
              color: 'var(--text)',
              borderRadius: 6,
              fontWeight: 500,
              fontSize: '0.9rem',
              border: '1px solid var(--border)',
              textDecoration: 'none',
            }}
          >
            Read the blog
          </Link>
        </div>
      </div>

      {/* Currently Building */}
      <div style={dividerStyle} />
      <div style={{ marginBottom: 40 }}>
        <p style={sectionLabelStyle}>Currently building</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {currentWork.map((item, i) => (
            <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', color: 'var(--text)', lineHeight: 1.6 }}>
              <span style={{ color: 'var(--accent)', marginTop: 2, flexShrink: 0 }}>→</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Latest Post */}
      {latestPost && (
        <>
          <div style={dividerStyle} />
          <div style={{ marginBottom: 40 }}>
            <p style={sectionLabelStyle}>Latest post</p>
            <Link to={`/blog/${latestPost.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                padding: '20px 24px',
                transition: 'border-color 0.15s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent-border)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 6 }}>
                  {latestPost.date}
                </p>
                <h2 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: 8 }}>
                  {latestPost.title}
                </h2>
                {latestPost.excerpt && (
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                    {latestPost.excerpt}
                  </p>
                )}
              </div>
            </Link>
          </div>
        </>
      )}

      {/* Featured Project */}
      {featuredProject && (
        <>
          <div style={dividerStyle} />
          <div>
            <p style={sectionLabelStyle}>Featured project</p>
            <Link to={`/projects/${featuredProject.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                padding: '20px 24px',
                transition: 'border-color 0.15s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent-border)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <h2 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-heading)', margin: 0 }}>
                    {featuredProject.name}
                  </h2>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 500,
                    padding: '2px 8px',
                    borderRadius: 4,
                    color: '#4ade80',
                    background: 'rgba(74, 222, 128, 0.1)',
                    border: '1px solid rgba(74, 222, 128, 0.25)',
                  }}>
                    {featuredProject.status}
                  </span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: 12 }}>
                  {featuredProject.description}
                </p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {featuredProject.tech.map(t => (
                    <span key={t} style={{
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 4,
                      padding: '2px 7px',
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        </>
      )}

    </div>
  )
}
