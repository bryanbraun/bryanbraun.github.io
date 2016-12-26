---
layout: post
title: "Introducing Writer"
date: 2012-12-01 21:38:55
---

I'm happy to introduce Writer, a Drupal theme designed for developers who blog.

The story is quite simple. I am a <a href="http://bryanbraun.com/who-is-bryan" target="_blank">front-end developer</a> who blogs. I searched the Drupal theme repository, but I was unable to find a blogging theme designed specifically for developers. So I made one.

This theme was designed using three driving principles:

*   Brutally simple design
*   Fantastic typography
*   Support for code snippets

These principles guided me through the tradeoffs and helped me make various design decisions. Let's get into the details.

<h2 id="brutally-simple">
  Brutally simple design
</h2>

Developers have different needs than other bloggers. They don't need sponsors or advertisements. They don't need dancing emoticons or <a href="http://wordpress.org/extend/themes/chinese-love" target="_blank" title="Behold... it exists.">pink text on a purple background</a>. They need... well, I wasn't exactly sure what they needed. So I began asking them.

Design-wise, the answer was always "something simple." Basic. Clean. As I continued my research, I looked up the blogs of many prolific developers to see what designs they used. Lo, and behold, the pattern was the same: "something simple."

*   <a href="http://veen.com/jeff/" target="_blank">Blog of Jeffrey Veen</a> - Designer, author, past employee for Google, and Adobe. Founder at Typekit, Adaptive Path, Wired Magazine, and <a href="http://aneventapart.com/speakers/jeffrey-veen?/speakers/jeffveen/" target="_blank">others</a>. Seriously, he invented, like, half the internet.
*   <a href="http://evhead.com" target="_blank">Blog of Evan Williams</a> - Created two of the Internet's top ten websites (Blogger and Twitter), among other projects. His "something simple" design preference is also evident on the website of his newest startup, <a href="https://medium.com/what-i-learned-building/4191574378" target="_blank">Medium</a>.
*   <a href="http://www.markboulton.co.uk/journal" target="_blank">Blog of Mark Boulton</a> - Top designer, author, conference speaker, publisher. He founded a <a href="http://www.markboultondesign.com/" target="_blank" title="Mark Boulton Design">design studio in his name</a>. Need I say more?
*   <a href="http://blog.nickd.org/" target="_blank">Blog of Nick Disabato</a> - An <a href="http://nickd.org/bio/" target="_blank">accomplished</a> designer and publisher
*   <a href="http://37signals.com/svn" target="_blank">The 37 Signals Blog</a> - Official blog of an influential software company, highly regarded for it's success and <a href="http://37signals.com/rework" target="blank">refreshing attitudes about business</a>.
*   <a href="http://www.coderholic.com/" target="_blank">Blog of Ben Dowling</a> - Engineer at Facebook, iPhone developer and founder of <a href="http://www.coderholic.com/about/" target="_blank">other projects.</a>
*   <a href="http://nicolasgallagher.com/" target="_blank">Blog of Nicholas Gallagher</a> - Front-end engineer at <a href="http://twitter.com" target="_blank">Twitter</a> and [open source contributor][1]

 [1]: http://nicolasgallagher.com/about/

... and others like the blogs for <a href="http://lucumr.pocoo.org/" target="_blank">Armin Ronacher</a>, <a href="http://bclennox.com/" target="_blank">Brandan Lennox</a>, <a href="http://wynnnetherland.com/archives" target="_blank">Wynn Netherland</a>, <a href="http://daneden.me/blog/" target="_blank">Daniel Eden</a>, <a href="http://opensoul.org/" target="_blank">Brandon Keepers</a>, <a href="http://frankchimero.com/blog/" target="_blank">Frank Chimero</a>, and <a href="http://geoff.greer.fm/" target="_blank">Geoff Greer</a>.

After checking out those designs and being sufficiently inspired, I brought my favorite attributes from all of them into Writer. Some of those attributes were:

*   Three-tone color Palette: #F7F7F7, #888888, #292929 (There's just something nice about nearly-black on nearly-white)
*   Single column layout. Say no to sidebars.
*   The golden ratio (1:1.62) was used for font and line-height relationships.

<h2 id="typography">
  Fantastic Typography
</h2>

On a design this simple, the typography is extremely important. This theme uses three fantastic fonts:

*   <a href="http://www.google.com/webfonts/specimen/Merriweather" target="_blank">Merriweather</a> - slab serif (titles and body text), by <a href="https://plus.google.com/106288796449831139244" target="_blank">Eben Sorkin</a>
*   <a href="http://www.google.com/webfonts/specimen/Lato" target="_blank">Lato</a> - sans serif (header, footer, and dates), by <a href="https://plus.google.com/106163021290874968147" target="_blank">Lukasz Dziedzic</a>
*   <a href="http://www.google.com/webfonts/specimen/Inconsolata" target="_blank">Inconsolata</a> - monospace (code snippets), by <a href="http://levien.com" target="_blank">Raph Levien</a>

These fonts are all hosted by Google Fonts and it's almost embarrassing how much time I put into finding and selecting them. Huge thanks to these font builders who chose to share their craft free of charge. I'm really pleased with the result.

<h2 id="code-snippets">
  Support for Code Snippets
</h2>

If you had 4 hours to dig around through Drupal contributed modules and third party libraries, you could figure out a way to get styled code snippets on your site. But you don't have that kind of time, so Writer comes with 4 code styles out of the box. Just go to the theme's settings (at `/admin/build/themes/settings/writer` for Drupal 6, and `/admin/appearance/settings/writer`, for Drupal 7) and select the one you want.

![Image showing theme settings for code snippets][2] 
This table shows what each style looks like for blocks of code (left) and for inline code (right).

 [2]: http://bryanbraun.com/sites/default/files/theme-settings.png

<img width="100%" style="margin: 0px;" src="http://bryanbraun.com/sites/default/files/writer-style-choices3.png" alt="Image showing examples of the four code snippet styles" /> 
You can also see the [live demo here][3].

 [3]: http://writer.bryanbraun.com/blog/code-snippets-demo

To invoke the style when you are blogging, wrap blocks of code in "pre" tags or wrap inline code with "code" tags.

<img width="100%" style="margin: 0px;" src="http://bryanbraun.com/sites/default/files/code-snippets.png" alt="Image showing examples of how to render styled code snippets" /> 
That's all there is to it.

## A higher purpose.

There are <a href="http://www.garfieldtech.com" target="_blank">many great</a> <a href="http://www.dave-cohen.com/node" target="_blank">Drupal</a> <a href="http://ca.tchpole.net/" target="_blank">developers</a> who continue to use Garland or Bartik (the default Drupal themes) as the theme for their blog. These themes are fine but they were never designed to be used for a blog (not to mention that some would say their overuse has made them tacky). I don't blame them too much... their alternative options are <a href="http://drupal.org/files/images/Screenshot%202009-04-25%2010h%2024m%2037s.png" target="_blank">often bleak</a>. Sometimes when I browse themes at Drupal.org, I feel like I'm browsing the web in 1994.

We developers deserve better.