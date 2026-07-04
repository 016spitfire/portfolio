import { Link } from 'react-router-dom'

const techStack = ['Node.js']

const sectionStyle = {
  marginBottom: 48,
}

const headingStyle = {
  fontSize: '0.75rem',
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  marginBottom: 16,
}

const bodyStyle = {
  lineHeight: 1.8,
  color: 'var(--text)',
}

export default function SvgConverter() {
  return (
    <div style={{ maxWidth: 680 }}>

      <div style={{ marginBottom: 40 }}>
        <Link to="/projects" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          ← Projects
        </Link>
      </div>

      <div style={{ marginBottom: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <h1 style={{ marginBottom: 0 }}>SVG to React Converter</h1>
          <span style={{
            fontSize: '0.72rem',
            fontWeight: 500,
            padding: '2px 8px',
            borderRadius: 4,
            color: '#4ade80',
            background: 'rgba(74, 222, 128, 0.1)',
            border: '1px solid rgba(74, 222, 128, 0.25)',
          }}>
            Complete
          </span>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {techStack.map(t => (
            <span key={t} style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 4,
              padding: '2px 8px',
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <div style={sectionStyle}>
        <p style={headingStyle}>What was built</p>
        <p style={bodyStyle}>
          A Node.js CLI script that takes an SVG file and outputs a ready-to-use React
          component. It handles the full conversion — CSS style strings become React style
          objects, kebab-case attributes become camelCase, class becomes className, HTML
          comments become JSX comments, void elements get self-closing tags, and the whole
          thing gets wrapped in a named component with a responsive viewBox prop. Drop in an
          SVG, get back a component.
        </p>
      </div>

      <div style={sectionStyle}>
        <p style={headingStyle}>How it came together</p>
        <p style={{ ...bodyStyle, marginBottom: 16 }}>
          This was built out of necessity on a client project. The job was to integrate a
          single SVG file into a React application — navigation, menus, buttons, every screen
          of the website living inside one file. Each week a new version came in from a
          different design tool: Illustrator one week, Animate the next, then Figma. Each
          tool exported SVG with its own quirks, its own naming conventions, its own
          formatting decisions that React had no interest in accepting.
        </p>
        <p style={{ ...bodyStyle, marginBottom: 16 }}>
          The conversion was manual. Find every style attribute, rewrite it as a React style
          object. Find every kebab-case prop, camelCase it. Find the XML declaration, remove
          it. Find the void elements without self-closing tags, fix them. Four days a week,
          every week — and one day left over to do what I was actually supposed to be doing.
          That is a bad ratio.
        </p>
        <p style={bodyStyle}>
          On the third week I finally wrote the script. It took just over a day to handle
          all the quirks across three different source SVGs, and from that point on
          conversion was a single command. I got the rest of that week back.
        </p>
      </div>

      <div style={sectionStyle}>
        <p style={headingStyle}>The hard part</p>
        <p style={bodyStyle}>
          The code wasn't the hard part. The hard part was spending two full weeks doing
          manual work before recognising that the problem was solvable. I should have
          written the script on week one — egg on my face for that. The bottleneck was
          obvious in retrospect. The lesson is to look earlier. When you spend most of your
          time on something that isn't your actual job, that's not the workload talking —
          that's a tool that needs to exist. The client project got shelved eventually, too
          complex to ship. I didn't complain. I walked away with a tool I'll have for the
          rest of my career.
        </p>
      </div>

      <div style={{
        borderTop: '1px solid var(--border)',
        paddingTop: 32,
        display: 'flex',
        gap: 12,
      }}>
        <a
          href="https://github.com/016spitfire/svg-to-react-converter"
          target="_blank"
          rel="noreferrer"
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
          GitHub
        </a>
      </div>

    </div>
  )
}
