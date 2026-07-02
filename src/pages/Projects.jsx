import { projects } from '../data/projects.js'

const statusColors = {
  'Live':          { color: '#4ade80', bg: 'rgba(74, 222, 128, 0.1)', border: 'rgba(74, 222, 128, 0.25)' },
  'Active':        { color: '#60a5fa', bg: 'rgba(96, 165, 250, 0.1)', border: 'rgba(96, 165, 250, 0.25)' },
  'Active rewrite':{ color: '#60a5fa', bg: 'rgba(96, 165, 250, 0.1)', border: 'rgba(96, 165, 250, 0.25)' },
  'Prototype':     { color: '#c084fc', bg: 'rgba(192, 132, 252, 0.1)', border: 'rgba(192, 132, 252, 0.25)' },
  'Alpha':         { color: '#fb923c', bg: 'rgba(251, 146, 60, 0.1)',  border: 'rgba(251, 146, 60, 0.25)' },
  'Complete':      { color: 'var(--text-muted)', bg: 'var(--bg-card)', border: 'var(--border)' },
}

export default function Projects() {
  return (
    <div>
      <h1 style={{ marginBottom: 8 }}>Projects</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: 40 }}>
        Things I've built and am building.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {projects.map(project => {
          const badge = statusColors[project.status] || statusColors['Complete']
          return (
            <div
              key={project.name}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                padding: '20px 24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noreferrer">{project.name}</a>
                  ) : (
                    project.name
                  )}
                </h2>
                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  padding: '2px 8px',
                  borderRadius: 4,
                  color: badge.color,
                  background: badge.bg,
                  border: `1px solid ${badge.border}`,
                }}>
                  {project.status}
                </span>
              </div>

              <p style={{ color: 'var(--text)', marginBottom: 12, lineHeight: 1.65 }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {project.tech.map(t => (
                  <span key={t} style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 4,
                    padding: '2px 8px',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
