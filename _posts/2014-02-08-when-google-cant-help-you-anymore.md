---
layout: post
title: "When Google Can't Help You Anymore"
date: 2014-02-08 15:24:48
---

I once listened to a [story on Radiolab about chess][1]. Chess has been analyzed and studied in thousands of ways, and one interesting fact about modern chess is that the moves to nearly all professional games are logged in game databases (like [this popular one][2]). This allows analysts to do interesting things like study the moves in past games and develop techniques for common game openings and endings. There are millions of games in these databases, and because the starting position of the board is always the same, the first few moves of any game has been done thousands of times before. There are books about what to do in these opening situations, because they are not unique. They've been played before.

 [1]: http://www.radiolab.org/story/153809-rules-set-you-free/
 [2]: http://en.wikipedia.org/wiki/ChessBase

But as you get deeper into the game, at some point, enough moves have transpired that your game is entirely unique. Your board layout has never been played before, and the books and databases can't help you anymore. You must defer to your skill as a chess player to find a way to win.

We're fortunate as web developers to have the internet at our fingertips, waiting eagerly to solve whatever issue we're facing. Between the developer blogs, forums, and sites like Stack Overflow, we have tons of answers to common problems that we can consult when we get stuck in a tricky situation.

But like the chess database, there's a point when your tool stack is so unique and your issue is so specific that Google can't help you anymore.

For front-end devs like me, it's something like an issue with callback functions handling event propagation on a less-than-popular jQuery plugin which happens to fail in Internet Explorer 8 when you're using an old version of jQuery. But you could be doing front-end, back-end, database, or dev-ops. The common thread is that you're on your own.

When you're in that deep, nobody will answer your questions on Stack Overflow. At that moment, it's hard to pull in your team or your coworkers for help because it's such a big effort just to get them up to speed. Plus, there's a high opportunity cost; they're usually going full-speed working on their own things.

What do you do, when Google can't help you anymore? When you're completely alone?

## Back to basics

I usually have to step back, take a breath, and realize that I'm not going to find the answer by searching online. This gives me a chance to get my head out of the cloud of libraries and API's and focus back on the basics. I'm going to find my answer by digging through things like variables, functions, and individual lines of code, not tutorials.

## Set phasers to "troubleshoot"

Troubleshooting is taking something that isn't working, and investigating it to try and find out what's wrong. It's scientific experimentation for engineers; isolating various factors, testing them, and narrowing in on the source of the problem. It's a creative, exploratory process that is unique for each problem.

## And when you don't know how to troubleshoot?

Troubleshooting is a skill that's hard to learn. It seems I learned how to troubleshoot code out of necessity… being stuck without a solution and being forced to flail around blindly until I could start moving forward again. Now, I try to be a bit more methodical, and my approach often includes the following:

1.  Know what your code does. I know this sounds a bit silly, but I often find myself working with legacy code, 3rd party libraries, snippets found online, or examples pasted from other projects. My applications are like a series of little black boxes connected together. If there's a problem with a black box, and I don't know what that code does, I'll forget about the problem, and just start learning how the code works. *Note: this is a good opportunity to add comments to your code and document how it works, if it isn't already commented.*
2.  Print out values. While I'm learning how the code works, I'll often find variables that are important to the functionality in question. I like to take these variables and others around them and start printing out their values throughout the code. It's a bit different in each language and environment, but printing values is typically very cheap and easy, so I don't go light on it. Seeing the values helps me better understand how my code works, and often exposes issues, or validates that the code is working.
3.  Whittle away the working code. As you learn about your code and print out values, you'll start to recognize parts of your code that are working properly. That's great! Make a mental note (or a code comment), and move on to other parts. Slowly, by process of elimination, you can rule out the parts that are working and zero in on the parts that aren't, just like a woodcarver cuts away excess wood to expose the shape inside.
4.  Persist. You can solve anything if you keep chipping at it long enough. Sure, come up for air every once and a while. Run your approach by someone else. Sleep on it. But if your approach passes these sanity tests then keep working at it. If you persist, you'll prevail.

We all rely on Google to some degree, and that's OK. Part of being a skilled developer is knowing what resources you have, and leveraging them to save time and complexity. But you won't get far if you can't fight your way through a complicated problem when Google can't help you anymore.