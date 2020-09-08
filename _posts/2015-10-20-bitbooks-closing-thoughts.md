---
title: "Bitbooks: Closing Thoughts"
date: 2015-10-20 08:08:38
related: [
  "Publishing Books to Github pages with Bitbooks",
  "Gridmaster: Closing Thoughts"
]
---

A month ago, I posted this noticed onto [the homepage at bitbooks.cc][1].

 [1]: https://web.archive.org/web/20150915034729/http://bitbooks.cc/

> All good things must come to an end, and so it is with this.
> On October 8th 2015, I'll be shutting down Bitbooks for good.
>
> **The Why.**
>
> When I began working on Bitbooks, there were basically no options for developers to publish online books with Developer tools like Markdown and Github. Since then, many existing options (like [LeanPub][2]) have matured while new ones (like [Gitbook][3] & [OReily Atlas][4]) have sprung up. As these options grew, I realized that their funding and ability to iterate would provide users with a better result than I could. As a result, my motivation fell, and I began to divide my attention between competing priorities. Honestly, Bitbooks has been in a sort of maintenance mode for several months, faithfully providing it's services without receiving any updates. That isn't fair for to you. Rather than delay the inevitable, I feel it's best to close it down now, allowing me to give my full attention to other projects.
>
> **What does this mean for users?**
>
> All books created with Bitbooks will remain safely hosted in your Github repositories. However, Bitbooks will no longer  update your online book websites in response to text updates in your repo.
>
> You have options though. With Markdown becoming ubiquitous, you can use your repo to launch your book on a different service (like [Gitbook][3] or [LeanPub][2]). You may also know that the site-building tool behind Bitbooks was released as the open source project Franklin. If you have some ruby experience, you can still use Franklin to create local builds of your books and put together your own publishing workflow.
>
> I started this project wanting to empowering developers to publish simple, attractive, books as easily as they publish code. In the 2+ the years that elapsed since then, you've used Bitbooks to create hundreds of books in various languages. It's been exciting and humbling to see it being used for things I couldn't imagine. Thanks for joining me on the journey.
>
> : Bryan

 [2]: https://leanpub.com/
 [3]: https://www.gitbook.com/
 [4]: https://atlas.oreilly.com/

I had some additional comments which I felt would be better to give here on my blog.

## Opening the Codebase

Knowing that I'd be closing this project for good, I thought it would be a nice gesture to take the entire Bitbooks codebase and put it up on Github. I released it as two repos: [bitbooks.cc][5] and [bitbinder][6]. Both are Sinatra apps. Bitbooks.cc was the main website, responsible for the main CRUD application. Bitbinder was a static site generator wrapped in an API so bitbooks.cc could call upon it to generate static books on demand. If you were ambitious enough, you could take these two repos and restart Bitbooks tomorrow on your own servers. I even fleshed out the READMEs to explain how you'd go about doing that.

 [5]: https://github.com/bitbooks/bitbooks.cc
 [6]: https://github.com/bitbooks/bitbinder

I don't expect these repos to be useful to anybody. Still, I figure, why not just put them up there? Maybe I can use them as a reference for future projects. Maybe somebody else can learn something from them. If not, I can at least feel good about following the principle to [default to transparency][7].

 [7]: http://joel.is/why-we-have-a-core-value-of-transparency-at-our-startup/

## Success and Failure

It's funny, you hear about people not taking on projects because they are afraid of failure. But success and failure are a false dichotomy. The world is too messy for a binary distinction between success and failure. Bitbooks was an experiment, one that, in retrospect, was successful at all the most important things.

It compelled me to learn an wide range of technical solutions. When I started Bitbooks, I knew how to write HTML & CSS, use version control, and piece together Content Management Systems. That was it.

Bitbooks forced me to learn Ruby, evaluate static sites, develop against Github APIs, set up OAuth, set up Logins, build an MVC crud application, set up a queuing system, architect a database, migrate a database, setup a deployment workflow, learn Docker, and develop a host of other important technical and nontechnical skills. It was a pain. It took way too long. But I powered through, because I had to.

And that right there, is really the valuable part. Knowing Ruby is nice, but more important is knowing through experience that I can take a problem outside of my current technical skillset, and fight my way to a solution.

Doing these things, making it through [the dip][8], and shipping a live useful service, helped me cross an invisible barrier. I was no longer in the group of people who talk about ideas, nor was I in the group who start working on projects, only to have them end up collecting dust, half-finished on the shelf. I was among the shippers. And if I can do it once, then I can do it, really, whenever I really want to. That's an empowering thought.

 [8]: https://en.wikipedia.org/wiki/The_Dip

Out of my work came several components that I was able to release independently as open source. Some of these projects eclipsed the success of Bitbooks. In fact, 4 of my top 5 projects on Github came out of my work on Bitbooks.

Finally, my newfound skills (and the projects that spawned out of them) qualified me to take an incredible job at [Sparkbox][9], where they pay me real money to learn and grow these skills even more.

 [9]: http://seesparkbox.com/

For me, Bitbooks was a [critical moment][10] and a stepping stone to more ambitious pursuits.

 [10]: http://www.bryanbraun.com/2011/02/27/fear-and-the-critical-moment
