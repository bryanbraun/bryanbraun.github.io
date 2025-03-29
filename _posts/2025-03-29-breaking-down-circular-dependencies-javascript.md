---
title: "Breaking down circular dependencies in JavaScript"
date: 2025-03-29
related: [
  "An Overview of Javascript's try-catch",
  "Every Possible Way to Define a Javascript Function",
  "Pause javascript in the browser using the \"debugger\" command"
]
---

I write a lot of JavaScript but circular dependencies have always been kind of a mystery to me. The error messages always seem random and inscrutable, and sometimes there's no error message at all! I wanted to understand this topic better, so I ran [a series of experiments](https://github.com/bryanbraun/circular) and wanted to share what I learned. Let's break down circular dependencies in JavaScript.

## What are circular dependencies?

Circular dependencies happen when your JavaScript `import` statements result in a loop:

<figure class="center">
  <img src="{{site.url}}/assets/images/circular-dependencies.svg" alt="Diagram showing a two-way dependency loop and a three-way dependency loop." />
  <figcaption>The loop can consist of two files, three files, or more.</figcaption>
</figure>

Any time your `import` statements create a loop like this, there's a risk that your code won't work as expected.

## How do you know when you have circular dependencies?

There's no easy way built into the language!

In JavaScript, a circular dependency often manifests as a seemingly unrelated error (like a `ReferenceError` or `TypeError`). This is different from many other programming languages, which often tell you directly that your imports are bad:

* Python: `ImportError`
* Go: `import cycle not allowed`

So why can't JavaScript come out and say ⚠️ `CircularDependencyError`?

It's because JavaScript modules are designed to be loaded and executed on-the-fly.

When your browser loads a web page and starts executing its first JavaScript file, it has no idea how many more files are still coming. Those files could still be sitting on servers on the other side of the world.

This is a very different situation than a Go or Python program, where the import system can analyze the whole dependency tree before executing a single line of code.

## Stepping through a circular dependency in JavaScript

The best way to explain the errors that JavaScript gives us is to step through a circular dependency scenario:

<figure class="center">
  <img src="{{site.url}}/assets/images/circular-dependencies.png" alt="A diagram showing step-by-step execution of code leading to a circular dependency error." />
  <figcaption><a href="{{site.url}}/assets/images/circular-dependencies.png" target="_blank">Click to view a larger version of this image</a>.</figcaption>
</figure>

Here's what we see on each step:

**Step 1:** On line 1 of `index.js`, execution pauses to download `a.js` so its value `a` can be imported.

**Step 2:** Upon downloading `a.js`, execution continues in `a.js` but pauses on line 1 to download `b.js`, so its value `b` can be imported.

**Step 3:** Upon downloading `b.js`, execution continues in `b.js` and finds an import on line 1 pointing back at `a.js` (a circular import).

**Step 4:** `a.js` is already downloaded, but it has no exports defined because we haven't executed anything past line 1 in `a.js` at this point. Thus, we cannot fulfill the import in `b.js`.

**Step 5:** Execution continues in `b.js` with `a` remaining uninitialized. When `a` is called on line 3, the program errors with: `ReferenceError: Cannot access 'a' before initialization`.

To summarize, the circular dependency results in code being executed with uninitialized values. This could result in various errors, like the `ReferenceError` above.

## Why do circular dependencies sometimes not cause errors?

JavaScript's imports are [described as "Live Bindings."](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) This means that the imported value can start out uninitialized (due to circular dependencies) and become fully useable once the rest of code has been evaluated. In other words, some circular dependencies are error-free because they "work themselves out" before you call the affected code.

I once worked in a code-base that was chock full of circular imports but none of them ever caused any issues. Why?

It's because all the code was defined in functions, none of which would be called until after everything was loaded.

To demonstrate, we can update the last scenario to work in a similar way:

<figure class="center">
  <img src="{{site.url}}/assets/images/circular-dependencies-2.png" alt="A diagram showing step-by-step execution circular dependency code without any errors." />
  <figcaption><a href="{{site.url}}/assets/images/circular-dependencies-2.png" target="_blank">Click to view a larger version of this image</a>.</figcaption>
</figure>

Steps 1-4 are the same as above but things start to change at step 5:

**Step 5:** `a` remains uninitialized but instead of being called directly, it is placed in a function definition (no error).

**Step 6:** With `b.js` completed, execution in `a.js` continues down to line 3, which defines the export for `a`. From this point on, any code calling `a` will get an initialized value, as a result of the live bindings.

**Step 7:** We call `a()` successfully, which in-turn calls `b()`. Ultimately, all the code gets called with no errors.

To summarize, by the time we actually call that "uninitialized a", the live bindings have updated its value and it's no longer uninitialized. We're safe because the value of `a` is only retrieved when the variable is actually used.

Now, I wouldn't recommend this as a way of fixing dependency issues. I'd feel better about removing the circular dependencies altogether. Still, I'll bet there are plenty of production apps with circular dependencies that currently rely on this behavior.

## Preventing circular dependencies

While JavaScript may not have built-in circular dependency checking, we still have options for preventing these issues.

3rd-party tools like [madge](https://github.com/pahen/madge) and [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) can perform static analysis on your JavaScript codebase and detect circular dependencies before they become unwieldy. Some monorepo tools like NX and Rush have similar features built-in to their workflows.

Of course, the best prevention is a well-organized codebase, with a clear hierarchy for shared code.

## What about Node / Bun / Webpack / etc?

The examples I shared above are focused on the "ES modules in the browser" use-case, but JavaScript runs in a lot of different contexts. Server-side JavaScript doesn't need to download its source over the network (making it more like Python) and bundling tools like Webpack can combine all the code into a single file. Are circular dependencies an issue in these scenarios?

In short, yes. In my experiments, I was surprised to find that the error outcomes for browser, server, and bundler were basically the same.

For example, with Webpack, the `import` statements were removed but the combined code still produced the same error:

```js
// b.js
console.log('b.js:', a); // ReferenceError: Cannot access 'a' before initialization
const b = 'B';

// a.js
console.log('a.js:', b);
const a = 'A';
```

I should also mention that while Node.js produced the same error when using the `import` syntax (ESM), it behaved differently when using the `require` syntax (CommonJS):

<figure>
  <pre>$ node node-entry.cjs

(node:13010) Warning: Accessing non-existent property 'Symbol(nodejs.util.inspect.custom)' of module exports inside circular dependency
(Use `node --trace-warnings ...` to show where the warning was created)
(node:13010) Warning: Accessing non-existent property 'constructor' of module exports inside circular dependency
(node:13010) Warning: Accessing non-existent property 'Symbol(Symbol.toStringTag)' of module exports inside circular dependency</pre>
  <figcaption>It's nice that the warnings say "circular dependency" explicitly, when using CommonJS.</figcaption>
</figure>

This makes sense when you consider that CommonJS is an entirely different import system that doesn't conform to [the ECMAScript Modules spec](https://tc39.es/ecma262/#sec-modules). Comparing the two is comparing apples and oranges!

## Conclusion

Circular dependencies can be confusing but it makes a lot more sense when you walk through the scenarios step by step. As always, nothing beats an experiment for getting a clear understanding of something like this.

If you want a closer look at my test results, feel free to check out [the repo](https://github.com/bryanbraun/circular).
