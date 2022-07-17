---
title: "Scratch is a big deal"
date: 2022-07-16
related: [
  "The Powder Toy",
  "Online Tools for Creative Kids",
  "The unique power of games in building intuition"
]
---

While none of us were paying attention, [Scratch](https://scratch.mit.edu/) has transformed from a programming language for kids to a massive online community of self-guided, student-programmers. Usage has [doubled]({{site.url}}/2022/07/16/scratch-is-a-big-deal/#scratch-at-scale) since the pandemic started and the language is [now overtaking "real" programming languages (like Typescript and Rust) in language popularity rankings](#rankings).

Scratch is a big deal.

If you've heard of Scratch, you likely know that it's a programming language for kids that uses visual blocks like these:

![Visual coding blocks from the Scratch programming language]({{site.url}}/assets/images/scratch-coding-blocks.png)

Like many pandemic parents, I recently introduced it to my kids. Over time, it started to catch hold and I realized that there was more beneath the surface. I decided to take a closer look and this is what I found.

## More than a programming language

Scratch is an online programming environment, hosted at [scratch.mit.edu](https://scratch.mit.edu). It uses a visual editor that looks like this:

![Visual editor for making Scratch programs at scratch.mit.edu]({{site.url}}/assets/images/scratch-programming-interface.png)

The language and editor are tailored towards making games, animations, stories, and other visual things. Scratch users (Scratchers) can create and save projects to their account and share their projects publicly.

Sharing projects is where things get interesting. Scratch isn't just a language—it's a community.

The Scratch website makes it easy to browse other people's projects, "love" and "favorite" them, add comments, view source, and remix them as your own. You can follow other users and work together to curate collections of projects called "studios" (which can also be followed and commented on).

In this way, it's kind of like Github or Codepen, except that Scratch is for kids. The age distribution of new Scratchers peaks at 12, with the majority under 16:

![A histogram, showing that the most common age for new scratch users is 12]({{site.url}}/assets/images/scratch-age-distribution.png)

It was the community aspects that really drew in my kids. They would get really excited whenever somebody followed them or "loved" one of their projects. It gave them the motivation to build more ambitious things.

It's pretty impressive how ambitious the projects get. Scratchers often build copycats of "real" games like [Cut the Rope](https://scratch.mit.edu/projects/669250336/), [Super Mario Bros](https://scratch.mit.edu/projects/196684240/), and [Terraria](https://scratch.mit.edu/projects/322341152/). Features like cloud variables allow them to make online multiplayer games, like [Taco Burp](https://scratch.mit.edu/projects/478790208) (popular in my house):

<figure class="center">
  <img src="{{site.url}}/assets/images/taco-burp.gif" loading="lazy" alt="A player attempts to eliminate other players by burping tacos at them." />
  <figcaption>Me, taking out 9-year-olds, like a total boss.</figcaption>
</figure>

Someone even built Scratch inside of Scratch 😱

<figure class="center">
  <img src="{{site.url}}/assets/images/scratch-inside-of-scratch.png" loading="lazy" alt="A scratch-like programming interface embedded inside of the scratch editor." />
  <figcaption>It was only a matter of time.</figcaption>
</figure>

Seeing projects like these was a "wow" moment for me. Scratchers were building projects that rivaled the best things I had seen on Codepen. All in a visual programming language for kids!

Beyond the editor, there are a bunch of other resources that help kids be productive:
- The Scratch website provides tutorials, a [wiki](https://en.scratch-wiki.info/), and [discussion forums](https://en.scratch-wiki.info/wiki/Discussion_Forums) that kids often use to ask questions and help each other when they get stuck.
- The [REST APIs](https://en.scratch-wiki.info/wiki/Scratch_API) enable third-party tooling like [Turbowarp](https://turbowarp.org/)—a parallel site that can [run Scratch projects 20x faster](https://docs.turbowarp.org/how).
- The [Scratch desktop application](https://scratch.mit.edu/download) lets you develop Scratch projects offline.
- The [ScratchJr](https://www.scratchjr.org/) tablet app provides a simplified version of the Scratch editor for young children (ages 5-7).

So, no, Scratch isn't just a programming language. It's an ecosystem of apps, resources, and community features for giving kids a positive first experience with programming. And it's downright impressive.

## Scratch at scale

Like many online activities, Scratch usage grew during the pandemic, but unlike others, it's not slowing down:

<figure class="center">
  <a href="https://scratch.mit.edu/statistics/#active-users">
    <img src="{{site.url}}/assets/images/scratch-monthly-active-users.png" loading="lazy" alt="A graph showing monthly active users on scratch.mit.edu growing consistently since 2012" />
  </a>
  <figcaption>Notice that there's a cyclical usage pattern that follows the school year. It peaks in the spring and the dips in the summer, which gives us an idea of how much Scratch usage can be attributed to use in school.</figcaption>
</figure>

<p id="rankings">This recent growth has caused Scratch to <a href="https://twitter.com/mres/status/1248214290076753922">break into the Tiobe index's top 20 most popular programming languages</a>. At the time of this post (July 2022) <a href="https://web.archive.org/web/20220713222515/https://www.tiobe.com/tiobe-index/">it ranks 21st</a>, above Typescript, Rust, Julia, and other important languages. The Tiobe index is imperfect but there's clearly something happening here.</p>

With this new popularity, Scratchers like [Griffpatch](https://scratch.mit.edu/users/griffpatch/), [Will_Wam](https://scratch.mit.edu/users/Will_Wam/), and others have become mini-celebrities, collecting hundreds of thousands of followers on scratch.mit.edu and other platforms (Griffpatch has 175k+ subscribers on [his Youtube channel](https://www.youtube.com/c/griffpatch) where he posts Scratch tutorials on gamedev topics like background-scrolling and raycasting).

You can find more statistics on the [community statistics page](https://scratch.mit.edu/statistics/) and in the [Scratch Annual Report](https://scratch.mit.edu/annual-report). By every measure you can think of, Scratch usage is booming ([worldwide!](https://scratch.mit.edu/annual-report#:~:text=Scratch%20is%20used%20around%20the%20world%20across%20more%20than%20200%20countries%20and%20territories)) and shows no sign of stopping.

## Why (I think) it works

Scratch has a lot of good things going for it.

It's free (thanks to the [Scratch Foundation](https://www.scratchfoundation.org/supporters)) and the tutorials provide a gentle on-ramp, making it easy to adopt in school and at home.

The platform has strong [community guidelines](https://scratch.mit.edu/community_guidelines) and it's well moderated (at least my family hasn't run into any sketchy content yet).

Most importantly, browsing projects shows you what's possible. A kid begins by playing games, starts to get curious, and next thing you know, they're changing the code to give themselves extra lives.

This didn't come out of nowhere. It's the realization of over 50 years of effort from programmers and educators, standing on the shoulders of giants like [Logo](https://el.media.mit.edu/logo-foundation/what_is_logo/logo_and_learning.html) and [LEGO Mindstorms](https://en.wikipedia.org/wiki/Lego_Mindstorms). Look up [constructionism](https://en.wikipedia.org/wiki/Constructionism_(learning_theory)) if you're curious!

If you care about programming education and you're looking for a good cause to donate to, I think you'd be hard-pressed to find something better.

And if you know someone young who's interested in programming, tell them about Scratch. Let them play user-created games for awhile. The source code is just a single click away.
