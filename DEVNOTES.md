# Portfolio Devnotes

## Where we left off

We agreed to build a gamification / achievement system into the portfolio site. Spencer is sold on the direction. Ready to design and implement when we return.

## The achievement system — design decisions made

- **No content locks.** Everything on the site is accessible from day one. Achievements reward exploration, not gate it.
- **Visitor is the protagonist.** Framing matters — achievements are about the visitor's journey through the site, not "look how cool Spencer is."
- **Schema-driven.** Achievements defined in a data file, not hardcoded. Treat it like a real game system.
- **Persistent state via localStorage.** The site remembers returning visitors.
- **Tiered achievements.** Bronze / silver / gold for incremental engagement (e.g. visit 1 external site, 3, all of them).
- **Secret achievements.** Some not listed anywhere — reward visitors who poke around, try things, come back.
- **Flavor text.** Each achievement description reveals something about Spencer, not just "you did a thing."
- **Dedicated achievements page.** Visible log of earned vs still-hidden achievements.

## Still to design before building

- Full achievement list (what behaviors matter, what tiers make sense)
- How many live external sites exist to link to (Rolling Home confirmed, Interactive Stories confirmed — any others?)
- What the achievements page looks like (grid of locked/unlocked cards? trophy case?)
- Notification UX — how does an unlock feel in the moment? Toast? Subtle banner?
- Whether there's a visible progress indicator somewhere site-wide (nav badge, footer counter, etc.)

## Current site structure

- React + Vite, deployed at https://spencerkittle.vercel.app
- GitHub: https://github.com/016spitfire/portfolio
- Pages: Home, Projects, Blog (markdown-driven), Contact (Formspree: xnjkoppk)
- Blog posts live in /content/posts/*.md with frontmatter (title, date, excerpt)
- Projects data lives in src/data/projects.js

## Project pages (next build after achievements)

Each project card on the Projects page should link to a dedicated project page with full description + links to live site and GitHub repo. This is separate from the achievement system — independent build.
