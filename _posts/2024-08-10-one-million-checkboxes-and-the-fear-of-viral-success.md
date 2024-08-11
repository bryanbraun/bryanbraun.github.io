---
title: "One Million Checkboxes and the fear of viral success"
date: 2024-08-10
related: [
  "How I choose a side project",
  "Using the URL to build database-free web apps",
  "A world of imaginary boundaries"
]
---

When Nolen Royalty's [One Million Checkboxes site](https://onemillioncheckboxes.com/) went viral, several people sent me links to it.

<figure class="center">
  <img src="{{site.url}}/assets/images/one-million-checkboxes.gif" alt="A screen-capture of onemillioncheckboxes.com, shortly after it launched." />
  <figcaption>If you haven't heard of One Million Checkboxes, see <a href="https://en.wikipedia.org/wiki/One_Million_Checkboxes" target="_blank">the Wikipedia article</a> for more details.</figcaption>
</figure>

I loved everything about One Million Checkboxes. It was simple but strangely compelling. You land on the site, start using a single brain cell to check some boxes, and then minutes later you're [in an existential crisis](https://www.thegamer.com/one-million-checkboxes-sent-me-into-an-existential-meltdown/). Seeing the project gave me the kind of professional jealousy that I imagine other people feel when a peer gets promoted.

Nolen wrote [a fantastic post](https://eieio.games/essays/scaling-one-million-checkboxes/) full of technical details about how he built and scaled the site. It was very generous of him to write it up. Knowing how to scale a web service feels like magic to someone without much experience at it (read: me) and this post stands as a great case-study.

But more than that, the post really challenged me as a creator on the web. In the past, I've been so afraid of this exact situation Nolen was in. You know, building a creative project with a backend component, having it go viral, watching the metered costs go through the roof, and either:

 1. leaving users with an unstable and broken experience
 2. bankrupting myself
 3. being forced to shut it down to avoid bankrupting myself
 4. solving the problems perfectly on the fly, but still maybe bankrupting myself*

<figure class="center">
  <a href="https://x.com/itseieio/status/1806025147150745918" target="_blank"><img src="{{site.url}}/assets/images/one-million-checkboxes-tweet-1.png" alt="Any early tweet from Nolen Royalty after One Million Checkboxes went viral" loading="lazy" /></a>
  <a href="https://x.com/itseieio/status/1806217752656351305" target="_blank"><img src="{{site.url}}/assets/images/one-million-checkboxes-tweets.jpg" alt="More tweets from Nolen Royalty after One Million Checkboxes went viral" loading="lazy" /></a>

  Neal Agarwal ran into something similar with the success of his game <a href="https://neal.fun/infinite-craft/" target="_blank">Infinite Craft</a>.

  <a href="https://x.com/nealagarwal/status/1757437669594771780" target="_blank"><img src="{{site.url}}/assets/images/infinite-craft-tweets.jpg" alt="Tweets from Neal Agarwal after Infinite Craft went viral" loading="lazy" /></a>
</figure>

I've had little tastes of these experiences and they were stressful. Making these decisions while it feels like everyone is watching and your reputation is on the line is a lot of pressure!

Frankly, this is one reason why I've spent so much of my creative energy on projects without a backend component (like [After Dark in CSS](bryanbraun.github.io/after-dark-css/), [Bouncy Ball](https://sparkbox.github.io/bouncy-ball) or [Checkboxland](https://www.bryanbraun.com/checkboxland/)). Client-side code is easier to scale and I *already know how to do it*. It's simply less risky.

But that comes at a cost. One Million Checkboxes simply could not have been built as a client-side-only app. If I had come up with the idea for One Million Checkboxes, would I have ruled it out because of it's backend component? Would I have been too afraid to try it?

You can do a lot, artistically, with client-side only apps. I wanted to believe that client-side only was good enough. But projects like One Million Checkboxes give evidence to the contrary. What if the space of server-enhanced creative projects is significantly under-explored simply because of the additional risk? If I got good at navigating the scaling gauntlet, would I be able to uncover a lot of opportunities?

Scaling backend stuff isn't magic—Nolen's post showed that. I can figure out how to write Go, network instances, and rate-limit IPs. Maybe it's time that I try.

<hr class="section-divider" />

<small>* If I'm being rational, then even a worst-case-scenario probably wouldn't "bankrupt" me, but fears are seldom rational.</small>
