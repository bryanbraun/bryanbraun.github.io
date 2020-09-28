---
title: "Constraint-based Learning"
date: 2016-06-16 06:12:16
---

Every month, a group of web programmers in Dayton Ohio comes together for an hour or two to solve highly impractical programming challenges.

The format is simple. We choose a fairly straightforward programming task, like implementing [FizzBuzz][1] or Yahtzee, and then we arbitrarily apply a constraint. Here are some examples of constraints we've used:

*   No conditions (if, else, switch, or ternary)
*   No functions containing more than 3 lines of code
*   All methods/property names must be at least 30 characters long
*   No using a mouse
*   No classes
*   No IDE
*   No frameworks
*   No mutable values or state
*   Use an unfamiliar programming language

The first challenge I tried was FizzBuzz without conditions, and I got owned. I spent an hour and a half of writing FizzBuzz using various JavaScript techniques, only to end up always needing a condition. I felt frustrated and a bit embarrassed. I knew I could probably Google my way to an answer, but I didn't want to. I should be able to do this!

The problem haunted me. I kept thinking about it when I was eating meals or biking to and from work. I identified a few JavaScript constructs that looked promising and researched them. And then I found [a solution][2].

My mind kept churning though. This time, I felt like there had to be another way to do it. Sure enough, a short while later, I found [another solution][3].

Now, let's be clear, "no conditions" is an very impractical requirement. I'm never going to need to write production code for a project where I'm not supposed to use conditions. And honestly, spending so much time on an impractical task is kind of repulsive to me. I hate busywork.

But a couple weeks later, while developing a new feature, I came across a situation where I could use something like the object lookup technique from my 2nd solution to build a cleaner, more flexible module. Had I not undertaken that "impractical" exercise, I never would have seen that option.

This is the story of constraint-based learning. Applying arbitrary constraints to exercises helps you break out of the mental ruts you don't even know you are in. This isn't a new technique, and it doesn't just apply to programming. [The $100 computer][4], [the cardboard bicycle][5], and [the novel written without the letter "e"][6], are all exercises in constraint-based learning.

The fact of the matter is, the world is full of constraints. We never have enough time or money to do everything we want. And [that's a good thing][7]. Constraints force us to innovate. Nature's most interesting creatures are byproducts of environments where there isn't enough water, sunlight, or soil.

Embracing those constraints... and even intentionally applying arbitrary ones, is a great way to find gaps in our knowledge and move ourselves towards mastery of our craft.

[1]: http://c2.com/cgi/wiki?FizzBuzzTest
[2]: http://codepen.io/bryanbraun/pen/xZLLOE?editors=0010
[3]: http://codepen.io/bryanbraun/pen/eJGGwy?editors=0010
[4]: https://en.wikipedia.org/wiki/OLPC_XO
[5]: https://en.wikipedia.org/wiki/Cardboard_bicycle
[6]: https://en.wikipedia.org/wiki/Gadsby_(novel)
[7]: http://gettingreal.37signals.com/ch03_Embrace_Constraints.php
