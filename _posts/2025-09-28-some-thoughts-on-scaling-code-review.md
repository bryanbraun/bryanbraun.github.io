---
title: "Some thoughts on scaling code review"
date: 2025-09-28
related: [
  "On Designing Great Systems",
  "Augmented Development with AI",
  "Broken Windows in your Code"
]
---

AI code-writing tools make it possible for more people to write code than ever before. On my current team, I've seen PRs opened by engineers, designers, marketers, managers, and product people. There's something special about empowering more people to build and fix things. That empowering feeling is a big reason I got involved in web-dev in the first place.

But we also have to care about codebase quality. AI-generated code isn't always the best, and bad code has a tendency to multiply (especially as AIs use existing code patterns to suggest new code). Manual code review is effective, but I don't want to spend all my time reviewing AI generated-code. AI scales code generation. How do we scale code review?

Here are some things I've seen work:

## Strong, universal, linting and formatting standards

Humans should not be checking for code formatting or linting issues. All major languages have tooling for this, so it's one of the easiest things to set up and automate. I recommend running it on CI for all opened PRs, and having it run during local development (whether that be through watch tasks, pre-push hooks, or solid editor integration). I also recommend making your default rules pretty restrictive. It's basically free consistency, so take advantage of it. Most tooling allows you to make one-off exceptions if needed (ideally, with a comment explaining *why* it's needed).

## Make a bunch of custom linting rules

 Out-of-the-box linting can only get you so far. That's where custom lint rules come in. Most modern linters support custom rules, and other tools go even further (see [danger](https://danger.systems/), for example).

 In my recent onboarding experience, I was super-impressed to find a library of custom lint rules, acting as living documentation of the patterns we were moving away from. Are you trying to migrate away from Moment.js? Write a custom lint rule for that. Are there special global objects that you don't want to be abused? Write a custom lint rule for that. It's not that hard to do (especially with a bit of AI help).

## A process for burning-down bad patterns

It's not realistic to always have 100% compliance with your linting and coding standards. New patterns ought to be adopted as your needs change, and incremental adoption is usually less risky than doing it all at once. Ideally, your standards are clearly defined, and your codebase is always progressing towards them. How do we automate that? Here's a few ideas:

**1: Have linters and formatters run only on changed files (instead of ALL files).**

This allows you to fail CI builds for new violations while ignoring violations in untouched files—great if you want to automate "leaving each file better than you found it." In the JS world, you can do this with tools like `pretty-quick` or `eslint-plugin-diff`, but you shouldn't *need* special packages. Most CLI linters can take an argument for a "files list", and you can generate a list of changed files with git commands.

**2: When introducing a rule, create exceptions for all pre-existing violations, plus an explanatory comment.**

For example:

```js
// eslint-disable-next-line complexity - pre-existing violation, should be fixable
function processPayment(user, order) {
...
```

This is great for codebases that already have universal linting and build failures for any violations. I like comments on linting exceptions because they help explain whether an exception is valid, or technical debt. You can [make these comments required](https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/require-description.html).

**3: A ratcheting system**

A [ratchet](https://en.wikipedia.org/wiki/Ratchet_(device)) allows motion in one direction but prevents motion in the other. As such, we can set up systems that only allow the number of bad patterns to decrease. For example, the JavaScript ecosystem includes tools like [eslint-seatbelt](https://www.notion.com/blog/how-we-evolved-our-code-notions-ratcheting-system-using-custom-eslint-rules), [betterer](https://github.com/phenomnomnominal/betterer), and [diffjam](https://github.com/diffjam/diffjam), each of which uses a ratcheting process to gradually drive towards compliance.

## Excellent rules for AI agents

An ounce of prevention is worth a pound of cure, and we can prevent bad code from being written in the first place with a set of excellent rules for AI agents. All the major coding agents support this (see [Claude](https://www.anthropic.com/engineering/claude-code-best-practices#a-create-claudemd-files), [Cursor](https://cursor.com/docs/context/rules), [Copilot](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions)).

Well-written rules make a huge difference. When I joined ClassDojo, I could hardly believe how much "better" the coding AIs were. It wasn't the AIs themselves (I was using the same models and editors on my own projects). It was the rules.

If you don't have any rules in your project, create some (AI can help with this, but start small!). Then, anytime you get weird output from an AI, consider adding or adjusting the rules. Give engineers collective ownership over these rules with permission to adjust them as needed. This can be a powerful system for preventing undesirable patterns (especially ones outside the scope of linting).

## AI Code Review

Use AI to do a first-pass code-review. I've seen this done with [Cursor's bugbot](https://docs.cursor.com/en/bugbot) and the [Claude Code action](https://github.com/anthropics/claude-code-action), but I'm sure that other tools and services exist. I don't see these as a substitute for human review. They aren't perfect, but I've found them to be good at calling out things you may have overlooked (unused code, hardcoded values, etc).

## Conclusion

Any time you find yourself giving feedback, ask yourself if the feedback can be integrated into your systems. Over time, these systems should improve and the burden of code reviews can become progressively lighter. One reason senior engineers still matter is because they have the instincts and the agency to design and maintain these systems. They are the most qualified people to shepherd our codebases into a brave new world.
