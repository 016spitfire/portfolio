import { Link } from 'react-router-dom'

const techStack = ['React Native', 'JavaScript', 'Firebase']

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

export default function GaiaPlantCare() {
  return (
    <div style={{ maxWidth: 680 }}>

      <div style={{ marginBottom: 40 }}>
        <Link to="/projects" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          ← Projects
        </Link>
      </div>

      <div style={{ marginBottom: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <h1 style={{ marginBottom: 0 }}>Gaia Plant Care</h1>
          <span style={{
            fontSize: '0.72rem',
            fontWeight: 500,
            padding: '2px 8px',
            borderRadius: 4,
            color: '#fbbf24',
            background: 'rgba(251, 191, 36, 0.1)',
            border: '1px solid rgba(251, 191, 36, 0.25)',
          }}>
            Alpha
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
          A plant care companion app that tracks your plants, reminds you when to water them,
          and lets you define exactly what information matters to you. Add a plant with a name,
          species, watering frequency, notes, and a photo. The app saves everything locally,
          surfaces which plants need watering today, and sends reminders on your schedule.
          When the built-in fields aren't enough, you can create your own — custom fields
          that get added to every plant in your collection.
        </p>
      </div>

      <div style={sectionStyle}>
        <p style={headingStyle}>How it came together</p>
        <p style={{ ...bodyStyle, marginBottom: 16 }}>
          My wife Steph was at her potting table one afternoon, leaving a few plants in a
          watering tub to bottom water — a technique I'd never encountered before. I was at
          my desk thinking through ideas for new apps when she looked over and asked what I
          was working on. I told her I was thinking about projects I could build to stretch
          my experience a bit. We talked for a few minutes, then both got back to our own
          things.
        </p>
        <p style={{ ...bodyStyle, marginBottom: 16 }}>
          A few minutes later she asked me if I could remember when she'd last watered a
          handful of her plants. I had no idea. It wasn't the first time she'd asked. It
          wasn't the first time I'd been completely useless. But this time I had an answer
          I could actually do something about — I could build her a tool that wasn't.
          That was the moment Gaia was born.
        </p>
        <p style={bodyStyle}>
          The challenge was immediate: I know nothing about plants. Not a thing. I could
          ask Steph what fields the app should track, but wouldn't that just reflect her
          preferences? Every plant person is different. So rather than guess at what
          information people need, I built the app to be open — a small set of sensible
          defaults and the ability to define the rest yourself.
        </p>
      </div>

      <div style={sectionStyle}>
        <p style={headingStyle}>The hard part</p>
        <p style={bodyStyle}>
          The custom fields solution is the most honest answer I could find to a problem I
          couldn't fully see the shape of. I genuinely didn't know what plant people want to
          track. Custom fields let the user decide — create a field, name it, and it gets
          added to every plant in your collection. It works, and it's flexible enough to
          stretch well beyond plant care entirely.
        </p>
        <p style={{ ...bodyStyle, marginTop: 16 }}>
          The tradeoff is that the app is only as useful as the effort the user puts into it.
          That's not a design principle I love — an app shouldn't require work before it
          becomes useful. It's something I want to revisit. The bones are solid. The
          problem is that I still don't know enough about plants to know what the right
          defaults look like, and that's a gap worth closing before the next pass.
        </p>
      </div>

      <div style={{
        borderTop: '1px solid var(--border)',
        paddingTop: 32,
        display: 'flex',
        gap: 12,
      }}>
        <a
          href="https://gaia-plant-care-system.vercel.app/"
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
          href="https://github.com/016spitfire/gaia-plant-care-system"
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
