---
title: Build the Sandbox First
date: 2026-07-08
excerpt: Every project has a part you can't see the shape of yet. Don't build it in place — extract it, give it room, let it find its shape somewhere safe.
---

Have you ever run into a problem that you aren't really sure how to tackle? Of course you have, we all have. Sometimes it's technical — a new data structure or an API you've never touched. Sometimes it's something else, something you can't see the shape of just yet, an unknown thing. A skill you know you're weak in. A system you need to function in a certain way, but aren't sure how to get from start to finish. Something you can feel, but you just can't quite see.

I've been stuck in two different headspaces before with problems like this, neither is quite right. Sometimes it's such a massive feature that I just can't see it and it is paralyzing — I don't even know where to start. Sometimes it's exactly the same, but I realize that I can't get anywhere if I don't start and I just dive right in. It's not healthy to stay paralyzed and let it stop you from working, but it isn't always healthy to just start digging at the code and trying to jam in this new thing that you don't know how to do without messing with the rest of your project. If the feature is load-bearing, if it is an integration and not just an addition — if you get it wrong, do you go back in your history and just rip it out? Do you try to patch it and fix it?

The answer is just don't. Don't put it in in the first place. Start a brand new project — a sandbox — and work on this feature all on its own.

Miranor, a role playing game I am building, needs a feature like I'm describing — load bearing and integral to the game. It needs a way to tell stories, branched stories that let users make real choices that impact the story and the world. It's also something that I've never written, but I've been letting my brain percolate on for a long time. I can build a UI for it, manage the state, but what does the data structure look like? How do I build something that can interconnect like a web where when one thread is cut it ripples through the rest — how does it affect other parts of the world? What doors did you close? Or open?

If I'd built that system directly into Miranor and gotten it wrong? That's nine years of work that would take some real untangling to pull out this thing I couldn't quite picture and didn't build correctly. So instead I built the system into a new app, my sandbox — Interactive Stories. Its entire job is to handle branching stories and player decisions. I let that app find its own shape and be what it needed to be, while keeping in mind that I needed to extract a library out of it to reuse in other projects, hopefully many.

I built three stories inside it, each one a different kind of experiment. One branched dramatically — multiple ways to win, multiple ways to lose, one true ending you had to earn. One converged no matter what you chose — written for my nieces, where every path led somewhere good. One sat in the middle, testing the kind of progression I actually wanted. I didn't know going in which of those would feel right for Miranor. I know now.

The sandbox did three things. It proved the data structure worked. It forced me to actually write branching narrative instead of just thinking about it. And it showed me the difference between branches that feel earned and branches that feel like decoration. None of that would have been safe to learn inside the real project.

When you find the unknown thing inside your project — the thing you can feel but can't see yet — don't build it in place. Extract it. Give it room. Let it fail somewhere safe. Figure out its shape before it has to carry weight. Then bring it home.
