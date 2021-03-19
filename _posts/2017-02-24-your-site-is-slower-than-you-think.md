---
title: "Your site is slower than you think it is"
date: 2017-02-24 10:27:00
related: [
  "Don't Optimize Performance Prematurely",
  "New Year, New Website",
  "Jeqe Recipe"
]
---

I recently [rebuilt my personal website]({{site.url}}/2016/12/29/new-year-new-website/), opting to use a static-site-generator instead of a CMS. I put in a good-faith effort to make the site light-weight (lossless image compression FTW), but didn't do any detailed performance tuning. When it went live, I patted myself on the back for the performance improvements, and turned my attention to other things. It's a static site, hosted on Github pages. Why would I need to optimize it any further?

Well, I was poking around Google Analytics the other day, and was shocked to see an average page load time of 6.5 seconds.

**6.5 seconds?!?!**

I thought something had broken, but I confirmed it with webpagetest, and yes, I was still getting [the same impressive sub-700 speed index as when the site first launched](https://www.webpagetest.org/result/161230_TY_43H/).

So what happened? Digging a bit deeper in the analytics data, I found the answer.

My most popular blog post is a recipe on how to make South African steam bread. This might sound strange for the blog of an American software developer, but I pieced together the recipe back when I was a missionary in [Durban](https://en.wikipedia.org/wiki/Durban), and Google has sent me traffic ever since.

It turns out, over 93% of traffic to that page comes from Africa. Over 86% of that traffic is on mobile devices. All of this traffic was bringing my average page load up:

![BryanBraun.com's average page load data]({{site.url}}/assets/images/performance-analytics-1.png)

When I looked at the average page load for that specific page, I learned that it was 11.4 seconds.

**11.4 seconds!**

![Jeqe blog post average page load data]({{site.url}}/assets/images/performance-analytics-2.png)

I'm picturing some Technikon student waiting for 11 seconds trying to pull up my recipe on their phone, and it kind of makes me feel sick.

Now my situation may seem exceptional, but if you have a decent amount of traffic, this problem is happening to you too. Look at the numbers. Even if you don't have as much international traffic as I do, there are more people visiting on mobile devices than you think. There are more people visiting with [slow connections](https://danluu.com/web-bloat/) than you think.

The big takeaway for me is: your performance testing isn't complete if you haven't looked through your analytics data.
