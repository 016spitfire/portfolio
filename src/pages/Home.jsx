import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div style={{ marginBottom: 48 }}>
        <h1 style={{ marginBottom: 12 }}>Spencer Kittle</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: 24 }}>
          Frontend Engineer · Systems Designer · Game Maker
        </p>
        <p style={{ maxWidth: 560, lineHeight: 1.75 }}>
          I build configurable systems that let people make things. Eight years of professional
          experience shipping web and mobile applications, with a consistent obsession: designing
          software that adapts to the user rather than the other way around.
        </p>
      </div>

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
          }}
        >
          Read the blog
        </Link>
      </div>
    </div>
  )
}
