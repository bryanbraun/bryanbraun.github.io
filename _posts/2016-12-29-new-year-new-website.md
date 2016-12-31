---
title: New Year, New Website
date: 2016-12-29 023:27:00
---

Every Christmas, the hosting for my personal site comes up for annual renewal (fun fact: this is because I first built this site many years ago during the Christmas break between two semesters of college).

Well, this year I decided I was going to let the hosting expire, and rebuild it with Jekyll on Github pages. It's something I've been wanting to do for awhile, for a couple reasons:

* I wanted to reduce the site maintenance overhead as much as possible. For example, keeping up with Drupal security updates was getting old.
* I wanted to reduce the cost (which had gotten to over $100/yr)
* I wanted to refresh and simplify the design.
* I wanted to open-source the entire codebase and make it easy for others to fork and contribute to it.

It took a couple weeks to get everything migrated and squared away, but the new site is online now, and I'm thrilled.

I'm currently typing this post in my [Atom text editor](https://atom.io/), with a markdown preview in a pane to the side. Deploying a post is as easy as committing the changes and running `git push`. If I'm away from my computer, no problem. I can write and commit posts from [Github's GUI file editor](https://help.github.com/articles/github-flow-in-the-browser/).

![Writing posts in Atom]({{site.url}}/assets/images/post-editor.png)

The new site is faster. Here's the kind of improvements I'm seeing on the homepage:

| Metric              | Old bryanbraun.com | New bryanbraun.com |
| ------------------- | ------------------ | ------------------ |
| HTTP Requests       | 27                 | 9                  |
| Download Size       | 249 KB             | 122 KB             |
| Load Time (uncached)| 1.784s             | 0.784s             |
| Speed Index         | 1695               | 636                |

And that's without much optimization. I'd like to see how much faster it gets after inlining the CSS and improving caching.

Other nice things include:

* Comments are back! [I had to disable them](https://twitter.com/BryanEBraun/status/676225178326683648) about a year ago when I got overwhelmed with spam. I've now migrated them to Disqus, so it should be easier for everyone.
* I've added deep links with [AnchorJS](https://www.bryanbraun.com/anchorjs/) 💪.
* [Everything is served over HTTPS](https://twitter.com/BryanEBraun/status/814652803884974080?lang=en). This makes me feel less like a pretend web developer.

I'm sure there's a lot of broken stuff scattered across the site right now, so if you see anything broken please [submit an issue on Github](https://github.com/bryanbraun/bryanbraun.github.io/issues/new) (or even better, submit a pull request)!

I'm planning on writing a couple blog posts over the next few weeks to share some things I've learned in the process.

In the mean time, here's a series of screenshots showing the evolution of this site over the last 8 years:

### Version 1
![Screenshot of bryanbraun.com, version 1]({{site.url}}/assets/images/bryanbraun-com1.png)
The original static site, hosted on BYU servers. This was one of the first websites I coded. Fun fact: the blue color was sampled from my tie in this photo. The tie was from my wedding (light blue was one of my wedding colors). All versions of my site since this one has used a similar light blue color.

### Version 2
![Screenshot of bryanbraun.com, version 2]({{site.url}}/assets/images/bryanbraun-com2.png)
A rebuild of my site on Wordpress. I didn't design or code any of this. It was a free theme I liked (I've used the Impact-style font for my name ever since). This is the first version with a blog. All my posts from this point onward are still preserved on the current site.

### Version 3
![Screenshot of bryanbraun.com, version 3]({{site.url}}/assets/images/bryanbraun-com3.png)
A rebuild of my site on Drupal. It was originally built on [Drupal Gardens](https://www.drupalgardens.com/), where I wrote CSS overrides on top of a gardens theme until it looked like I wanted. The design was heavily inspired by [Mailchimp's design at the time](https://web.archive.org/web/20111224033605/http://mailchimp.com/). I exported that hacked theme and self-hosted it on [Bluehost](www.bluehost.com/track/bryanbra/).

### Version 4
![Screenshot of bryanbraun.com, version 4]({{site.url}}/assets/images/bryanbraun-com4.png)
This was a refactoring of my existing Drupal theme to try and clean up the code and make the site responsive. I [released the theme on Github](https://github.com/bryanbraun/rebrauned) once I made these improvments.

### Version 5
![Screenshot of bryanbraun.com, version 5]({{site.url}}/assets/images/bryanbraun-com5.png)
The current version. Designed and coded entirely from scratch. It was inspired by a number of sites, including [Ben Balter's](http://ben.balter.com/). Here's to hoping it'll serve my needs for the next 8+ years!
