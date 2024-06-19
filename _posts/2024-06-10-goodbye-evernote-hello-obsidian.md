---
title: "Goodbye Evernote, Hello Obsidian"
date: 2024-06-10
updated: 2024-06-19
related: [
  "Thinking Long Term"
]
---

I use note-taking software every day. I use it for journaling, blogging, [capturing ideas](https://sparkbox.com/foundry/joy_skill_career_and_money_how_i_choose_a_side_project), researching technologies, managing [my projects]({{site.url}}/projects/), and many other things. Writing is how I think through problems, and note-taking software makes all that thinking easy to search and navigate.

For 10+ years I used Evernote because it was simple and cross-platform. Recently, however, I've watched Evernote deploy increasingly aggressive business tactics like feature restrictions, price increases, and upsell pop-ups. I started to realize that *my* writing was in *their* cloud, under *their* control. They could put it behind a paywall or restrict exports and there would be nothing I could do about it. I wanted to use something that gave me more control and ownership over my notes. Something that would last me for the *next* 10 years.

I looked at a lot of tools, like Roam, Obsidian, LogSeq, Notion, Joplin, Workflowy, Apple Notes, OneNote, and Bear. They were all fine but nothing seemed to fit the vision I had in my head. I even toyed with the idea of designing and building my own note-taking tool. 💀

One day, I was talking to my friend [Reed](https://reeds.website/) about what my ideal note-taking tool would look like. It would just be a usability layer over the file system, like VSCode, but with a built-in markdown editor that gets out of your way like Bear. To this, Reed just said, "dude, you should try [Obsidian](https://obsidian.md/)."

The thing was, I had already ruled Obsidian out.

I once [read a book called "How to Take Smart Notes,"]({{site.url}}/books/#how-to-take-smart-notes) which described a note-taking system called Zettelkasten. It was all about building networks of linked notes (which is particularly useful for research). While the book was fascinating, I decided that I didn't want to adopt a strict Zettelkasten-based workflow, and that any note-taking tool designed around Zettelkasten would result in me fighting the tool. In my mind, Obsidian was a Zettelkasten tool.

If that wasn't enough, I was concerned that Obsidian wasn't open source. I'm not a [free software](https://en.wikipedia.org/wiki/Free_software_movement) purist but after my experience with Evernote, I worried that closed-source options would put me at risk of lock-in.

Fast forward to today: I've now been using Obsidian for over four months and it's been amazing.

## What about fighting the tool?

My concerns about Zettelkasten turned out to be unfounded. Yes, Obsidian is often used for Zettelkasten but it isn't designed specifically for that use-case. Core Obsidian is un-opinionated, and the more specific workflows (like strict Zettelkasten) are supported by opt-in plugins.

Obsidian has a huge community (many of them developers), which results in a large library of user-contributed plugins, themes, and style snippets (most of which are open source). While onboarding, I occasionally faced minor issues, but I could always work around them. For some examples:
- I didn't like the default image-save location but it was configurable so I changed it.
- I wanted the search keyboard-shortcuts to be more similar to my code editor so I customized them.
- I liked a certain theme except the heading sizes were too similar. I adjusted the CSS and now it's perfect.

I don't have to fight the tool when I can customize it to meet my needs. Now every time I use Obsidian, it's like putting on a pair of pants that fits really well.

## What about lock-in?

Obsidian is local-first, or, as I might describe it, "a usability layer over the file system." Every note you create is just a text file (markdown) and you can organize these files into folders while still using modern formatting, navigation, and search. "Local-first" seems like just a clever technical detail but it has huge implications for ownership and control. Ownership, because the files live on your computer and [text files have longevity](https://stephango.com/file-over-app). Control, because text files are flexible. You can check them into git, and BAM you've got versioning. Or you can put them in Dropbox and BAM you've got syncing.

Now, I've been around long enough to watch many good apps go south (see: Evernote). That could happen to Obsidian too but it has a lot of things going for it, specifically, [being bootstrapped and 100% user-supported](https://stephango.com/vcware). Val Agostino [said](https://www.monarchmoney.com/blog/mint-shutting-down) that "a company eventually becomes its business model*," and Obsidian's business model avoids the misaligned incentives that plague much of the industry. Time will tell whether they hold to [their principles](https://obsidian.md/about) but I'm optimistic that whatever happens, we won't have to worry about lock-in.

> It is now possible for tiny teams to make principled software that millions of people use, unburdened by investors. Principled apps that put people in control of their data, their privacy, their wellbeing. These principles can be irrevocably built into the architecture of the app.
>
> [Steph Ango, CEO of Obsidian - 100% User Supported](https://stephango.com/vcware)

<hr class="section-divider">

Using Obsidian is truly a joy. I love it, and I'm not the only one who feels that way (see: [The cult of Obsidian: Why people are obsessed with the note-taking app](https://www.fastcompany.com/90960653/why-people-are-obsessed-with-obsidian-the-indie-darling-of-notetaking-apps)).

If you're not happy with your current note-taking system, I encourage you to give it a try.
