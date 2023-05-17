---
title: "What I've been working on"
date: 2014-06-21 14:52:28
---

I've had my head down working for a little while, and today I'm coming up for air to talk a little bit about what I've been working on.

I've been making [Bitbooks][1], THE tool for building online books from Github.

 [1]: https://web.archive.org/web/20150915034729/http://bitbooks.cc/

By online books, I mean books like [Pro Git][2], [Dive into HTML5][3] and and [Git from the Bottom Up][4] (which was built with Bitbooks). The common thread behind these examples is that you don't have to pay to "get access." The full book is accessible online to anybody with a laptop or mobile device. They were written to teach a technical topic, and the information was given away freely, under a [Creative Commons][5] license for the benefit of all.

 [2]: http://git-scm.com/book
 [3]: http://diveintohtml5.info/
 [4]: https://jwiegley.github.io/git-from-the-bottom-up/
 [5]: http://creativecommons.org/

Isn't that great?

I think so, and I want to see more of that. But making a book like "Pro Git" is actually quite a bit of work... not just the writing but buidling a technology stack that can manage both community collaboration and publishing the site online. I wanted to remove some of that [friction][6]. 

 [6]: http://www.bryanbraun.com/2013/07/16/friction-is-a-tool

I thought, why not use Github for collaboration, and Bitbooks for publishing?

With Bitbooks, you can push Markdown content up to Github, and it will build a website containing the content of your book, hosted for free on [Github Pages][7]. Then you just collaborate on the Github content, and let Bitbooks update your online site every time you make a change.

 [7]: https://pages.github.com/

For developers, that's a killer authoring workflow. For non-developers, not so much.

And that's ok.

There is a lot going on with online authoring right now. It's dizzying. There are going to be interesting solutions with their own interfaces and workflows for all sorts of people.

Bitbooks is just for developers who want to collaborate on Github. Period.

And that's good because if you're a developer, Github is where your readers are. If you manage an open source project, then Github is where your community is. You don't want your technical book in somebody else's walled garden when you could put it out in the open, managing the material just like you would an open source project.

And I'm not the only person who believes this. There are already plenty of examples of [writing projects showing up on Github][8]. The missing piece has been turning this content into a reader friendly format. A thoughtfully-designed mobile-friendly site, with pagination, a table of contents, and everything you've come to expect when reading a book. Bitbooks bridges that gap.

 [8]: https://github.com/showcases/writing

In the coming weeks I'll be sharing some of the things I learned while putting this together. I'll be posting about [Markdown][9], [Docker][10], [static sites][11], and more (you should subscribe via [RSS][12] or [Email][13] if those topics interest you). But ultimately it's not about the tools... [it's about what you do with them][14].

 [9]: http://daringfireball.net/projects/markdown/
 [10]: http://www.docker.com/
 [11]: http://www.staticgen.com/
 [12]: /rss.xml
 [13]: https://eepurl.com/dcTne5
 [14]: http://sethgodin.typepad.com/seths_blog/2014/06/micro-marketing-and-the-called-bluff.html

I'm looking forward to seeing what you do with Bitbooks.
