import { Link } from 'react-router-dom'
import PrismDemo from '../../components/PrismDemo.jsx'

const techStack = ['TypeScript']

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

export default function Prism() {
  return (
    <div style={{ maxWidth: 680 }}>

      <div style={{ marginBottom: 40 }}>
        <Link to="/projects" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          ← Projects
        </Link>
      </div>

      <div style={{ marginBottom: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <h1 style={{ marginBottom: 0 }}>Prism</h1>
          <span style={{
            fontSize: '0.72rem',
            fontWeight: 500,
            padding: '2px 8px',
            borderRadius: 4,
            color: '#c084fc',
            background: 'rgba(192, 132, 252, 0.1)',
            border: '1px solid rgba(192, 132, 252, 0.25)',
          }}>
            Prototype
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
          Prism is a TypeScript narrative engine library for multi-perspective storytelling. It
          lets a developer define a story as a series of junctions — moments where two or more
          characters' timelines collide — each described from every character's point of view.
          The same event, experienced differently depending on who is living it.
        </p>
      </div>

      <div style={sectionStyle}>
        <p style={headingStyle}>How it came together</p>
        <p style={{ ...bodyStyle, marginBottom: 16 }}>
          The concept started with a simple observation: perspective shifts change everything.
          You root for a character, then you see the same scene through the enemy's eyes and
          everything you thought you understood shifts. Film and TV do this by design. Games
          do it too, but almost always at scripted moments — a predetermined swap to a
          predetermined character.
        </p>
        <p style={{ ...bodyStyle, marginBottom: 16 }}>
          The question Prism tries to answer is: what if the shift wasn't fully scripted? At
          a transition point the engine builds a weighted pool of candidate characters based
          on two axes — story impact (how much this character has changed your trajectory) and
          bond weight (how much this character matters to you regardless of screen time). High
          scores on both axes earn a duplicate pool entry and a better chance of selection.
          The character you become next isn't random. It's weighted by the story you've
          actually lived.
        </p>
        <p style={bodyStyle}>
          The design implication is meaningful: every NPC you interact with is a potential
          future protagonist. The boy who just killed you is in your transition pool. The
          weight of how you treated him — whether you looked at him, tried to warn him, showed
          mercy or didn't — changes his probability. Every choice echoes forward.
        </p>
      </div>

      <div style={sectionStyle}>
        <p style={headingStyle}>The hard part</p>
        <p style={bodyStyle}>
          The trickiest design problem is the knowledge system. Each character has their own
          understanding of the world — facts they witnessed, things they were told, rumors
          they half-believe. When you inhabit a character, the same junction reads differently
          based on what they know. Roden doesn't know the knight's name. Edric doesn't know
          Roden was given bad intelligence. The narrative has to reflect each character's
          incomplete picture of the world without breaking the story.
        </p>
      </div>

      <div style={sectionStyle}>
        <p style={headingStyle}>Try it</p>
        <p style={{ ...bodyStyle, marginBottom: 24 }}>
          The Mirrenfeld Bridge, east flank. Sir Edric leads a cavalry charge expecting a
          handful of exhausted conscripts. Roden is one of those conscripts, holding the
          line on bad intel. Both perspectives are live below — make a choice as Edric,
          then see the same moment from Roden's side.
        </p>
        <PrismDemo />
      </div>

      <div style={sectionStyle}>
        <p style={headingStyle}>Current status</p>
        <p style={bodyStyle}>
          Prism is a working prototype. The type system, engine, and sample story are
          functional. What it still needs is a companion — a separate authoring tool with a
          GUI that lets story writers build junction data, define characters, and map
          perspective networks without writing TypeScript by hand. Prism is the engine
          developers implement. The authoring tool is what bridges the gap between the story
          writer and the library. They're two distinct products that work together, and the
          authoring tool is the next significant build.
        </p>
      </div>

      <div style={{
        borderTop: '1px solid var(--border)',
        paddingTop: 32,
        display: 'flex',
        gap: 12,
      }}>
        <a
          href="https://github.com/016spitfire/prism"
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
