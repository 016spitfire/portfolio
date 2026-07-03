---
title: "Rolling Home: Where It's Going"
date: 2026-07-03
excerpt: Rolling Home makes a promise — that it can handle the mechanical layer of any tabletop game. Here's an honest look at where that promise still has gaps.
---

Rolling Home is a promise. Build any game, play any game, and not write a line of code. The building blocks are there — dice, cards, coins, tiles, custom decks, turn structures, phases. That is enough for a lot of games, but it doesn't cover all games.

The Rolling Home system is a living, breathing, and growing organism. The nature of this system is that it is ever expanding — not due to scope creep, but because when an app stagnates it falls behind and begins to lose relevancy. I don't believe all products can be considered "finished", and I don't consider Rolling Home finished.

## What's next

**Timers and counters** need a place in this app. A lot of games rely on timed turns or tracking resources — countdowns, health pools, point totals. Currently timers and resources are meant to be tracked out of the app, but that is a player bottleneck and one that needs to be addressed.

**Score tracking** is similar to counters — numbers that count up or down, mechanically the same, but visually represented differently. It's actually an excellent example of abstraction: the same functions and mechanics being used for multiple different things. Build the system to handle more than just the issue it was meant to solve. This is a smaller scale of what the app tries to do as a whole — build a tool that can solve multiple cases at once.

**Turn order tracking** is a great example of organized chaos that can be handled within the app. It could handle assigning turns, skipping turns, and reversing turn order — a feature that offloads mental load and leaves more space for the fun and more intriguing parts of play.

**Game endings** are a tricky gap to close. Some can be traced programmatically — a ticker runs out, a deck runs empty. Those are straightforward. But "Have conditions x, y, or z been met?" is significantly harder to plan for. That's where abstraction comes in. Two solutions, one end goal: the mechanical check the app can handle on its own, and a user-defined condition check that can be placed anywhere in any phase — a prompt that asks the players to determine for themselves whether the win or lose condition has been met. This feels like the sweet spot between controlling the game and facilitating it.

**The card sequence engine** is perhaps the piece I am most excited to build right now. It takes the existing deck builder and streamlines it, making it easy to create a deck of unique, themed cards without specifying every single one. Want a deck of 100 cards numbered 1–20 in five different colors? Right now you need to create a Green 1, a Blue 1, a Red 1, and so on — tedious and unimaginative. The sequence engine lets you define the lists and generate every combination automatically. And it doesn't stop at two lists. A third list of variables? That option is there too. The kind of feature that unlocks a whole category of games that are currently too tedious to build.

These are the features on the horizon for Rolling Home, but like I said at the outset, I don't consider Rolling Home finished and I know there will be plenty more to come.

---

Rolling Home is live right now — [go build a game](https://rolling-home.vercel.app) and see where it stands today. If you have a feature you'd love to see in the app, or something that got in your way, [send me a message](/contact). The roadmap is shaped by real use, and I want to hear about it.
