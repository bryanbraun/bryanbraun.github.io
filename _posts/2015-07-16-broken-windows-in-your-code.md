---
layout: post
title: "Broken Windows in your Code"
date: 2015-07-16 18:31:48
---

A <a href="https://en.wikipedia.org/wiki/Broken_windows_theory" target="_blank">popular theory</a> on criminal behavior postulates that **a broken window left unfixed, leads to rapid deterioration in a neighborhood**. The reasoning is that the broken window sends signals to anybody who sees it, indicating the degree to which the community tolerates disorder. A community that tolerates disorder becomes a hotbed for other criminal activity.

The solution? Fix broken windows as soon as they are broken! Don't let a small issue escalate until it's out of control. It sounds obvious, but in reality it takes a lot of time and deliberate effort to watch for broken windows and fix them immediately.

Of course a "broken window" doesn't have to be a window. It could be street graffiti, litter, or unmaintained lawns. And it could also be code.

What does it mean to have "Broken Windows" in your code? It means that there are patterns in your codebase which indicate a tolerance for sloppiness. A persistently failing test is a broken window. Outdated documentation is a broken window. A high-specificity CSS selector is a broken window. An inconsistent naming convention is a broken window.

No developer intends to vandalize a codebase, but the fact is, it takes a lot of upfront effort to write maintainable code. The effort pays off over time, but it's easier to look for shortcuts especially when you're on a deadline. And when a codebase is full of shortcuts, it's easier to justify more shortcuts. This situation is especially dangerous when you have a large team—when each additional developer adds more entropy to the system, [things can get out of control really fast][1].

 [1]: http://www.nczonline.net/blog/2015/05/14/the-bunny-theory-of-code/

My former team lead had an eagle-eye for broken windows, always catching them in code-review. As good as that is, it's better to design a system that prevents windows from breaking in the first place. It's better to install bulletproof glass. In that regard, this quote is instructive:

> A good framework or a good architecture makes it hard to do the wrong thing. A lot of people will always go for the easiest way to get something done. So as a systems designer, your job is to make sure that the easiest thing to do is the right thing.  
> - Nicholas Zakas
What might such a system, with bulletproof glass, look like?

*   Code conventions and patterns exist, and they are are enforced by linters which fail the build if anything is incorrect.
*   Linters and rules are packaged in the codebase itself instead of only being configured in IDE or developer workflows.
*   The framework/architecture has good development practices built into it's conventions.

I'm sure there are others solutions, but those are a few that I've seen work. Do you ever see "broken windows" in your codebases? How do you go about preventing them?