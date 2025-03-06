---
title: "Breaking down circular dependencies in JavaScript modules"
date: 2025-02-26
related: [
  "Every Possible Way to Define a Javascript Function",
  "An Overview of Javascript's try-catch",
  "Pause javascript in the browser using the \"debugger\" command"
]
---

Circular dependencies (in JavaScript modules) have always been kind of a mystery to me. The error messages always seem random and inscrutable, and sometimes there's no error message at all! I wanted to understand this topic better, so I ran a series of experiments and wanted to share what I learned. Let's break down circular dependencies in JavaScript.

## What are circular dependencies?

Circular dependencies happen when your JavaScript `import` statements result in a loop:

<figure class="center">
  <img src="{{site.url}}/assets/images/circular-dependencies.svg" alt="Diagram showing a two-way dependency loop and a three-way dependency loop." />
  <figcaption>The loop can consist of two files, three files, or more.</figcaption>
</figure>

Anytime your import statements create a loop like this, there's a risk that your code won't work as expected.

It's possible to create other kinds of circular references in JavaScript (like [circular object structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value) and [circular function calls](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Too_much_recursion)), but for the sake of this post, we're focusing on circular import statements (specifically, static ones).

## How do you know when you have a circular dependency issue?

Many programming languages report a specific error when there are circular dependencies:

* Swift: `Circular dependency between modules`
* Go: `import cycle not allowed`

In JavaScript, a circular dependency often manifests as a seemingly unrelated error (like a `ReferenceError` or `TypeError`). And sometimes, you, there's no error reported at all!

To understand why, we need to see how the browser executes these imports, step-by-step.

Lets imagine a...


It's because JavaScript modules are designed to be loaded and executed on-the-fly.

This is a very different situation than a Go or Swift program, where all its files are sitting together when the program is built and compiled. In those languages, the import system can analyze the whole dependency tree before executing a single line of code. That's just not possible in JavaScript.

## What about server-side JS (Node, bun) or bundling tools (webpack, Vite)? Wouldn't circular dependencies behave differently for them (since they don't import over the network)?


## Why do circular dependencies sometimes not cause errors?

<!--
- Show example where all code is in place.
- Need to make an example for this.
- NOTE: I should probably update or eliminate my "maximum call stack exceeded" error since it's a plain recursion issue, not a circular dependency issue. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Too_much_recursion
-->
