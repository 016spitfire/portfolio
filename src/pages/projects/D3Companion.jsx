import { Link } from 'react-router-dom'

const techStack = ['React', 'JavaScript', 'PWA']

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

export default function D3Companion() {
  return (
    <div style={{ maxWidth: 680 }}>

      <div style={{ marginBottom: 40 }}>
        <Link to="/projects" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          ← Projects
        </Link>
      </div>

      <div style={{ marginBottom: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <h1 style={{ marginBottom: 0 }}>D3 Companion</h1>
          <span style={{
            fontSize: '0.72rem',
            fontWeight: 500,
            padding: '2px 8px',
            borderRadius: 4,
            color: '#60a5fa',
            background: 'rgba(96, 165, 250, 0.1)',
            border: '1px solid rgba(96, 165, 250, 0.25)',
          }}>
            Active
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
          D3 Companion is a mobile-first season tracking app for Diablo III players. It consolidates
          the information scattered across the game's menus into a single glanceable screen — so you
          can check your next objective on your phone without pausing play.
        </p>
      </div>

      <div style={sectionStyle}>
        <p style={headingStyle}>How it came together</p>
        <p style={{ ...bodyStyle, marginBottom: 16 }}>
          The original problem was personal. Navigating Diablo III's in-game menus during an active
          season meant losing time and momentum — time spent in menus is time not spent killing
          monsters. For years, a personal spreadsheet handled the math. It worked, but pulling up a
          spreadsheet mid-session was its own interruption. D3 Companion replaced both — a
          purpose-built tool that lives on your phone and keeps pace with how you actually play. A
          glance at your phone while the game runs loses nothing.
        </p>
        <p style={{ ...bodyStyle, marginBottom: 16 }}>
          The app tracks four interconnected systems: the Season Journey (a structured list of
          objectives that drive seasonal progression), the Altar of Rites (26 upgradeable nodes with
          varying costs that boost damage and quality of life), Conquests (optional high-difficulty
          challenges), and Paragon leveling (post-max-level experience that continues to increase
          your character's power).
        </p>
        <p style={{ ...bodyStyle, marginBottom: 16 }}>
          Each system has its own planning screen. The Paragon calculator lets you set a target
          level, choose a number of milestones or daily goals, and get back a breakdown of the
          experience needed at each checkpoint. The math is front-loaded by design — each goal
          represents the same amount of experience, but early goals take more effort because your
          character is weaker. As the season progresses, the same daily target becomes progressively
          easier to hit.
        </p>
        <p style={bodyStyle}>
          The most recent addition is the curated journey view. Rather than showing all season
          objectives by chapter, it filters to what's actually actionable right now — hiding tasks
          blocked by incomplete prerequisites and surfacing only what you can meaningfully work
          toward. Your current chapter's tasks are always visible, alongside any others whose
          prerequisites you've already cleared.
        </p>
      </div>

      <div style={sectionStyle}>
        <p style={headingStyle}>The hard part</p>
        <p style={bodyStyle}>
          The curated view required making judgment calls about which tasks to surface and when.
          Some prerequisites are hard blocks — you can't complete a later objective before an
          earlier one. Others are soft — a task might technically be available, but surfacing it
          alongside forty others creates noise rather than clarity. The design question wasn't
          "what's possible?" but "what's useful?" That line required knowing the game well enough
          to make opinionated decisions about what a player actually needs to see.
        </p>
      </div>

      <div style={{
        borderTop: '1px solid var(--border)',
        paddingTop: 32,
        display: 'flex',
        gap: 12,
      }}>
        <a
          href="https://d3-companion-web.vercel.app/"
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
          href="https://github.com/016spitfire/d3-companion-web"
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
