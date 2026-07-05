import { Link } from 'react-router-dom'

const techStack = ['React', 'JavaScript']

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

export default function InteractiveStories() {
  return (
    <div style={{ maxWidth: 680 }}>

      <div style={{ marginBottom: 40 }}>
        <Link to="/projects" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          ← Projects
        </Link>
      </div>

      <div style={{ marginBottom: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <h1 style={{ marginBottom: 0 }}>Interactive Stories</h1>
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
          A deployed branching narrative app and a deliberate sandbox — a decision to pull
          a hard problem out of Miranor and give it its own space to become whatever shape
          it needed to be. Readers make choices that open new routes, close others, and lead
          to completely different outcomes — or circle back to the same conclusion from a
          different direction. The app includes three stories, each built to test a different
          branching philosophy, and a full catalog system with series, categories, tags,
          favorites, and sorting ready for whatever comes next.
        </p>
      </div>

      <div style={sectionStyle}>
        <p style={headingStyle}>How it came together</p>
        <p style={{ ...bodyStyle, marginBottom: 16 }}>
          This project had two jobs. The first was to build the system — a data structure and
          engine that could handle branching narratives for use in games. Single-path stories
          don't interest me. I want the player who goes lawful good and the player who goes
          chaotic neutral to both find something in the story that's theirs. That requires
          real branches, not the illusion of them.
        </p>
        <p style={{ ...bodyStyle, marginBottom: 16 }}>
          The second job was to stretch my storytelling. I know how to rant. I know how to
          be retrospective. Actual narrative — building tension, planting clues, earning an
          ending — that's different and I knew it was going to be a weak point. Rather than
          discover that weakness for the first time inside Miranor, I built a sandbox. An
          enclosed space where branching stories could find their own shape without breaking
          anything else.
        </p>
        <p style={bodyStyle}>
          Once the data structure was working — once A could lead to B, C, or D — the real
          design questions started. Does an early decision cut off something the player
          would have wanted later? Does missing a clue stay missed, or does the story route
          around it? Does every path lead somewhere meaningful, or do some end quickly by
          design?
        </p>
      </div>

      <div style={sectionStyle}>
        <p style={headingStyle}>The hard part</p>
        <p style={{ ...bodyStyle, marginBottom: 16 }}>
          To answer those questions properly I had to build both extremes. The first story
          branches dramatically — multiple win states, multiple lose states, and one true
          victory that requires the player to earn it. Writing it meant holding the full
          decision tree in mind at once and making sure every path felt intentional.
        </p>
        <p style={{ ...bodyStyle, marginBottom: 16 }}>
          The second story is the opposite. I wrote it for my nieces — it converges. Whatever
          decisions you make, the paths circle back toward the same conclusion, each a
          slightly different version of the same ending. No wrong answers. Just different
          ways to arrive.
        </p>
        <p style={bodyStyle}>
          The third sits somewhere in the middle — a testing ground for the kind of
          progression I want in Miranor, threaded around a story I was figuring out as I
          wrote it. The sandbox did its job. The system works. The storytelling muscle got
          used. That's what this was for.
        </p>
        <p style={{ ...bodyStyle, marginTop: 16 }}>
          The app has since grown a full story catalog — series, categories, tags, favorites,
          and sorting. The infrastructure is there and ready. Stories have taken a back seat
          to other projects, but that's the thing about a good system: it waits. There's
          plenty more to fill it with, and I'm looking forward to doing exactly that.
        </p>
      </div>

      <div style={{
        borderTop: '1px solid var(--border)',
        paddingTop: 32,
        display: 'flex',
        gap: 12,
      }}>
        <a
          href="https://interactive-story-app.vercel.app/"
          target="_blank"
          rel="noreferrer"
          style={{
            padding: '10px 20px',
            background: 'var(--accent)',
            color: '#fff',
            borderRadius: 6,
            fontWeight: 500,
            fontSize: '0.9rem',
            border: 'none',
            textDecoration: 'none',
          }}
        >
          Live Site
        </a>
        <a
          href="https://github.com/016spitfire/interactive-story-app"
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
