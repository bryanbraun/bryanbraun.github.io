---
title: "Checkboxland"
date: 2020-06-06
related: [
  "I keep making things out of checkboxes",
  "Music Box Fun",
  "Introducing Bouncy Ball: A TodoMVC for Web Animation",
  "The best conference I ever attended"
]
---

[Checkboxland]({{site.url}}/checkboxland) is a JavaScript library I recently built for rendering text, animations, and *pretty much anything*, using only HTML checkboxes.

<div class="center">
  <a href="{{site.url}}/checkboxland">
    <img src="{{site.url}}/assets/images/cbl-demos.gif" alt="A marquee animation, and some other demos, built with Checkboxland" />
  </a>
</div>

I just released a new version so I wanted to take this opportunity to share a bit of the history and motivation for the project.

## The Sparkbox hack-night

Last November [I organized a hack-night](https://twitter.com/cromwellryan/status/1195178065137217538) as part of the [Sparkbox](https://seesparkbox.com) company all-hands week.

As we were about to start the event, I had a conversation with [Rob](https://twitter.com/robtarr) about a sign near our office. The sign was built with black and white "mechanical pixels" which would flip to display text and animations. Here's a short video showing the sign:

<iframe width="640" height="360" src="https://www.youtube.com/embed/eRgpd-r43l8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

When I realized that you could make something similar using html checkboxes, I knew I had the perfect hack-night project. After three hours, and a bunch of help from my friend [Yosevu](https://twitter.com/yosevu), we had a working digital clock made out of html checkboxes.

It was a fun thing to work on, but my brain wouldn't let go. A clock is nice, but theoretically, you could build *anything* this way. Right?

## Recurse center

In some ways, building the clock was awkward. You had all these checkboxes to manage, and it was tricky to display them correctly and consistently across various web browsers. Checkboxes weren't exactly designed for this.

I kept thinking of all these animations you could make, but it needed to be easier. If only there was a library that could help with this...

I soon had an opportunity to spend a week at [The Recurse Center](https://www.recurse.com/), so I decided to use that time to work on it. It was funny talking to my peers there... everyone else was doing these impressive-sounding things like building a neural network or reverse-engineering a compiler. And there I was, playing with HTML checkboxes. 🙃

Anyway, that project became Checkboxland, and it has allowed me to rapidly spin up demos and see what I could make. For example, these scannable checkbox QR Codes:

<blockquote class="twitter-tweet">
  <p lang="en" dir="ltr">It&#39;s Friday night so of course I&#39;m eating cookie dough and making a QR code out of html checkboxes that always tells you the current time.<a href="https://t.co/ZNjG0SWAce">https://t.co/ZNjG0SWAce</a> <a href="https://t.co/Fywf7FZFpu">pic.twitter.com/Fywf7FZFpu</a></p>&mdash; Bryan Braun (@BryanEBraun) <a href="https://twitter.com/BryanEBraun/status/1264014217063149569?ref_src=twsrc%5Etfw">May 23, 2020</a>
</blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## "A thing that shouldn't exist"

Elon Musk [once said](https://www.youtube.com/watch?v=cIQ36Kt7UVg&t=281) that "One of the biggest traps for smart engineers is optimizing a thing that shouldn't exist."

Well, that's pretty much exactly what I've done here.

And while I'd like to tell myself that it was a good exercise in modern JavaScript or API design, the truth is that I only made it was because I couldn't say no. It was stuck in my brain, itching to come out.

In the future, I hope to spend my time on "more valuable pursuits," but it's been nice having a [weird](https://twitter.com/BryanEBraun/status/1251144894288027648) and fun thing to work on. Sometimes the world needs more weird and fun things.
