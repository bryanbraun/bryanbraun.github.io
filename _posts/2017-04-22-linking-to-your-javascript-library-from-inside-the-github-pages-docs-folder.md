---
title: "Linking to your Javascript Library from Inside the Github Pages Docs Folder"
date: 2017-04-22 22:27:00
last_modified_at: 2020-04-17
related: [
  "On keeping your gh-pages and master branch in sync"
]
---

I maintain [a javascript library](https://github.com/bryanbraun/anchorjs), and the docs are inside a `\docs` folder, which is served by Github pages ([a new-ish feature from Github](https://github.com/blog/2233-publish-your-project-documentation-with-github-pages)). It's convenient having everything in one repo. My favorite part? I can update the docs *in the same commit that new features are added*. This is especially great when other people submit PRs because I can ask them to add documentation for the feature they are submitting.

The only remaining bit of workflow is to copy a version of my library into my docs folder each time I create a new version (so the examples in the docs are always running on the newest version).

So then I started wondering: Is there a way to avoid needing to copy this file every time?

As far as I could tell, my options were:

1. Add an [npm task](http://blog.teamtreehouse.com/use-npm-task-runner) to copy the file. Maybe I could chain this onto another task I run regularly, like the minification task.
2. Find a way to directly link to the file in the root folder from inside the docs.

I was intrigued by the zero-overhead of option 2, so I set up a test file with the following approaches:

* Use a relative link going up a directory
* Use a symlink, that links up a directory
* Link to a CDNed version of the library on master, using [raw-git](http://rawgit.com/)

![screen-grab of the test-file]({{site.url}}/assets/images/github-pages-link.png)

So here's what I found:

* Relative link: **404s**
* Symlink: **Breaks the github-pages build** (they sent me a notification email with error information in it)
* Raw-git link: **Works**

So at least one of them worked, right? Well the more I thought about the raw-git option, the more flaws I found. For example, the library in my docs isn't going to be fully updated during local development, and that could be an issue if I'm working on a major update locally.

In the end, I decided to go with option 1 (an NPM task that copies it over). If anybody has better ideas on how to make option 2  work, let me know in the comments.

<hr class="section-divider" />

*Update: I tried a different approach for this on [a recent project of mine](https://github.com/bryanbraun/checkboxland) and it worked out pretty well.*

*Instead of deploying just the `/docs` folder to github-pages, I deployed the whole repo. I still had a `/docs` folder containing the static site for the docs... I just needed to pull the main `index.html` up to the project root. This setup allowed me to link my main library directly into my docs without any npm tasks or watch scripts. 🎉*

*The only downside is that pulling the index.html up a level isn't typical for most static site generators. In my case, I was using plain HTML, so it wasn't a big deal.*
