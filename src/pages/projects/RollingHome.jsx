import { Link } from 'react-router-dom'

const techStack = ['React', 'JavaScript', 'Tailwind CSS', 'PWA']

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

export default function RollingHome() {
  return (
    <div style={{ maxWidth: 680 }}>

      <div style={{ marginBottom: 40 }}>
        <Link to="/projects" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          ← Projects
        </Link>
      </div>

      <div style={{ marginBottom: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <h1 style={{ marginBottom: 0 }}>Rolling Home</h1>
          <span style={{
            fontSize: '0.72rem',
            fontWeight: 500,
            padding: '2px 8px',
            borderRadius: 4,
            color: '#4ade80',
            background: 'rgba(74, 222, 128, 0.1)',
            border: '1px solid rgba(74, 222, 128, 0.25)',
          }}>
            Live
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
          Rolling Home is a configurable tabletop game platform that lets players build, prototype,
          and play entirely custom games through a shared digital interface. It handles the mechanical
          memory of a game — turns, phases, actions, decks, dice — so players can stay focused on
          actually playing.
        </p>
      </div>

      <div style={sectionStyle}>
        <p style={headingStyle}>How it came together</p>
        <p style={{ ...bodyStyle, marginBottom: 16 }}>
          It started as a collection of themed utilities: dice rolling, card drawing, coin flipping.
          Useful, but disconnected. The gap became obvious mid-playtest — jumping between screens to
          manage what should have been a single flowing game broke the experience every time.
        </p>
        <p style={{ ...bodyStyle, marginBottom: 16 }}>
          The solution wasn't to redesign the features. It was to build a layer on top of them: a
          turn and phase system that remembers the structure of your game and leads you through it
          step by step. Draw two cards, flip a coin, roll for damage — the app knows what comes next
          because you told it what comes next when you built the template.
        </p>
        <p style={bodyStyle}>
          Once that layer existed, new features stopped solving specific problems. They started
          solving categories of problems. A deck builder isn't just for one game — it's for any game
          that needs a custom draw pile. An input action with a text prompt handles anything the app
          can't automate. The system became the product.
        </p>
      </div>

      <div style={sectionStyle}>
        <p style={headingStyle}>The hard part</p>
        <p style={{ ...bodyStyle, marginBottom: 16 }}>
          The most difficult design problem wasn't technical — it was knowing what not to build. A
          tool that does everything is overwhelming. A tool that does too little forces workarounds.
          Rolling Home lives in the space between: enough structure to guide the experience, enough
          flexibility to get out of the way when the player needs to bring something the app can't
          provide.
        </p>
        <p style={bodyStyle}>
          That balance is an ongoing design decision, not a solved one.
        </p>
      </div>

      <div style={{
        borderTop: '1px solid var(--border)',
        paddingTop: 32,
        display: 'flex',
        gap: 12,
      }}>
        <a
          href="https://rolling-home.vercel.app/"
          target="_blank"
          rel="noreferrer"
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
          Live Site
        </a>
        <a
          href="https://github.com/016spitfire/rolling-home"
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
