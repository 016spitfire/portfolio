const sectionLabelStyle = {
  fontSize: '0.75rem',
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  marginBottom: 16,
  marginTop: 48,
}

export default function About() {
  return (
    <div style={{ maxWidth: 680 }}>
      <h1 style={{ marginBottom: 40 }}>About</h1>

      <div style={{ lineHeight: 1.8, color: 'var(--text)' }}>

        <p>
          I've only known Spencer Kittle my entire life and I'm still not sure I can tell you
          exactly who he is. What I can tell you is what he does, and for him those two things
          are pretty much the same.
        </p>

        <p style={sectionLabelStyle}>How it started</p>

        <p style={{ marginBottom: 20 }}>
          He came in as a graphic designer — Illustrator, InDesign, Photoshop — and sat down
          for what he thought was an interview. The boss described the apps he'd be building.
          Somewhere in the middle of it Spencer had to stop him. "I don't know how to do any
          of that." The response: "I believe you'll have a knack for it." The meeting ended
          and Spencer went on his way.
        </p>

        <p style={{ marginBottom: 20 }}>
          His manager Tom was completely in the dark until Spencer showed up Monday morning.
          They got on a call — Tom in Minnesota, Spencer at a desk somewhere in Montana — and
          Tom told him to open the terminal. Spencer paused. "What's a terminal?" He didn't
          need to be on a voice call to hear the sigh. Tom walked him through it anyway, line
          by line, and Spencer started picking up context and building habits. He was nervous
          every day was going to be his last. But every day he got a little smarter, asked
          more intelligent questions, understood the code a little better. By three months he
          was turned loose on a new app — not fully capable, but done being spoon-fed. He's
          never looked back.
        </p>

        <p style={sectionLabelStyle}>How he builds</p>

        <p style={{ marginBottom: 20 }}>
          He builds tools. Not because it's his job — though it is — but because building
          something useful for someone is how he shows he cares. There's a plant care app on
          his wife's phone he built for her. A branching story app with a story inside it
          written for nieces he hasn't seen in two years. A handful of internal tools at work
          that nobody asked him to build, because "that's not my job" has never sat right
          with him.
        </p>

        <p style={{ marginBottom: 20 }}>
          The through-line in everything he builds is the same: make a system flexible enough
          that the user can make it their own. A tabletop game platform where you define the
          game. A Diablo companion where you set your own goals. A narrative engine where the
          same story reads differently depending on who's living it. He doesn't build things
          that do one thing. He builds things that do your thing.
        </p>

        <p style={sectionLabelStyle}>Where he is now</p>

        <p style={{ marginBottom: 20 }}>
          He traded Montana for South Africa to be with his wife Steph, who is largely
          responsible for the fact that he believes he has something worth saying. He works
          remotely, drinks his coffee seriously, and is probably up later than he should be
          working on something he loves.
        </p>

        <p>
          That's who he is. Or at least, it's what he does. For him, the difference is
          pretty small.
        </p>

      </div>
    </div>
  )
}
