---
layout: post
title: "White Screen of Death"
date: 2013-03-30 20:37:24
---

I remember the first time I got a "<a href="http://drupal.org/node/158043" target="_blank" rel="noopener noreferrer" title="White Screen of Death, as described on Drupal.org">White Screen of Death</a>" distinctly. I was migrating my personal site over to Drupal from Wordpress. I don't exactly remember where I went wrong, but all of a sudden I saw it. A wall of blinding white light void of meaning. Such sterile, hollow, emptiness.

<p style="text-align: center;">
  <img alt="" src="/assets/images/drupal-white-screen-of-death.png" style="width: 760px; height: 565px; border: 1px solid rgb(235, 235, 235);" title="The White Screen of Death" />
</p>

<p class="p1">
  I checked the source, hoping I would find some clue as to what was happening. All I saw was this: "<head></head><body></body>". Useless.
</p>

<p class="p1">
  I had vaguely remembered seeing something like this before when I did some basic PHP programming in a class, but this was different. I was dealing with 14.9 Megabytes of Drupal. I couldn't just comment out chunks of code until the site started working again.
</p>

<p class="p1">
  I had no reference points. I couldn't do Google searches for "White screen of death" because I didn't know that people called this a White Screen of Death. I couldn't get into the admin screen to uninstall modules or otherwise troubleshoot the cause. I wasn't about to start deleting chunks of a codebase I wasn't familiar with. For the life of me, I couldn't get Drupal to produce an error message. I did everything I could… I even contacted customer support with my webhost. After hours of frustration, I chose the only remaining option. I deleted my entire site and database, and did a fresh Drupal installation from scratch.
</p>

<p class="p1">
  To the brand new Drupal Developer, the White Screen of Death is <a href="http://drupal.org/node/499290" target="_blank" rel="noopener noreferrer" title="Case in point: the comment with the title 'WSOD is almost literally killing me...'">absolutely devastating</a>. I don't know how, but there has got to be a way to prevent it. But only if we are willing to reject the status quo.
</p>