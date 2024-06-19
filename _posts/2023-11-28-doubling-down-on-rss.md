---
title: "Doubling down on RSS"
date: 2023-11-28
updated: 2024-06-19
related: [] # Intentionally omitted for this series, because it includes it's own related links list.
---

Over the last year or so, I've been doubling down on RSS*, both as an author and a consumer.

As an author:

- I've created feeds for all the content I publish on my website, including
  - my blog posts: [RSS](https://www.bryanbraun.com/rss.xml), [JSON Feed](https://www.bryanbraun.com/feed.json)
  - my book reviews: [JSON Feed](https://www.bryanbraun.com/books.json)
  - my /now page: [JSON Feed](https://www.bryanbraun.com/now.json)
- I created a feed for [Let's Get Creative](https://www.bryanbraun.com/lets-get-creative/), my recent side-project:
  - [Let's Get Creative - Online Creativity Tools](https://www.bryanbraun.com/lets-get-creative/feed.json)
- I enabled feeds for my article reading queue in [Pocket](https://getpocket.com/):
  - *Update: Pocket has [discontinued their RSS feeds feature](https://support.mozilla.org/en-US/kb/can-i-subscribe-to-my-list-via-rss).* 😡

As a consumer:

- In lieu of signing up for Mastodon, I've subscribed to the RSS feeds of individual Mastodon users that I'm interested in following.
- In lieu of using Youtube's built-in subscription mechanism, I've subscribed to the RSS feeds for Youtube channels I like.
- In lieu of email subscriptions, I've subscribed to RSS feeds for Substack authors I want to follow.
  - I wish I could do this for Convertkit newsletters but [it currently isn't supported](https://community.convertkit.com/question/hello-is-there-a-way-to-access-convertkit-broadcasts-via-an-rss-feed-5feb3c129097d52df87b9b3f?answerId=5feb41dd777123228369919f) (I put in a feature request though 🤓)
  - *Update: after writing this, I got an email which explained that there are free tools (like [kill-the-newsletter.com](https://kill-the-newsletter.com/)) for converting newsletters into feeds. I should also mention that the paid version of many feed readers (Feedly, Feedbin, etc.) also offer this feature.*
- I've been working through the list of people I follow on social media, checking to see if they have a blog with an RSS feed, and subscribing if so.
  - For people with blogs but no RSS feed, I've been [submitting](https://github.com/KyleAMathews/blog/pull/83) [pull requests](https://github.com/gksander/cowboy-codes/pull/1) to add one.

I've learned that RSS support is surprisingly good, even today. I think there's this narrative that RSS usage has been dwindling due to the death of Google Reader and the rise of large social media platforms but I don't believe it. RSS support is built into platforms like Squarespace, Wordpress, and Substack—tools which are more capable and popular than ever before. Here's a bunch of other services with built-in RSS support:

- Mastodon user timelines
- Substack
- dev.to authors
- Subreddits
- Youtube channels
- Wordpress blogs
- [Squarespace content](https://support.squarespace.com/hc/en-us/articles/215761717-Using-RSS-feeds)
- [Hey World](https://world.hey.com)

...not to mention the entire podcast industry, which is basically built on RSS.

All of this to say, RSS is alive and doing well. There's no reason that you couldn't double-down on it too.

<br />

<div class="side-note">
  <p>This post is part of a series about online media and RSS:</p>
  <ul>
    <li><a href="{{site.url}}/2023/11/26/i-needed-to-be-happier/">Part 1: I needed to be happier</a></li>
    <li><a href="{{site.url}}/2023/11/27/rejecting-the-algorithm/">Part 2: Rejecting the algorithm</a></li>
    <li>Part 3: Doubling down on RSS</li>
    <li><a href="{{site.url}}/2023/11/29/everyone-has-a-substack-and-its-great/">Part 4: Everyone has a Substack and it's great</a></li>
  </ul>
</div>

***

<small>* For anyone unfamiliar with RSS, [this video](https://www.youtube.com/watch?v=6HNUqDL-pI8) and [this website](https://aboutfeeds.com/) both give a nice overview.</small>

<small>Also, as a note, I'm using the term "RSS" loosely to mean "the RSS-like family of feed protocols" including RSS, Atom, and JSONFeed.
</small>
