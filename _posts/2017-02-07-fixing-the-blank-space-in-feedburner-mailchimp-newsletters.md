---
title: "Fixing the Blank Space in Feedburner to Mailchimp RSS Newsletters"
date: 2017-02-07 22:27:00
related: [
  "New Year, New Website"
]
---

I had a frustrating issue when working on my site last month, and I couldn't find any help solving it online, so I put together this quick post for anybody else who happens to run into the same issue.

## The goal

Use [Mailchimp's RSS to Email tool](https://mailchimp.com/features/rss-to-email/) to create an automated, RSS-powered email newsletter. 💪

## The problem

The emails being sent included a big blank space that I can't get rid of (at least in some email clients, like Google Inbox).

The blank space looked like this:

![big, terrible, space in my otherwise perfect email newsletter]({{site.url}}/assets/images/blank-space-bug-1.png)

## The cause

My RSS feed is powered by feedburner (which is meh, but I've used for years), and feedburner embeds a 1x1 pixel transparent image in its feeds for analytics purposes. Mailchimp was adding styles to images in the email, making them 100% width, which caused my 1x1 pixel image to be much larger.

## The solution

I tried to override the 100% width styles in a number of ways (including adding style tags to my email template), but nothing seemed to work.

I ended up fixing it by removing the image entirely. To do that you go to your feedburner settings and disable tracking of item views. This means you won't get data on how often an item is viewed, but I never looked at that data anyways.

![option to remove the tracking images]({{site.url}}/assets/images/blank-space-bug-2.png)

Once I unchecked this option, the image was gone and my problem was solved.

**Update**

I just noticed this Mailchimp setting, found at `Mailchimp > Campaigns > Edit`

![Resize RSS feed images to fit template]({{site.url}}/assets/images/blank-space-bug-3.png)

I don't remember setting that but I'll bet disabling it would also make the blank space go away.
