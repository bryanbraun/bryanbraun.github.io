---
title: "Publishing Books to Github pages with Bitbooks"
date: 2014-04-02 21:19:48
related: [
  "Bitbooks: Closing Thoughts"
]
---

As a web developer, my education has been strongly influenced by information that was freely shared and published online by those who came before me. I read Mark Pilgram's [Dive into HTML 5][1], Jonathon Snook's [SMACSS][2], and [Why's Poignant Guide to Ruby][3]. Each of these books was written by a developer, and in the spirit of open source, they were published online so everyone in the community could benefit. I thought it was noble and generous, and I wasn't alone. Thousands read these books and the developers went on to become leaders in their respective communities.

[1]: https://web.archive.org/web/20171222020853/http://diveintohtml5.info/
[2]: http://smacss.com/
[3]: http://mislav.uniqpath.com/poignant-guide/

Anyone could publish a book like this (indeed, [several of you have][4]), but the barriers are formidable. Instead of just writing the book (which is challenging enough), you'd also have to build the website, do you own design work, get hosting, and provide ongoing maintenance. If you want any special functionality, like the ability to download it in various formats, or support for translated versions, you'd be on your own to build and maintain the tooling to do that.

[4]: https://github.com/vhf/free-programming-books/blob/master/free-programming-books.md

Enter Bitbooks

<p style="text-align: center;">
  <a href="http://bitbooks.cc/"><img alt="" src="/assets/images/bitbooks-logo-long-sm.png" /></a>
</p>

I'm currently working on a project called [Bitbooks][5], which aims to make that whole process easier. Bitbooks will be a service that allows developers of any experience level to write and publish a copy of their book online.

[5]: https://web.archive.org/web/20150915034729/http://bitbooks.cc/

## How it works

If you've ever used [Github pages][6], then you already know how it works.

[6]: https://pages.github.com/

You write your book in Markdown, put the files on Github, and point Bitbooks at your repo. Bitbooks will then read the files and use them to build a tastefully designed website -- an online version of your book. This site is pushed to Github pages, which provides free hosting and the ability to use your own domain name. If any updates are made to your content repository, Bitbooks will update your site on Github pages automatically. This lets you make updates or accept changes via pull requests without having to worry about constantly updating your site.

Like Github pages, Bitbooks will provide you with a choice of themes you can use. Here's an early look at what I have in the works:

<p style="text-align: center;">
  <a href="/assets/images/glide-screenshot.png"><img alt="Glide Theme" src="/assets/images/glide-screenshot-sm.png" /></a>
</p>

<p style="text-align: center;">
  <a href="/assets/images/epsilon screenshot.png"><img alt="Epsilon Theme" src="/assets/images/epsilon-screenshot-sm.png" /></a>
</p>

<p style="text-align: center;">
  <a href="/assets/images/epsilon%20screenshot%202.png"><img alt="Epsilon Theme" src="/assets/images/epsilon%20screenshot%202.png" /></a>
</p>

[ ][7]

[7]: /assets/images/epsilon%20screenshot%202.png

<p style="text-align: center;">
  <a href="/assets/images/hamilton screenshot.png"><img alt="Hamilton Theme" src="/assets/images/hamilton-screenshot-sm.png" /></a>
</p>

Of course, all themes will be fully responsive.

<p style="text-align: center;">
  <a href="/assets/images/bitbooks-mobile-sizes.png"><img alt="Responsive Themes" src="/assets/images/bitbooks-mobile-sizes-sm.png" /></a>
</p>

From a feature perspective, I'm heavily influenced by what I consider to be the best implementation of an online book: Scott Chacon's [Pro Git][8]. Everything about it, from its SEO awareness to its support for downloads in multiple formats are examples to me of what a well implemented build could produce for you.

[8]: http://git-scm.com/book

## Why it works

If you're a technical author, then Github is the ideal place for your book, because that's where your audience is. Just look at Getify's [You Don't Know JS][9] or Addy Osmani's [Developing Backbone.js Applications][10]. Putting their book content on Github lets them write iteratively, get feedback, and collaborate with others. They can go straight to the community instead of working to persuade the community to come to them.

[9]: https://github.com/getify/You-Dont-Know-JS
[10]: https://github.com/addyosmani/backbone-fundamentals

Everything about this authoring process is designed to put you in control. You don't need to create another login or put your stuff in another walled garden. Your content is yours. Your site is yours. If you wanted to use Bitbooks to generate living documentation for your open source project, you could do it. If you wanted your community to collaborate on a written collection of best practices, you could do it. If you want to write fiction you could do it. It's all up to you.

## The Open Source Way

This project is founded on the principle that open source makes everything better. Books like [Pro Git][8], and [PHP the Right Way][11] have such a wide impact because they give away information freely, opening up the content and source code for anybody to use and share. Paradoxically, the physical versions of these books continue to sell very well.

[11]: http://www.phptherightway.com/

So, in the spirit of open source, I'll be releasing the static site framework that runs Bitbooks as an open source project called "Franklin."

<p style="text-align: center;">
  <img alt="" src="/assets/images/franklin_0.png" />
</p>

If [Octopress][12] is a static site framework, optimized for blogs, then Franklin will be a static site framework optimized for books. I'll have more details coming soon, so <a href="http://eepurl.com/ROwbb" target="_blank" rel="noopener noreferrer">subscribe here</a> if you want to stay in the loop.

[12]: http://octopress.org/

## Progress

I don't believe in [The Big Reveal][13], and that's why I'm talking about this now, while the project is in the building phase. After a couple months of weekend work, I think I'm about 60-70% of the way to an alpha launch. The first round of sites will be made by invitation only, so [tell me][14] if you want to participate (and if you do, I will hook you up).

[13]: https://en.wikipedia.org/wiki/Lean_startup#Philosophy
[14]: mailto:bbraun7@gmail.com

If you're still reading then you probably have some interest in a project like this, so in closing, I have a favor to ask of you: **Tell me what you think**

Would you use something like this? Is it missing something? [Shoot me an email][14], and help me know if I'm on the right track. You could also <a href="https://twitter.com/share?text=%40BryanEBraun%2C%20&url=" target="_blank" rel="noopener noreferrer">tweet at me</a> or leave comments below. However you do it, just say what you're thinking. The more good feedback I get on where this ought to go, the better it will turn out.

And with that, I'll get back to work. With the right tools in place, I believe we can kick off a whole new series of great books and documentation to the benefit of our various technical communities. Let's build something cool, together.
