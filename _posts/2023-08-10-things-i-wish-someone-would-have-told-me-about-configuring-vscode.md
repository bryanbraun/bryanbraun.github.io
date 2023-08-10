---
title: "Things I wish someone would have told me about configuring VSCode"
date: 2023-08-10
related: [
  "Understanding the Command Line",
  "Vim Color Schemes: A Call for Designers",
  "Drawing git branching diagrams",
]
---

I've used VSCode as my primary text editor for over 5 years now but I'm still learning how best to use it, often through trial and error. Here are a few things I wish someone would have told me about configuring VSCode:

## 1. Use .gitignore_global to ignore the .vscode folder

The `.vscode` folder is a place for workspace-specific config. The folder is usually added to your project as soon as you save a setting for just that workspace. This config is really just for you—others on your team might use different editors (or have different preferences on how they use vscode). Thus, it's best to not check it into git.

You could just add it to your project's `.gitignore` file, but it doesn't really belong there since your editor should be fairly independent from the code. There are dozens of common text editors out there... do we really need to create a `.gitignore` entry for every single one of them?

Instead, just add it once to your `.gitignore_global`. This ignores it just for you, across all the projects on your computer, so you'll never need to worry about accidentally checking it in.

## 2. Formatters and linter extensions should always be enabled at the workspace level

Some VSCode extensions are fairly universal and can be enabled for all projects (like [this one I use to see filesizes](https://marketplace.visualstudio.com/items?itemName=mkxml.vscode-filesize)).

But formatters and linters (like eslint and prettier) tend to be very project-specific, so these extensions should always be enabled at the workspace level only. You can do this by installing the extension, immediately disabling it, and then re-enabling it with *Enable (Workspace)*:

<div class="center">
  <img src="{{site.url}}/assets/images/vscode-workspace-extension.png" alt="The dropdown you use to enable an extension for just one workspace" />
</div>


In the same vein, your "Default Formatter" preference (where you select your formatter) should also be configured at the workspace level.

In general, it's good to look at all your extensions and ask yourself, "do I really want this on all my possible projects?" If not (or if you're not sure), then disable them by default, and re-enable them for workspaces where it makes sense.

## 3. The built-in terminal is really great

VSCode has [a built-in terminal](https://code.visualstudio.com/docs/terminal/basics). I ignored it for a while because I was happy with iTerm (which I've used for years).

Eventually, I gave the VSCode terminal a shot and it won me over (at least for most use-cases). Here's why:

* It's easy to hide and show the terminal with a single keystroke. I had a similar workflow for iTerm, so this was a must-have for me.
* You can easily [split the terminal](https://code.visualstudio.com/docs/terminal/basics#_groups-split-panes) into two sides. I often use one side for running a development server and the other for random terminal commands (git stuff, linting, random tasks, etc). Super convenient.
* Everything for my project is all in one place (literally, in one window). This makes it easy to pair program remotely... I just share my screen and they can see everything I can. If I need to pause development for a bit, I just minimize that window. When I'm ready to jump back in, I expand it.
* Debugging server-side Javascript is as easy as [spinning up a "Javascript Debug Terminal"](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_javascript-debug-terminal) and running your node server there. It's easy enough that I actually use the built-in debugger instead of random `console.log` statements (which is less efficient, let's be honest).
* Finally, you can easily set up [workspace-specific environment variables](https://stackoverflow.com/a/65143540/1154642).

To expand a bit on the environment variables, run `printenv` in a terminal. Do you see any project-specific keys or tokens in there? I did.

Here's why: sometimes, a project will tell you to add project-specific keys or tokens to your `.bashrc`, but that's not *really* where they belong. Putting them in `.bashrc` makes them available to the project, but it also exposes these values to *any* script that runs in *any* terminal. 😱

If you need a couple environment variables for a project, just [toss them into your VSCode workspace settings](https://stackoverflow.com/a/65143540/1154642). This makes them available to the terminal in your VSCode workspace and unavailable outside of your workspace. Plus, they end up in your `.vscode` folder, which is .gitignored ([right?](#1-use-your-gitignore_global-to-ignore-the-vscode-folder)), so you don't have to worry about them being committed.

This is perfect for little side-projects like bots or API experiments. For larger projects with multiple environments, you'll probably need to set up a special place to manage these environment variables (like [`.env`](https://onboardbase.com/blog/env-file-guide/)).

Anyways, I still use iTerm for miscellaneous things but most of my terminal usage is in VSCode these days.

## 4. You might not need GitLens

GitLens is one of the most popular extensions in the VSCode marketplace and for good reason: it has tons of git-related features, and everyone uses git.

But here's the thing: VSCode has been adding lots git features to the core editor over time.

The [built-in diffs](https://code.visualstudio.com/docs/sourcecontrol/overview#_viewing-diffs) are great. The [conflict resolution](https://code.visualstudio.com/docs/sourcecontrol/overview#_merge-conflicts) is great. And now, VSCode has [a timeline view](https://code.visualstudio.com/docs/sourcecontrol/overview#_timeline-view) that covers the most useful parts of the Gitlens timeline.

The only thing still missing is `blame` and a small extension can cover that (I've been using [vscode-gitblame](https://marketplace.visualstudio.com/items?itemName=waderyan.gitblame)).

There's nothing wrong with GitLens, if you need it. But if you don't, that's less overhead and one fewer extension to manage.

<hr class="section-divider">

That covers most of my recent VSCode discoveries. I could keep going, telling you about my favorite extensions and shortcuts but lots of other people are sharing that kind of stuff. If you want more, maybe check out [vscodecandothat.com](https://vscodecandothat.com) or [vscode.email](https://vscode.email).
