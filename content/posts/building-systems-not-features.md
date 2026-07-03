---
title: Building Systems, Not Features
date: 2026-07-02
excerpt: The question I keep coming back to isn't "what does this app do?" It's "what can it become?"
---

How many apps do you find that only do a fixed list of things? A dice roller that only rolls dice. A turn timer that only times turns. They're simple and that's okay, but is it enough?

I strive to build something bigger. Simplicity remains key, any good design should be simple to use, but that doesn't mean it has to be simple to build. I find it more convenient and longer lasting to build tools that allow users to design their own experience.

When I build an app, I try to build systems that serve the user, not define what they do. Rolling Home is a great example. It started off with a problem. My wife and I were prototyping a board game and we were pillaging pieces of other games to make our prototype work. A deck of cards, a set of dice, Rummikub tiles — and we built our own custom deck of cards on top of that. It just got to be so many moving pieces to track around the board that it started to feel like organized chaos. Rolling Home was originally built to be a companion for this game, something to flip coins, draw cards, roll dice, draw tiles. But that didn't sit right with me because it broke my rule. It was a tool for *that* game. That's when it evolved from an app into a system — an app that you can prototype and build any game with, a tool that anyone could use. The user defines the structure, the app provides the engine.

That shift — from solving one problem to building a system that solves a class of problems — is where the interesting engineering lives.

## Why this pattern keeps showing up

I have this instinct in everything I work on — like it doesn't feel complete if it only solves the problem I built it for. Prism started as a storytelling idea that grew into a narrative system. Interactive Stories was built from the ground up to be able to extract an NPC dialogue system and turn it into its own library for other projects. D3 Companion started as a checklist and turned into a configurable recommendation system.

Could this be considered scope creep? Maybe. But I don't feel like it is. I think the initial problem starts poorly. It isn't "What do I need it to do?" but "What shape of problem do I need this to solve?" The shape of the problem is usually bigger than any specific instance.

## The tradeoff

The risk here is that a configurable tool is harder to build and easier to misuse. A screwdriver is a simpler tool than a drill — the drill can accomplish more and you can swap out different pieces to make it do different things, but it is more complex to build. A tool that does one thing perfectly is often more useful than a tool that can do anything but requires the user to think.

The answer, I think, is to find the right level of abstraction. Rolling Home doesn't ask users to write code. It provides the pieces and allows them to build the game they want, the way they want it. It allows users to solve game design questions, not engineering questions. The system translates the answers into a working game.

That's the goal. Not a blank slate. A structured space with room to innovate.

---

Rolling Home is live if you want to see it in practice — [try it here](https://rolling-home.vercel.app). If you want the full story of how it was built, I wrote about it on the [Rolling Home project page](/projects/rolling-home).
