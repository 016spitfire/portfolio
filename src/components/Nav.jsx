import { NavLink } from 'react-router-dom'

const navStyle = {
  borderBottom: '1px solid var(--border)',
  background: 'var(--bg)',
  position: 'sticky',
  top: 0,
  zIndex: 10,
}

const innerStyle = {
  maxWidth: 800,
  margin: '0 auto',
  padding: '0 24px',
  height: 56,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}

const brandStyle = {
  color: 'var(--text-heading)',
  fontWeight: 600,
  fontSize: '1rem',
  textDecoration: 'none',
}

const linksStyle = {
  display: 'flex',
  gap: 24,
}

const linkStyle = ({ isActive }) => ({
  color: isActive ? 'var(--accent)' : 'var(--text-muted)',
  textDecoration: 'none',
  fontSize: '0.9rem',
  fontWeight: 500,
  transition: 'color 0.15s',
})

export default function Nav() {
  return (
    <nav style={navStyle}>
      <div style={innerStyle}>
        <NavLink to="/" style={brandStyle}>Spencer Kittle</NavLink>
        <div style={linksStyle}>
          <NavLink to="/projects" style={linkStyle}>Projects</NavLink>
          <NavLink to="/blog" style={linkStyle}>Blog</NavLink>
          <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}
