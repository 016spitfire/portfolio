import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

const statusColors = {
  'Live':          { color: '#4ade80', bg: 'rgba(74, 222, 128, 0.1)', border: 'rgba(74, 222, 128, 0.25)' },
  'Active':        { color: '#60a5fa', bg: 'rgba(96, 165, 250, 0.1)', border: 'rgba(96, 165, 250, 0.25)' },
  'Active rewrite':{ color: '#60a5fa', bg: 'rgba(96, 165, 250, 0.1)', border: 'rgba(96, 165, 250, 0.25)' },
  'Prototype':     { color: '#c084fc', bg: 'rgba(192, 132, 252, 0.1)', border: 'rgba(192, 132, 252, 0.25)' },
  'Alpha':         { color: '#fb923c', bg: 'rgba(251, 146, 60, 0.1)',  border: 'rgba(251, 146, 60, 0.25)' },
  'Complete':      { color: 'var(--text-muted)', bg: 'var(--bg-card)', border: 'var(--border)' },
}

function ProjectName({ project }) {
  if (project.slug) {
    return (
      <Link to={`/projects/${project.slug}`} style={{ color: 'var(--text-heading)', textDecoration: 'none' }}>
        {project.name}
      </Link>
    )
  }
  if (project.url) {
    return <a href={project.url} target="_blank" rel="noreferrer" style={{ color: 'var(--text-heading)', textDecoration: 'none' }}>{project.name}</a>
  }
  return project.name
}

function TechTags({ tech }) {
  return (
    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
      {tech.map(t => (
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
  )
}

function StatusBadge({ status }) {
  const badge = statusColors[status] || statusColors['Complete']
  return (
    <span style={{
      fontSize: '0.72rem',
      fontWeight: 500,
      padding: '2px 8px',
      borderRadius: 4,
      color: badge.color,
      background: badge.bg,
      border: `1px solid ${badge.border}`,
      whiteSpace: 'nowrap',
    }}>
      {status}
    </span>
  )
}

function ProjectCard({ project, index, view }) {
  const [hovered, setHovered] = useState(false)
  const tiltDir = index % 2 === 0 ? 1 : -1

  const cardStyle = {
    background: 'var(--bg-card)',
    border: `1px solid ${hovered ? 'var(--accent-border)' : 'var(--border)'}`,
    borderRadius: 8,
    padding: view === 'grid' ? '20px' : '20px 24px',
    cursor: project.slug ? 'pointer' : 'default',
    transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
    transform: hovered ? `rotate(${tiltDir * 0.6}deg) translateY(-2px)` : 'rotate(0deg) translateY(0)',
    boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.3)' : 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: view === 'grid' ? 12 : 0,
  }

  const content = (
    <div
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: view === 'list' ? 8 : 0 }}>
        <h2 style={{ fontSize: '1.05rem', fontWeight: 600, margin: 0, flex: 1 }}>
          <ProjectName project={project} />
        </h2>
        <StatusBadge status={project.status} />
      </div>

      <p style={{ color: 'var(--text)', lineHeight: 1.65, fontSize: '0.9rem', margin: view === 'list' ? '0 0 12px' : 0, flex: 1 }}>
        {project.description}
      </p>

      <TechTags tech={project.tech} />
    </div>
  )

  if (project.slug) {
    return (
      <Link to={`/projects/${project.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
        {content}
      </Link>
    )
  }
  return content
}

function ToggleButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '6px 14px',
        background: active ? 'var(--accent-dim)' : 'transparent',
        color: active ? 'var(--accent)' : 'var(--text-muted)',
        border: `1px solid ${active ? 'var(--accent-border)' : 'var(--border)'}`,
        borderRadius: 6,
        fontSize: '0.8rem',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'all 0.15s',
      }}
    >
      {children}
    </button>
  )
}

export default function Projects() {
  const [view, setView] = useState('grid')

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40 }}>
        <div>
          <h1 style={{ marginBottom: 8 }}>Projects</h1>
          <p style={{ color: 'var(--text-muted)', margin: 0 }}>Things I've built and am building.</p>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <ToggleButton active={view === 'grid'} onClick={() => setView('grid')}>Grid</ToggleButton>
          <ToggleButton active={view === 'list'} onClick={() => setView('list')}>List</ToggleButton>
        </div>
      </div>

      <div style={
        view === 'grid'
          ? { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }
          : { display: 'flex', flexDirection: 'column', gap: 12 }
      }>
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} view={view} />
        ))}
      </div>
    </div>
  )
}
