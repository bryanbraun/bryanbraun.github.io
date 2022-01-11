---
title: "Lessons learned from Advent of Code"
date: 2022-01-10
related: [
  "4 Takeaways from Learning Futuristic JS with Wes Bos",
  "5 Takeaways from 5 Years of Teaching Myself Web Programming",
  "Every Possible Way to Define a Javascript Function"
]
---
[Advent of Code](https://adventofcode.com) is an annual event where programmers complete a programming puzzle for each of the 25 days leading up to Christmas. A new set of puzzles is revealed each year, and they tend to increase in difficulty throughout the 25 days.

I wanted to try it this year, so I decided to solve the puzzles using [Deno](https://deno.land/). I only made it to day six before I needed to focus on other things but I still learned a lot in the process:


## Deno

* Deno's built-in tooling is a breath of fresh air. It runs Typescript out of the box, and comes with it's own built in linter, formatter, and testing framework (Ryan Dahl must have liked Golang, haha). I've experienced the pain of setting those things up in a frontend JavaScript codebase, but with Deno it's all ready to go. 😍
* Where node.js often uses nonstandard features, Deno tries to be more browser-compatible, implementing APIs like Fetch, `URL`, and ES Modules. It makes me feel like using Deno will make me better at frontend JavaScript, and I like that.

Deno in general is really awesome. I hope Deno usage continues to grow and find more real-world use-cases. The language is still pretty new so I'm sure it'll take some time.

## JavaScript

* When in doubt, use a `for` loop.
  * I did a lot of looping in Advent of Code. Often I'd start with a more specialized looping construct (like `forEach` or do-while), only to find that I'd need to refactor it when the problem changed (each puzzle had a "part 2" which would often force changes). If I started with a `for` loop it could usually accommodate whatever changes I needed to make. When it comes to looping flexibility, `for` loops are pretty hard to beat.
* For-of is pretty great too. It's kind of like a `for` loop, but often more readable when working with arrays.
* I've been wary of using `reduce` in the past (the code is not particularly readable) but it really shines if you need to loop through an array and end up with a single value.

## General

* Check your progress as you go.
  * One day I got carried away and wrote out the whole solution before running the code. Surprise: it didn't run. I ended up having to refactor a bunch of stuff and I was grumpy about it because I felt like I should have known better.
* Sometimes, tests are *less* work.
	* I've always thought of writing tests as an investment—something with an upfront cost that pays for itself over the lifetime of the codebase. As a result, I've sometimes found myself skipping tests for small short-term projects (like Advent of Code exercises). But after talking to a coworker, I switched to a TDD workflow and it made everything easier. I was a surprised since I've followed TDD on other projects where it felt more like an obstacle. It made me realize that TDD is a better fit for some projects than others, and wisdom is recognizing the situations where it'll serve you best.


<hr class="section-divider" />

If you haven't tried [Advent of Code](https://adventofcode.com), I'd encourage you to check it out. You can find the puzzles from previous years on the website so you don't even have to wait until December to test it out.

And if you want to look at my code, you can find it in [my "Advent of Code" repo on Github](https://github.com/bryanbraun/advent-of-code).
