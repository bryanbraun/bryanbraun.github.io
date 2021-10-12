---
title: "I keep making things out of checkboxes"
date: 2021-09-21
related: [
  "Checkboxland",
  "The Cure for Boredom is Superpowers"
]
---

Something happened earlier this year where I got on a run making checkbox animations and just couldn't stop.

A bit of background: back in pre-pandemic 2020, I went to [the Recurse Center](https://www.recurse.com/) for a week and built [Checkboxland](https://www.bryanbraun.com/checkboxland/), a JavaScript library that lets you display text and animations on a checkbox grid. It was a fun little project. I made some demos, [blogged about it]({{site.url}}/2020/06/06/checkboxland/), and ultimately put it on the shelf where I didn't touch it for about a year.

Eventually, I was feeling desperate for a fun coding diversion so I picked it back up again. I wanted to try making better and more complex animations so I started building a ripple effect, and got hooked.

## Mathematical Animations

<figure class="center">
  <img src="{{site.url}}/assets/images/cbl-ripple.gif" loading="lazy" alt="A ripple animation made with html checkboxes." />
  <figcaption>The ripple animation. See <a href="{{site.url}}/2021/04/15/ripple-animation-in-javascript/">my write-up about ripples</a> for more details.</figcaption>
</figure>

Building the ripple forced me to dig into some animation math. I soon realized that I could use similar techniques to build other animations, including these ones:

<p class="center">
  <img src="{{site.url}}/assets/images/cbl-spiral.gif" loading="lazy" alt="A spiral animation made with html checkboxes">
</p>

<p class="center">
  <img src="{{site.url}}/assets/images/cbl-pinwheel.gif" loading="lazy" alt="A pinwheel animation made with html checkboxes">
</p>

<p class="center">
  <img src="{{site.url}}/assets/images/cbl-circles.gif" loading="lazy" alt="A checkerboard animation made with html checkboxes">
</p>

Whenever I'd show someone an animation like this, they'd often try to click the checkboxes to see what would happen. This never did anything—the animation would just override their clicks.

That was pretty disappointing, so I wanted to try making animations that responded to clicks.

## Interactive Animations

<figure class="center">
  <img src="{{site.url}}/assets/images/cbl-lasers.gif" loading="lazy" alt="A laser animation made with html checkboxes." />
  <figcaption>A "laser" animation. <a href="https://www.bryanbraun.com/checkboxland/docs/demos/lasers/">Try it here</a>.</figcaption>
</figure>

<figure class="center">
  <img src="{{site.url}}/assets/images/cbl-pulse.gif" loading="lazy" alt="A pulse animation made with html checkboxes." />
  <figcaption>A "pulse" animation. <a href="https://www.bryanbraun.com/checkboxland/docs/demos/pulse/">Try it here</a>.</figcaption>
</figure>

The more interactive demos I made, the more ideas I had. I could make games! [Snake](https://www.bryanbraun.com/checkboxland/docs/demos/snake/), Pong, Tetris!

But before I got too far down that path, another thought caught hold in my mind. If I could display any image, then I wouldn't have to go through the laborious process of defining every checkbox manually or coming up with an algorithm for the scene I wanted.

## Images

Converting images seemed tricky so I sat on the idea for while until I came across [this excellent article on converting images into ASCII text](https://www.jonathan-petitcolas.com/2017/12/28/converting-image-to-ascii-art.html). A short while later I was converting images:

![The Nike logo displayed side-by-side with an html checkbox version]({{site.url}}/assets/images/cbl-nike.png)

![The Apple logo displayed side-by-side with an html checkbox version]({{site.url}}/assets/images/cbl-apple.png)

I soon realized that converting images gets you 90% of the way to converting video so that became my next task.

## Videos

<figure class="center">
  <img src="{{site.url}}/assets/images/cbl-video.gif" loading="lazy" alt="A video animation displayed side-by-side with an html checkbox version." />
  <figcaption>An mp4 video (left) powering a checkbox animation (right). <a href="https://www.bryanbraun.com/checkboxland/docs/demos/video-test/">Try other videos (or upload your own) here</a>.</figcaption>
</figure>

Soon I had extended the Checkboxland API so I could load any video (like ones from [giphy](https://giphy.com/)) and instantly generate a checkbox version. Now checkbox animations were trivial.

This also meant I could display webcam data, which got a lot of attention on Twitter when I shared it:

<blockquote class="twitter-tweet" data-dnt="true">
  <p lang="en" dir="ltr">I made a webcam filter out of html checkboxes.<br><br>Try it out here: <a href="https://t.co/1lBHfEgmhw">https://t.co/1lBHfEgmhw</a> <a href="https://t.co/tZrFOg3PWl">pic.twitter.com/tZrFOg3PWl</a></p>&mdash; Bryan Braun (@BryanEBraun) <a href="https://twitter.com/BryanEBraun/status/1435955497358741506?ref_src=twsrc%5Etfw">September 9, 2021</a>
</blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Finally, my co-worker Reed told me about a challenge where people try to play the animated video "Bad Apple" on various obscure computing environments (see [a bunch of examples here](https://www.youtube.com/playlist?list=PLajlU5EKJVdonUGTEc7B-0YqElDlz9Sf9)). It sounded fun so I went ahead and put together a youtube video for that.

<figure class="center">
  <iframe width="640" height="360" src="https://www.youtube.com/embed/ZGvXdYXami4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <figcaption><a href="https://www.bryanbraun.com/checkboxland/docs/demos/bad-apple/">Play the in-browser version here</a>.</figcaption>
</figure>

<hr class="section-divider" />

This whole process has been fun but I really ought to stop.

I got [nerd sniped](https://xkcd.com/356/), hard. Sure it's harmless fun, but I'm starting to feel guilty spending months tinkering on these things when I've got the tools and skills to put actually useful stuff into the world. [I feel like Superman]({{site.url}}/2018/02/18/the-cure-for-boredom-is-superpowers/), using his powers to fry an egg.

Plus, if I keep doing this then I'm going to end up known as "the checkbox guy." That's not exactly marketable but I guess it could be worse.

Fortunately, it feels like I'm starting to exhaust the interesting things I could build in this format. At some point it's like "dude, we get it, you can make anything with checkboxes." I still have a few lingering ideas though... maybe it's like a controlled forest fire and I should just let myself keep making these things until it burns itself out.
