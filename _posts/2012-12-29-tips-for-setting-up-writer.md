---
layout: post
title: "Tips for Setting up Writer"
date: 2012-12-29 00:11:54
---

If I had it my way, this theme would require no setup at all.

The reality, however, is that you are using Drupal and the cost of flexibility, in this case, means a bit of configuration. If you are familiar with Drupal, you probably already have an idea of what this entails. If not, I hope the following tips are helpful to you.

## Ignore the "Blog" module

The blog module is designed to set up a different blog for each site user... probably not what you're looking for. Instead, use the "article" content type (or the "story" content type, in Drupal 6) to create blog posts.

## Set up your Menus

The theme comes with a Primary and Secondary menu built in but you may need to manually assign menus to those spots. Here's how you do this:

1.  In the admin bar, browse to Structure > Menus > Settings (or `/admin/structure/menu/settings` via URL).
2.  Select which menu will represent the Main links (top navigation) and which will represent the Secondary links (footer links).  
    <img width="100%" src="/assets/images/menu_setup.png" />
3.  Note: you can build your own menus at Structure > Menus and use them for these purposes as desired.

While the details are slightly different, it's a similar process for Drupal 6.

## Where is my Blog Archive?

Your blog archive is located at www.yoursite.com/node. A fresh Drupal installation points your home page to this archive by default but you can change your home page or adjust the number of items that appears on the page at (Admin bar) > Configuration > System > Site Information.

Anytime you check the box "promote to front page" when publishing content, that content will appear on this archive and in your main RSS feed.

## Where is the RSS feed?

The main RSS feed can be found at http://yoursite.com/rss.xml. People can subscribe to your blog by clicking through any link that points to this page. If you want to set up more specific RSS feeds, I would recommend you look into the [Views module](http://drupal.org/project/views).

## Choose a style for your Code Snippets

Writer comes with 4 code snippet styles out of the box. Just go to the theme's settings (at `/admin/build/themes/settings/writer` for Drupal 6, and `/admin/appearance/settings/writer`, for Drupal 7) and select the one you want.

![Image showing theme settings for code snippets][1]
This table shows what each style looks like for blocks of code (left) and for inline code (right).

 [1]: /assets/images/theme-settings.png

<img width="100%" style="margin: 0px;" src="/assets/images/writer-style-choices3.png" alt="Image showing examples of the four code snippet styles" />

To invoke the style when you are blogging, wrap blocks of code in "pre" tags or wrap inline code with "code" tags.

<img width="100%" style="margin: 0px;" src="/assets/images/code-snippets.png" alt="Image showing examples of how to render styled code snippets" />

## Fix your Comments Settings

It's pretty ridiculous to force anybody who wants to comment on your blog to create a username and password just for your site. Unfortunately, the default permissions only allow comments to be created by authenticated users. My recommendations are to 1) open this up to anonymous users or 2) allow people to login with a more common third party account, like Google, Facebook, or Disqus.

To open up commenting to anonymous users, change the commenting permissions at People > Permissions. If you'd prefer to use a third party login service, check out modules like <a href="http://drupal.org/project/fbconnect" target="_blank">Facebook Connect</a>, <a href="http://drupal.org/project/rpx" target="_blank">Janrain Engage</a>, or <a href="http://drupal.org/project/disqus" target="_blank">Disqus</a> (...and I'm sure you'll find others if you dig around yourself).

## Extend it with Modules

Several contributed Drupal 7 modules have functionality that I would consider critical for blogging:

*   <a href="http://drupal.org/project/wysiwyg" target="_blank">WYSIWYG</a>: Seriously... you can probably write HTML but that doesn't mean you have to. Don't suffer in silence. Say no to building bulleted lists and anchor links by hand.
*   Spam will eat you alive, especially if you've opened up commenting to anonymous contributors. I recommend the [Mollom module][3] for spam filtering, but you may also have success with the <a href="http://drupal.org/project/captcha" target="_blank">CAPTCHA</a>, or <a href="http://drupal.org/project/antispam" target="_blank">AntiSpam</a> modules.
*   <a href="http://drupal.org/project/pathauto" target="_blank">Pathauto</a>: This will help you make your URLs look a lot cleaner and search engine friendly.

 [3]: http://drupal.org/project/mollom

You may also want to look for some good modules regarding SEO, Analytics, or Media, depending on your style.

## Keep it Simple

[Here are some more suggestions][4] on how to keep the look and feel this theme was designed for.

 [4]: http://mnmlist.com/w/

 

## Any Ideas?

My goal all along was to make this thing ready to use right out of the box. Unfortunately, my current knowledge and experience with theming in Drupal has placed the goal beyond my reach. Perhaps some blame rests with the trade-offs inherent in Drupal. Regardless, I am not defeated yet. If you develop with Drupal and you know of a better way to simplify the setup, then [I'd sure like to hear it](http://bryanbraun.com).
