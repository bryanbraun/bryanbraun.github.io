---
title: "Six Years of Jekyll"
date: 2022-12-30
related: [
  "New Year, New Website",
  "Nonsense",
  "400 terrible blog posts"
]
---

This week marks six years since [I moved this blog to Jekyll]({{site.url}}/2016/12/29/new-year-new-website/) (on Github pages).

Occasionally, I've been tempted to migrate it to something else. When Medium was new, a bunch of developers started talking about how moving to Medium was dramatically increasing the reach of their posts. Even 37 signals moved their blog. Of course, eventually Medium needed to be profitable, which brought paywalls, pop-ups, article limits, and other junk. [Developers](https://kentcdodds.com/blog/goodbye-medium) [fled](https://m.signalvnoise.com/signal-v-noise-exits-medium/) and I felt like I dodged a bullet.

Since then, there have been similar trends to move to platforms like [dev.to](https://dev.to/) and [Substack](https://substack.com/). Whenever I feel tempted, I just remember Medium. It's hard to put a price on having full control over your content, domain, design and code.

Of course, I don't need to stay on Jekyll for that. There are plenty of shiny new static-site blogging frameworks that I could be using, like Gatsby, Hugo, 11ty, Astro, and others. I'm primarily a JavaScript developer these days.... so why stay with Jekyll?

Simply, because it's [no-nonsense]({{site.url}}/2019/04/16/nonsense/). I run the site locally with `jekyll serve`. It builds in about 6 seconds. All my content is in markdown and the templating is straightforward. Dependencies are simple with the [Pages Gem](https://github.com/github/pages-gem#project-goals)—there's none of that constant dependency churn we see with NPM.

Some people don't like the Ruby dependency. I get that, but I've used enough Ruby to be comfortable with with RVM and Bundler, so in my case it's not a big deal.

Some people would rather use hot new technologies so they can use their personal site as a coding sandbox. I get that too. Fortunately for me, [I can spin up new repos for experimental projects and they live under the domain of my personal site](2021/03/18/how-i-boosted-my-domain-authority-on-accident/#what-happened) (thanks to Github Pages user sites). This means I can experiment all I want without the blogging overhead. It's the best of both worlds.

All in all, Jekyll has been good to me and my blog. It's hard to imagine that I'll change it anytime soon.
