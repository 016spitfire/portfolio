---
title: Building Systems, Not Features
date: 2026-07-02
excerpt: The question I keep coming back to isn't "what does this app do?" It's "what can it become?"
---

Most apps I encounter are built around a fixed list of things they do. A dice roller rolls dice. A card tracker tracks cards. A turn timer times turns.

I keep building something different: tools that let users define what the tool does.

Rolling Home is the clearest example. The original problem was simple — I wanted a digital companion for a tabletop game I was playing. But instead of building a companion for that specific game, I built a platform where the game itself is configurable. Cards, dice, decks, turns, phases — the user defines the structure, and the app provides the engine.

That shift — from solving one problem to building a system that solves a class of problems — is where the interesting engineering lives.

## Why this pattern keeps showing up

I've noticed this instinct in every project I work on. Miranor started as a specific RPG and turned into a system for designing RPGs. Prism started as a story idea and turned into a narrative engine. The D3 Companion started as a checklist and turned into a recommendation system.

I don't think this is scope creep. I think it's a different starting question. Instead of "what does this need to do?" I ask "what shape does this problem have?" And usually the shape is bigger than the specific instance.

## The tradeoff

The risk is obvious: configurable systems are harder to build and easier to misuse. A tool that does one thing perfectly is often more useful than a tool that can do anything but requires the user to think.

The answer, I think, is to find the right level of abstraction. Rolling Home doesn't ask users to write code. It asks them to answer questions: what are the pieces? How do turns work? What counts as winning? Those are game design questions, not engineering questions. The system translates the answers into a working game.

That's the goal. Not a blank slate. A structured space with room to move.
