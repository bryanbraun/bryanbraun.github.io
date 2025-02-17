---
title: "You can't fix a problem you don't understand"
date: 2025-02-17
related: [
  "The right kind of thing",
  "I don't know where to start",
  "Nonsense",
  "Augmented Development with AI"
]
---

A few weeks ago, I was building a server-side API client. I had written the code and tested it in isolation. Everything looked good. Unfortunately, when I included it in the main service, I started seeing errors.

I decided to try asking an AI tool for suggestions. I gave it the error message and a bunch of context. It gave me a solution with a detailed explanation. The errors went away.

But the solution didn't sit right with me. It was a bit complex, introducing more layers of code and various protections. The errors were gone, but I couldn't clearly explain *why* it worked, and that was bothering me.

While the code was being reviewed, I decided to take another look. I brought back the error and spent some time digging into the stack trace. That's when I made the discovery: it was an environment issue. All I needed to do was set an environment variable and the issue would be fixed. The AI-provided code had been masking the *real* issue, quietly suppressing the error, and hiding the truth in its complexity.

Now this is the part of the post where I'm supposed to criticize AI programming tools. I won't be doing that. This isn't an AI problem.

I remember the first time I tried to fix a memory leak. Certain iPhone users would load the webpage, interact for a while, and then randomly the webpage would crash. We struggled to diagnose the issue (Safari's devtools weren't great at the time). We *thought* we fixed it several times but the issue kept coming back.

Why? Because we didn't understand the problem.

We kept digging and eventually we found it: one of our dependencies was storing massive amounts of data on the `window` object and it wasn't getting cleaned up. We added a cleanup step and the problem was gone for good.

Since then, I've adopted a mantra: **you can't fix a problem you don't understand**.

It doesn't matter if the "fix" comes from AI, Stack Overflow, or trial-and-error. If I don't understand the problem, I feel unsettled until I do.
