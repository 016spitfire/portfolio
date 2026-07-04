import { useState } from 'react'

// --- Junction data (Mirrenfeld Bridge, East Flank) ---

const edricPerspective = {
  id: 'edric-hale',
  character: 'Sir Edric Hale',
  role: 'Knight, Kingdom of Aldren',
  narrative: `The east flank is nothing but boys. You can see it in the way they hold their swords — too tight, too high. Sergeant must have lined them up an hour ago at most. This will be over quickly.

You spur your horse forward, Thomas on your left, Wren somewhere behind. The scouts said they were starving, desperate. You almost feel sorry for them.

The boy in front of you — barely old enough to shave — locks eyes with you. He doesn't run. Something in his stance shifts. Not confidence. Something worse. Resignation.

Your horse closes the distance. Twenty yards. Ten. Five.

He steps sideways — not back, sideways — and your sword catches air where his shoulder should have been. You're past him now, turning, and there's a pressure in your gut that doesn't make sense yet.

You look down.

His sword is in you. Not a soldier's thrust — clumsy, angled wrong, the kind of strike that shouldn't have landed. But the boy stepped into it instead of away, and your momentum did the rest.

The ground is coming up fast.`,
  choices: [
    { id: 'edric-last-thought-marcus', text: 'Think of Marcus. Hope he stays in the rear guard.' },
    { id: 'edric-last-thought-elena', text: "Whisper Elena's name. She'll never know how it ended." },
    { id: 'edric-last-thought-boy', text: 'Look at the boy. Try to tell him something.' },
  ],
  npcReactions: {
    'roden-pulls-sword-out': 'You feel the blade leave. The sky is very blue today.',
    'roden-leaves-sword-in': 'He lets go of the hilt and stumbles backward. Smart. Pulling it out would kill you faster.',
    'roden-kneels': "The boy drops to his knees next to you. Why? You're the enemy.",
  },
}

const rodenPerspective = {
  id: 'roden-fell',
  character: 'Roden Fell',
  role: 'Conscript, Kingdom of Verath',
  narrative: `They told you the knights were tired. A week of marching, they said. These riders don't look tired. They look like death on horseback.

The line beside you is shaking. Josper is muttering something — a prayer, maybe, or just noise to fill the silence before it all goes wrong. Sergeant Breck is somewhere behind you. Of course he is.

One of them is coming straight at you. Older man, good armor, rides like the horse is part of him. Officer, probably. The kind of man who's killed dozens and sleeps fine after.

Your legs want to run. Your hands are cement around the sword grip. You remember what Breck said — hold the line, don't run. As if that means anything when a warhorse is bearing down on you.

But you don't run.

You step left — not a decision, really, more like your body choosing life over your brain's frozen panic — and his blade misses. You're inside his reach now, and your arms do something you didn't tell them to do.

The sword goes in. It doesn't feel like you thought it would. It feels like stabbing a feed sack, resistance and then give. The knight's momentum carries him forward off your blade and onto the ground.

He's looking up at you. He's old enough to be your father.

Your hands are shaking. The battle is still happening around you.`,
  choices: [
    { id: 'roden-pulls-sword-out', text: "Pull the sword out. You might need it. The fight isn't over." },
    { id: 'roden-leaves-sword-in', text: 'Let go of the sword. Back away. Find another weapon.' },
    { id: 'roden-kneels', text: "Drop to your knees beside him. You don't know why." },
  ],
  npcReactions: {
    'edric-last-thought-marcus': "The knight's lips move. A name you can't hear over the noise.",
    'edric-last-thought-elena': 'He whispers something. A woman\'s name, maybe.',
    'edric-last-thought-boy': 'He\'s looking at you. Right at you. His mouth moves — "Run. They\'ll... send more."',
  },
}

const outcomeFlags = {
  'edric-last-thought-marcus': [
    { key: 'edric-last-thought', value: 'marcus' },
    { key: 'marcus-hale bond disposition', value: '+0.1' },
  ],
  'edric-last-thought-elena': [
    { key: 'edric-last-thought', value: 'elena' },
  ],
  'edric-last-thought-boy': [
    { key: 'edric-last-thought', value: 'roden' },
    { key: 'edric-spoke-to-roden', value: 'true' },
    { key: 'roden-fell bond disposition', value: '+0.3' },
  ],
  'roden-pulls-sword-out': [
    { key: 'edric-death-type', value: 'bled-out-fast' },
    { key: 'edric-hale state', value: 'dead → transition fires' },
  ],
  'roden-leaves-sword-in': [
    { key: 'edric-death-type', value: 'slow-with-blade' },
    { key: 'roden-unarmed', value: 'true' },
  ],
  'roden-kneels': [
    { key: 'roden-showed-mercy', value: 'true' },
    { key: 'edric-death-type', value: 'not-alone' },
    { key: 'edric-hale bond disposition', value: '+0.5' },
  ],
}

// --- Styles ---

const demoWrapStyle = {
  background: 'var(--bg-card)',
  border: '1px solid var(--border)',
  borderRadius: 8,
  overflow: 'hidden',
  marginBottom: 48,
}

const demoHeaderStyle = {
  padding: '12px 20px',
  borderBottom: '1px solid var(--border)',
  display: 'flex',
  alignItems: 'center',
  gap: 8,
}

const dotStyle = (color) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  background: color,
})

const demoBodyStyle = {
  padding: '24px 20px',
}

const characterBadgeStyle = (active) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  padding: '6px 12px',
  borderRadius: 4,
  border: `1px solid ${active ? 'rgba(192, 132, 252, 0.4)' : 'var(--border)'}`,
  background: active ? 'rgba(192, 132, 252, 0.08)' : 'transparent',
  marginBottom: 24,
})

const narrativeStyle = {
  lineHeight: 1.9,
  color: 'var(--text)',
  fontSize: '0.95rem',
  marginBottom: 24,
}

const choiceButtonStyle = (selected) => ({
  display: 'block',
  width: '100%',
  padding: '10px 14px',
  marginBottom: 8,
  textAlign: 'left',
  background: selected ? 'rgba(192, 132, 252, 0.12)' : 'transparent',
  border: `1px solid ${selected ? 'rgba(192, 132, 252, 0.5)' : 'var(--border)'}`,
  borderRadius: 6,
  color: selected ? '#c084fc' : 'var(--text)',
  fontSize: '0.9rem',
  cursor: selected ? 'default' : 'pointer',
  transition: 'all 0.15s',
  lineHeight: 1.5,
})

const reactionBlockStyle = {
  padding: '14px 16px',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid var(--border)',
  borderRadius: 6,
  marginBottom: 20,
  lineHeight: 1.8,
  color: 'var(--text-muted)',
  fontSize: '0.9rem',
  fontStyle: 'italic',
}

const labelStyle = {
  fontSize: '0.7rem',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  marginBottom: 8,
}

const continueButtonStyle = {
  padding: '9px 18px',
  background: '#c084fc',
  color: '#fff',
  border: 'none',
  borderRadius: 6,
  fontWeight: 600,
  fontSize: '0.85rem',
  cursor: 'pointer',
  marginTop: 8,
}

const flagRowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  marginBottom: 6,
  fontFamily: 'monospace',
  fontSize: '0.82rem',
}

const flagKeyStyle = {
  color: 'var(--text-muted)',
}

const flagValueStyle = {
  color: '#86efac',
}

const replayButtonStyle = {
  padding: '9px 18px',
  background: 'transparent',
  color: 'var(--text-muted)',
  border: '1px solid var(--border)',
  borderRadius: 6,
  fontWeight: 500,
  fontSize: '0.85rem',
  cursor: 'pointer',
  marginTop: 20,
}

// --- Component ---

export default function PrismDemo() {
  const [phase, setPhase] = useState('edric')
  const [edricChoice, setEdricChoice] = useState(null)
  const [rodenChoice, setRodenChoice] = useState(null)

  function handleEdricChoice(choice) {
    setEdricChoice(choice)
    setPhase('edric-reaction')
  }

  function handleRodenChoice(choice) {
    setRodenChoice(choice)
    setPhase('roden-reaction')
  }

  function reset() {
    setPhase('edric')
    setEdricChoice(null)
    setRodenChoice(null)
  }

  function renderNarrative(text) {
    return text.split('\n\n').map((para, i) => (
      <p key={i} style={{ ...narrativeStyle, marginBottom: i < text.split('\n\n').length - 1 ? 16 : 24 }}>
        {para}
      </p>
    ))
  }

  const isEdricPhase = phase === 'edric' || phase === 'edric-reaction'
  const activeCharacter = isEdricPhase ? edricPerspective : rodenPerspective

  return (
    <div style={demoWrapStyle}>
      <div style={demoHeaderStyle}>
        <div style={dotStyle('#f87171')} />
        <div style={dotStyle('#fbbf24')} />
        <div style={dotStyle('#4ade80')} />
        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginLeft: 8 }}>
          Mirrenfeld Bridge — East Flank
        </span>
      </div>

      <div style={demoBodyStyle}>

        {/* ── Edric's turn ── */}
        {phase === 'edric' && (
          <>
            <div style={characterBadgeStyle(true)}>
              <span style={{ fontSize: '0.75rem', color: '#c084fc', fontWeight: 600 }}>You are</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: 500 }}>
                {edricPerspective.character}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                — {edricPerspective.role}
              </span>
            </div>

            {renderNarrative(edricPerspective.narrative)}

            <div style={labelStyle}>Make a choice</div>
            {edricPerspective.choices.map(c => (
              <button
                key={c.id}
                style={choiceButtonStyle(false)}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(192, 132, 252, 0.4)'
                  e.currentTarget.style.background = 'rgba(192, 132, 252, 0.05)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.background = 'transparent'
                }}
                onClick={() => handleEdricChoice(c)}
              >
                {c.text}
              </button>
            ))}
          </>
        )}

        {/* ── Edric chose — show Roden's reaction ── */}
        {phase === 'edric-reaction' && edricChoice && (
          <>
            <div style={characterBadgeStyle(true)}>
              <span style={{ fontSize: '0.75rem', color: '#c084fc', fontWeight: 600 }}>You are</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: 500 }}>
                {edricPerspective.character}
              </span>
            </div>

            <div style={labelStyle}>Your choice</div>
            <button style={choiceButtonStyle(true)} disabled>
              {edricChoice.text}
            </button>

            <div style={{ height: 20 }} />

            <div style={labelStyle}>Roden sees</div>
            <div style={reactionBlockStyle}>
              {rodenPerspective.npcReactions[edricChoice.id]}
            </div>

            <div style={labelStyle}>Flags set</div>
            <div style={{ marginBottom: 20 }}>
              {(outcomeFlags[edricChoice.id] || []).map(f => (
                <div key={f.key} style={flagRowStyle}>
                  <span style={flagKeyStyle}>{f.key}</span>
                  <span style={{ color: 'var(--text-muted)' }}>→</span>
                  <span style={flagValueStyle}>"{f.value}"</span>
                </div>
              ))}
            </div>

            <button style={continueButtonStyle} onClick={() => setPhase('roden')}>
              Switch to Roden →
            </button>
          </>
        )}

        {/* ── Roden's turn ── */}
        {phase === 'roden' && (
          <>
            <div style={characterBadgeStyle(true)}>
              <span style={{ fontSize: '0.75rem', color: '#c084fc', fontWeight: 600 }}>Now you are</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: 500 }}>
                {rodenPerspective.character}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                — {rodenPerspective.role}
              </span>
            </div>

            {renderNarrative(rodenPerspective.narrative)}

            <div style={labelStyle}>Make a choice</div>
            {rodenPerspective.choices.map(c => (
              <button
                key={c.id}
                style={choiceButtonStyle(false)}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(192, 132, 252, 0.4)'
                  e.currentTarget.style.background = 'rgba(192, 132, 252, 0.05)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.background = 'transparent'
                }}
                onClick={() => handleRodenChoice(c)}
              >
                {c.text}
              </button>
            ))}
          </>
        )}

        {/* ── Roden chose — show Edric's reaction ── */}
        {phase === 'roden-reaction' && rodenChoice && (
          <>
            <div style={characterBadgeStyle(true)}>
              <span style={{ fontSize: '0.75rem', color: '#c084fc', fontWeight: 600 }}>You are</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: 500 }}>
                {rodenPerspective.character}
              </span>
            </div>

            <div style={labelStyle}>Your choice</div>
            <button style={choiceButtonStyle(true)} disabled>
              {rodenChoice.text}
            </button>

            <div style={{ height: 20 }} />

            <div style={labelStyle}>Edric sees</div>
            <div style={reactionBlockStyle}>
              {edricPerspective.npcReactions[rodenChoice.id]}
            </div>

            <div style={labelStyle}>Flags set</div>
            <div style={{ marginBottom: 20 }}>
              {(outcomeFlags[rodenChoice.id] || []).map(f => (
                <div key={f.key} style={flagRowStyle}>
                  <span style={flagKeyStyle}>{f.key}</span>
                  <span style={{ color: 'var(--text-muted)' }}>→</span>
                  <span style={flagValueStyle}>"{f.value}"</span>
                </div>
              ))}
            </div>

            <div style={labelStyle}>Transition pool</div>
            <div style={{
              padding: '12px 14px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid var(--border)',
              borderRadius: 6,
              fontSize: '0.85rem',
              lineHeight: 1.7,
              color: 'var(--text-muted)',
            }}>
              Edric is dying. The engine builds his transition pool. Roden just killed him — maximum story impact. Edric may also carry a fresh bond toward Roden depending on the choice he made.
              {edricChoice?.id === 'edric-last-thought-boy' && (
                <span style={{ color: 'var(--text)' }}>
                  {' '}He looked at the boy and tried to warn him — Roden's bond disposition is +0.3, and he earns two pool entries. The next protagonist is almost certainly the conscript who just killed you.
                </span>
              )}
              {edricChoice?.id !== 'edric-last-thought-boy' && (
                <span>
                  {' '}Roden's story impact is high regardless, but Edric's final thought shaped the weight of the bond. Play again and choose differently.
                </span>
              )}
            </div>

            <button style={replayButtonStyle} onClick={reset}>
              Play again
            </button>
          </>
        )}

      </div>
    </div>
  )
}
