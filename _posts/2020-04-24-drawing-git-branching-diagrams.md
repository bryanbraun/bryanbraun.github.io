---
title: "Drawing git branching diagrams"
date: 2020-04-24
related: [
  "Good documentation is a signal",
  "Good Documentation Delivers Value",
  "Why do we use \"git checkout\" to discard file changes?"
]
---

I recently needed to create a git branching diagram to document the workflow for my team at Sparkbox. I hadn't done this before, so I did a little research on what tools I should use to draw it.

The options seemed to fall into two categories: Diagramming tools and git visualization tools.

## Diagramming tools

![LucidChart Diagram Example]({{site.url}}/assets/images/lucidchart.jpg)

*Options:* [Omnigraffle][1], [Gliffy][2], [Diagrams.net][3], [LucidChart][4], etc.

*What I learned:* Git branching diagrams aren't a common use-case for these tools, so they didn't tend to have build-in patterns or shapes designed for this.

## Git visualization tools

![Github Branch Visualization Example]({{site.url}}/assets/images/github-branch-visualization.png)

*Options:* [GitGraph.js][5], [Git up][6], [Git Flow Chart][7], etc.

*What I learned:* The visualizations looked great, but they seemed pretty rigid and difficult to customize or annotate.

## What I ended up doing

I found [some nice-looking branching diagrams published by Mobify](https://github.com/mobify/branching-strategy/tree/8aca19ad91ea5cebd4d3e8bb900325c7dbc65174/images), which they made with [diagrams.net][3]. I was able to take their export, clean it up a little, and use it as a starting place for my own. It worked great.

I wanted a generic template that I could use for future projects, so I threw one together and published it with some basic instructions.

**Here's the link to my [git branching diagram template][8].** It looks like this:

![Example Git Branching Diagram](https://user-images.githubusercontent.com/1256329/80170009-f9d03200-85b4-11ea-94d3-3041887565ac.png)

Feel free to use it as a starting place for your own branching diagrams, if you'd like. 😄

[1]: https://www.omnigroup.com/omnigraffle/
[2]: https://www.gliffy.com/
[3]: https://www.diagrams.net/
[4]: https://www.lucidchart.com/
[5]: https://gitgraphjs.com/
[6]: https://gitup.co/
[7]: https://gfc.io/
[8]: https://gist.github.com/bryanbraun/8c93e154a93a08794291df1fcdce6918
