import { Link } from 'react-router-dom'

const techStack = ['React', 'JavaScript', 'Redux', 'SCSS', 'GSAP']

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

export default function Miranor() {
  return (
    <div style={{ maxWidth: 680 }}>

      <div style={{ marginBottom: 40 }}>
        <Link to="/projects" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          ← Projects
        </Link>
      </div>

      <div style={{ marginBottom: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <h1 style={{ marginBottom: 0 }}>Miranor</h1>
          <span style={{
            fontSize: '0.72rem',
            fontWeight: 500,
            padding: '2px 8px',
            borderRadius: 4,
            color: '#60a5fa',
            background: 'rgba(96, 165, 250, 0.1)',
            border: '1px solid rgba(96, 165, 250, 0.25)',
          }}>
            Active Rewrite
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
        <p style={headingStyle}>What it is</p>
        <p style={{ ...bodyStyle, marginBottom: 16 }}>
          Miranor is a fully digital RPG nine years in the making. It started as a physical
          board and card game, went through several redesigns as the systems became more
          ambitious, and is now being rebuilt as a web application with the depth and
          complexity of a video game RPG — combat, crafting, economy, exploration, quests,
          and character progression, all in one place.
        </p>
        <p style={bodyStyle}>
          The world has its own vocabulary. Magic is called <em>majek</em>. Characters
          carry <em>pith</em> and <em>crux</em> alongside gold. Stats aren't borrowed
          from other games — they were designed for this one. That vocabulary runs through
          every system in the game.
        </p>
      </div>

      <div style={sectionStyle}>
        <p style={headingStyle}>The systems</p>
        <p style={{ ...bodyStyle, marginBottom: 16 }}>
          <strong>Character progression</strong> — Each hero class starts with a different
          stat profile. Strength, majek, constitution, will, accuracy, agility, evasion,
          luck, perception — each interacts with the others in combat and exploration.
          Status effects (frozen, burn, bleed, poison) stack timers and compound. Levelling
          up is a meaningful moment with real choices attached.
        </p>
        <p style={{ ...bodyStyle, marginBottom: 16 }}>
          <strong>The world</strong> — Players move across a continent map, arriving at
          towns with distinct locations rather than a generic shop menu. The alchemist
          handles potions and crafting. The blacksmith handles weapons, armor, and repair.
          The tanner works leather. The tinkerer handles gadgets and tools. The tavern is
          where rumors and quests live. Each location is its own screen with its own
          economy.
        </p>
        <p style={{ ...bodyStyle, marginBottom: 16 }}>
          <strong>Crafting</strong> — Integrated into the world rather than sitting behind
          a separate crafting menu. You craft where it makes sense to craft. Materials are
          looted, bought, and managed across towns. The inventory system carries weight
          limits, storage caps, and a shared town storage for longer runs.
        </p>
        <p style={bodyStyle}>
          <strong>Combat</strong> — Monster encounters drive the progression loop.
          Party dynamics, battle resolution, and the full stat system feed into every fight.
          Difficulty settings adjust the balance for solo or group play.
        </p>
      </div>

      <div style={sectionStyle}>
        <p style={headingStyle}>Current state</p>
        <p style={{ ...bodyStyle, marginBottom: 16 }}>
          The current version is an active rewrite from the previous React Native companion
          app into a full web application. The game layout, hero selection, map, town
          system, combat, equipment, inventory, crafting, and quest tracking are all
          built and functional. The UI uses floating hexagonal widgets for the stat panels,
          GSAP for animations, and a custom typeface — Lithos Pro — throughout.
        </p>
        <p style={bodyStyle}>
          What's still ahead: branching stories, the full skill and stat map system, deeper
          quest chains, and the isometric town map that replaces the current placeholder.
          Miranor has been redesigned several times as the engineering has grown to meet the
          ambition. This version is the one that gets finished.
        </p>
      </div>

    </div>
  )
}
