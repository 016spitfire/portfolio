---
title: Build the Tool
date: 2026-07-06
excerpt: When you spend 80% of your time on something that isn't your job, that's a sign. If it's repeatable, it's automatable.
---

I was assigned a task to integrate an SVG file into a React application. Not a typical animated SVG that does a single job or animation — this SVG was the entire website. Navigation, menus, buttons, every screen, every interaction all in one gigantic SVG file. My job was to write the shell application that would poke and prod at this SVG to get it to behave when and how it was supposed to behave. It was a... complicated... brief. My job wasn't to say it couldn't be done, it was to figure out how to make it work.

I worked on this project for about three and a half weeks before the client shelved it and moved on to the next thing. Each week I was given a new SVG to work with from the graphic designer, and each week it came from a different program — the first week it was an Adobe Animate export, then Illustrator, then Figma. Each program had its own SVG quirks and its own conventions, and each one React would just refuse to work with. Style attributes as CSS strings instead of objects. Kebab-case property names. XML declarations at the top. Void elements that weren't self-closing. Every week the same problems in a slightly different arrangement.

The first two weeks I converted the files by hand. Each one took about four days to convert, and in the back of my head I knew there was going to be another one — there had to be a final SVG to work with, something even bigger to tackle. Each of those two weeks I only spent one day doing my actual job integrating the SVG into the React shell.

Now, I admit this is something I should have caught sooner and that's on me. When you spend 80% of your work time on something that isn't your job, that's a sign it's time to build a tool to get yourself back on track. I knew how to build it, I just hadn't convinced myself that it was necessary. I put my head down and did the manual work instead — that was the trap I fell into. I was addressing a symptom, not curing the disease.

The third week, when I was handed a new test SVG from yet another program, that's when I realized it was time to build the script. It took just over a day to write it and catch all the edge cases across all three SVG files. I reclaimed the rest of my week.

I recognized the need for the tool too late. I hope not to make that mistake again. Don't fall into the habit of being the drone. Drones do the task in front of them exactly as they are expected to do it. That isn't doing your job. Doing your job is innovating, making tasks easier for yourself and others. Turn that bottleneck into a new workflow.

The client project got shelved — too complex for the design team to ship. Can't say I lost any sleep over it. I walked away with a new tool and, perhaps more importantly, a new mindset on how to recognize and work through tedious and repetitive tasks. Cut out the repetitive behavior completely. If it is repeatable, it is automatable.

When you find yourself doing the same task over and over, stop and recognize there is a better way to do it. Better yet, learn from my mistake — when you recognize a task will be repetitive, don't even fall into the trap to begin with. Automate it and keep the bottleneck from ever happening in the first place.
