---
title: "Writer: A Blogging Theme for Developers"
date: 2013-01-19 20:30:47
related: [
  "Tips for Setting up Writer",
  "Writer: Customizing the default front page",
  "Writer Block Regions",
  "New in Writer 2.1",
  "We're on Drupal 8!"
]
---

I'm happy to introduce <a href="http://drupal.org/project/writer" title="Writer: A Blogging Theme for Developers">Writer, a Drupal theme</a> designed for developers who blog.

![][1]

 [1]: /assets/images/writer-post-2.png

The story is quite simple. I am a <a href="http://bryanbraun.com/who-is-bryan">front-end developer</a> who blogs. I searched the Drupal theme repository, but I was unable to find a blogging theme designed specifically for developers. So I made one.

This theme was designed using three driving principles:

* Brutally simple design
* Fantastic typography
* Support for code snippets

These principles guided me through the trade-offs and helped me make various design decisions. Let's get into the details.

<h2 id="brutally-simple">Brutally simple design</h2>

Developers have different needs than other bloggers. They don't need sponsors or advertisements. They don't need dancing emoticons or <a href="http://wordpress.org/extend/themes/chinese-love" title="Behold... it exists.">pink text on a purple background</a>. They need... well, I wasn't exactly sure what they needed. So I began asking them.

Design-wise, the answer was always "something simple." Basic. Clean. As I continued my research, I looked up the blogs of many prolific developers to see what designs they used. Lo, and behold, the pattern was the same: "something simple."

* <a href="http://veen.com/jeff/">Blog of Jeffrey Veen</a> - Designer, author, past employee for Google, and Adobe. Founder at Typekit, Adaptive Path, Wired Magazine, and <a href="http://aneventapart.com/speakers/jeffrey-veen?/speakers/jeffveen/">others</a>. Seriously, he invented, like, half the internet.
* <a href="https://web.archive.org/web/20121206144518/http://evhead.com/">Blog of Evan Williams</a> - Created two of the Internet's top ten websites (Blogger and Twitter), among other projects. His "something simple" design preference is also evident on the website of his newest startup, <a href="https://medium.com/what-i-learned-building/4191574378">Medium</a>.
* <a href="http://www.markboulton.co.uk/journal">Blog of Mark Boulton</a> - Top designer, author, conference speaker, publisher. He founded a <a href="http://www.markboultondesign.com/" title="Mark Boulton Design">design studio in his name</a>. Need I say more?
* <a href="https://web.archive.org/web/20130713123126/http://blog.nickd.org/">Blog of Nick Disabato</a> - An accomplished designer and publisher.
* <a href="http://37signals.com/svn">The 37 Signals Blog</a> - Official blog of an influential software company, highly regarded for it's success and <a href="http://37signals.com/rework" target="blank">refreshing attitudes about business</a>.
* <a href="http://www.coderholic.com/">Blog of Ben Dowling</a> - Engineer at Facebook, iPhone developer and founder of <a href="http://www.coderholic.com/about/">other projects.</a>
* <a href="http://nicolasgallagher.com/">Blog of Nicholas Gallagher</a> - Front-end engineer at <a href="http://twitter.com">Twitter</a> and [open source contributor][2].

 [2]: http://nicolasgallagher.com/about/

... and others like the blogs for <a href="http://lucumr.pocoo.org/" target="_blank" rel="noopener noreferrer">Armin Ronacher</a>, <a href="http://bclennox.com/" target="_blank" rel="noopener noreferrer">Brandan Lennox</a>, <a href="http://wynnnetherland.com/archives" target="_blank" rel="noopener noreferrer">Wynn Netherland</a>, <a href="http://daneden.me/blog/" target="_blank" rel="noopener noreferrer">Daniel Eden</a>, <a href="http://opensoul.org/" target="_blank" rel="noopener noreferrer">Brandon Keepers</a>, <a href="http://frankchimero.com/blog/" target="_blank" rel="noopener noreferrer">Frank Chimero</a>, and <a href="http://geoff.greer.fm/" target="_blank" rel="noopener noreferrer">Geoff Greer</a>.

After checking out those designs and being sufficiently inspired, I brought my favorite attributes from all of them into Writer. Some of those attributes were:

* Three-tone color Palette: #F7F7F7, #888888, #292929 (There's just something nice about nearly-black on nearly-white)
* Single column layout. Say no to sidebars.
* The golden ratio (1:1.62) was used for font and line-height relationships.

<h2 id="typography">Fantastic Typography</h2>

On a design this simple, the typography is extremely important. This theme uses three fantastic fonts:

* <a href="http://www.google.com/webfonts/specimen/Merriweather" target="_blank" rel="noopener noreferrer">Merriweather</a> - slab serif (titles and body text), by <a href="https://plus.google.com/106288796449831139244" target="_blank" rel="noopener noreferrer">Eben Sorkin</a>
* <a href="http://www.google.com/webfonts/specimen/Lato" target="_blank" rel="noopener noreferrer">Lato</a> - sans serif (header, footer, and dates), by <a href="https://plus.google.com/106163021290874968147" target="_blank" rel="noopener noreferrer">Lukasz Dziedzic</a>
* <a href="http://www.google.com/webfonts/specimen/Inconsolata" target="_blank" rel="noopener noreferrer">Inconsolata</a> - monospace (code snippets), by <a href="http://levien.com" target="_blank" rel="noopener noreferrer">Raph Levien</a>

These fonts are all hosted by Google Fonts and it's almost embarrassing how much time I put into finding and selecting them. Huge thanks to these font builders who chose to share their craft free of charge. I'm really pleased with the result.

<h2 id="code-snippets">Support for Code Snippets</h2>

If you had 4 hours to dig around through Drupal contributed modules and third party libraries, you could figure out a way to get styled code snippets on your site. But you don't have that kind of time, so Writer comes with 4 code styles out of the box. Just go to the theme's settings (at `/admin/build/themes/settings/writer` for Drupal 6, and `/admin/appearance/settings/writer`, for Drupal 7) and select the one you want.

![Image showing theme settings for code snippets][3]

 [3]: /assets/images/theme-settings.png

This table shows what each style looks like for blocks of code (left) and for inline code (right).

<img alt="Image showing examples of the four code snippet styles" src="/assets/images/writer-style-choices3.png" />

To invoke the style when you are blogging, wrap blocks of code in "pre" tags or wrap inline code with "code" tags.

<img alt="Image showing examples of how to render styled code snippets" src="/assets/images/code-snippets.png" />

That's all there is to it.

## A higher purpose.

There are <a href="http://www.garfieldtech.com" target="_blank" rel="noopener noreferrer">many</a> <a href="http://www.davereid.net/taxonomy/term/6/0" target="_blank" rel="noopener noreferrer">great</a> Drupal developers who continue to use Garland or Bartik (the default Drupal themes) as the theme for their blog. These themes are fine but they were never designed to be used for a blog (not to mention that some would say their overuse has made them tacky). I don't blame them... their alternative options are <a href="http://drupal.org/files/images/Screenshot%202009-04-25%2010h%2024m%2037s.png" target="_blank" rel="noopener noreferrer">often bleak</a>. Sometimes when I browse themes at Drupal.org, I feel like I'm browsing the web in 1994.

We developers deserve better.
