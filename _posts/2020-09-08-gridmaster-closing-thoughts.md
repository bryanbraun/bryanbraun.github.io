---
title: "Gridmaster: Closing Thoughts"
date: 2020-09-08
related: [
  "Bitbooks: Closing Thoughts",
  "I'm working part-time now",
  "We are just seeing the beginning of interactive online learning"
]
---

This month I'm shutting down Gridmaster, a side-project that my friend Andrew and I have worked on periodically since 2015.

Gridmaster was a online tool for learning Microsoft Excel by doing, not watching. It included interactive courses that were built around challenges you could complete in a realistic spreadsheet environment.

At first, it used a virtual spreadsheet embedded in a web browser:

[![Screenshot of the first design with an embedded spreadsheet]({{site.url}}/assets/images/gridmaster-early.png)](https://web.archive.org/web/20161117174726/http://gridmaster.io/courses/intro-to-functions/challenge--basic-calculations)

Eventually, we moved the courses right into Microsoft Excel, by building [an Add-in](https://web.archive.org/web/20200426173247/https://appsource.microsoft.com/en-us/product/office/WA104381078):


<figure>
  <a href="{{site.url}}/assets/images/gridmaster-2018.png">
    <img src="{{site.url}}/assets/images/gridmaster-2018.png" alt="Screenshot of the updated design which was built with an Office Add-in" />
  </a>
  <figcaption><a href="https://www.youtube.com/watch?v=FPSjY0nTCWM" target="_blank">This video</a> gives a walk-through of the Add-in</figcaption>
</figure>

The product got a lot of attention early on, [hitting the first page of Hacker News](https://news.ycombinator.com/item?id=12938636), and winning [a Hackathon](https://devpost.com/software/gridmaster) hosted by Microsoft. It was [highly rated in the Add-in store]({{site.url}}/assets/images/gridmaster-addin-store.png) and we'd periodically get emails from customers who loved it. But at the end of the day, we struggled to regularly acquire new paying customers. I won't go into detail about all the things we tried, but after a long time of pushing, it became clear that continuing to iterate would require some big sacrifices that I wasn't ready to make.

In many ways, this was the most ambitious side-project I've worked on, and there are several things I'm proud of:
- The design and user experience. [The website looked good](https://web.archive.org/web/20190317130901/https://gridmaster.io/), the Add-in was intuitive, challenge feedback was instant, and you could navigate courses easily, even inside a tiny sidebar. This project helped me prove to myself that I could be a designer.
- Customer feedback. We set up all sorts of feedback loops so it was easy to hear from our customers and fix any issues they were running into. Not being connected to your customers is a common failure point, so we made it a priority.
- The quality of the courses. They were polished, comprehensive, and had some really sophisticated challenges, like checking formulas across multiple sheets and validating custom functions. In addition, the exercise checker was really robust, providing targeted correction for dozens of common user mistakes in each challenge.
- Growing my backend development experience. I really got in the weeds of caching, authentication, database design, docker-compose, continuous integration, Rails, and many other things for the first time.


Traditional Excel training still isn't that great, and I still believe that [the interactive approach we took is the future of online learning in general]({{site.url}}/2015/10/20/we-are-just-seeing-the-beginning-of-interactive-online-learning/). I'm looking forward to seeing other future products build on the ideas we explored.
