---
title: "Why do we use \"git checkout\" to discard file changes?"
date: 2019-06-11
related: [
  "Editing a commit in an interactive rebase",
  "What is Github?"
]
---

When you're using git and you want to discard your local changes to a file, this is how git recommends you do it:

<figure>
  <pre><code>use "git checkout -- &lt;file&gt;..." to discard changes in working directory</code></pre>
  <figcaption>This instruction is found in the output from running "git status".</figcaption>
</figure>

I've used this command for years, but I've never really understood why it uses "git checkout". Isn't checkout for switching branches? Why not something like "discard" or "reset" or some other command that sounds more like I'm trying to undo something.

Well, today I learned why.

The "git status instructions" fail to mention an optional argument for git checkout. You can see that argument in the help files:

<pre><code>git checkout <strong>&lt;tree-ish&gt;</strong> -- &lt;pathspec&gt;</code></pre>

What on earth is `<tree-ish>`? Well, [it can mean a bunch of things](https://stackoverflow.com/a/18605496/1154642) but it most commonly refers to a revision or branch name. Here's what a file checkout looks like with a branch name specified:

<pre><code>git checkout <strong>mybranch</strong> -- index.html</code></pre>

This makes more sense, because now we are saying: "I want to check out some code from `mybranch`, but instead of grabbing the entire branch, I just want one file (`index.html`) from that branch." And that's what happens: your existing `index.html` is replaced by the `index.html`, as it exists on `mybranch`.*

When you omit the branch name, git just assumes you mean your current branch:

<figure>
  <pre><code>git checkout -- index.html</code></pre>
  <figcaption>This replaces your changed file with the version that exists on your current branch (or HEAD)</figcaption>
</figure>

So checkout makes sense after all. And now, with your mental model of checkout restored, you can go forth and checkout files, folders, or entire branches, from any point in git's history.

<hr class="section-divider" />

<small>*There's a small difference: when you specify a branch name, git also adds the file to your index. This behavior is inconsistent with every other checkout, but it's pretty minor so I'm going to try not to think about it too much. 😅</small>
