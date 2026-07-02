import { useState } from 'react'

const ENDPOINT = 'https://formspree.io/f/xnjkoppk'

const inputStyle = {
  width: '100%',
  background: 'var(--bg-card)',
  border: '1px solid var(--border)',
  borderRadius: 6,
  padding: '10px 14px',
  color: 'var(--text-heading)',
  fontSize: '0.95rem',
  outline: 'none',
}

const labelStyle = {
  display: 'block',
  fontSize: '0.85rem',
  color: 'var(--text-muted)',
  marginBottom: 6,
}

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.target)
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div style={{ maxWidth: 560 }}>
      <h1 style={{ marginBottom: 8 }}>Contact</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: 40 }}>
        Got a project, a question, or just want to say hi — send me a message.
      </p>

      {status === 'success' ? (
        <div style={{
          background: 'rgba(74, 222, 128, 0.08)',
          border: '1px solid rgba(74, 222, 128, 0.25)',
          borderRadius: 8,
          padding: '20px 24px',
          color: '#4ade80',
        }}>
          Message sent. I'll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <label style={labelStyle} htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle} htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle} htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>

          {status === 'error' && (
            <p style={{ color: '#f87171', fontSize: '0.9rem' }}>
              Something went wrong. Try again or email me directly at spencer.kittle@gmail.com.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            style={{
              padding: '10px 24px',
              background: status === 'sending' ? 'var(--bg-card)' : 'var(--accent)',
              color: status === 'sending' ? 'var(--text-muted)' : '#fff',
              border: '1px solid var(--border)',
              borderRadius: 6,
              fontWeight: 500,
              fontSize: '0.95rem',
              cursor: status === 'sending' ? 'not-allowed' : 'pointer',
              alignSelf: 'flex-start',
              transition: 'background 0.15s',
            }}
          >
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>
        </form>
      )}
    </div>
  )
}
