---
title: "Before you buy a domain name, first check to see if it's haunted"
date: 2024-10-25
related: [
  "Music Box Fun",
  "The Power of a Link",
  "How I boosted my domain authority on accident"
]
---

In mid-2022 I bought a new domain name.

The name was `musicbox.fun`. I got it for a side-project, an [interactive online music box](https://musicbox.fun) that I had built and hosted at `musicboxfun.com`. The new name was shorter and more quirky. I felt lucky to have grabbed it.

Unfortunately, `musicbox.fun` had a history. Before I bought it, the domain was used to host pirated music.

<figure class="center">
  <img src="{{site.url}}/assets/images/old-music-box-fun.png" alt="A screenshot of musicbox.fun as it existed in 2018, before I owned it" />
  <figcaption><code>musicbox.fun</code>, as it existed in 2018 (before I owned it)</figcaption>
</figure>

From June 2018 to February 2021, the site racked up thousands of copyright violation complaints. Over 20,000 of its urls were delisted by Google (and other search engines) before the site went offline in 2022.

I had no idea, of course. It wasn't until I had redirected all of my `musicboxfun.com` traffic to `musicbox.fun` that I noticed that something wasn't right: my web traffic from organic search dropped to zero.

I assumed it was temporary so I double-checked my process and waited for awhile, but it never really recovered. It wasn't until a year later that I discovered the copyright violations and learned that the domain name was compromised.

Apparently, this is a thing that happens to domain names, but as far as I know, there's not really a name for it. When I described it to my wife, she said *"Oh, so it's haunted."*

"Haunted" is the perfect word for this:
- Something terrible happened at the domain name in the past.
- On the surface, nothing seems wrong with the domain name.
- Then there are signs that something isn't right.
- Obligatory jump-scare when you discover what happened.
- Internal debate: do you abandon it or try to fix it?
- There's a ton of superstition around how to fix it.
- Superficial fixes don't seem to work.

<figure class="center">
  <img src="{{site.url}}/assets/images/ghostbusters.jpg" alt="A scene from the movie Ghostbusters." />
  <figcaption>When there's something strange with your domain name, who you gonna call?</figcaption>
</figure>

So to summarize, I'm saying a domain name is "haunted" when something in its past gives it a poor reputation among search engines, affecting its ability to rank in search results, even after it changes ownership.

The inner-workings of search engines are notoriously opaque*, making it difficult to 1) know if you're being affected and 2) know how to fix it. The following are my suggestions, based on my experience with `musicbox.fun`.

## How to check if a domain name is haunted

Before you buy a domain name, there's a few ways to check if it's haunted:

### 1. Check the Wayback Machine at archive.org

If you go to [web.archive.org](https://web.archive.org/) and put in your domain name, it will pull up archived web pages of whatever lived at the domain in the past. Here's a couple things to look out for:

   1. Does anything in the past look illegal or sketchy (piracy, gambling, porn, etc)?
   2. Is the history suspiciously empty?
      - If so, then possibly the past content was [removed by request](https://help.archive.org/help/how-do-i-request-to-remove-something-from-archive-org-2/) (I suspect this was the case for `musicbox.fun`)

### 2. Search DMCA complaints

DMCA stands for "Digital Millenium Copyright Act," which is a US law that enables people to report copyright infractions to search engine companies (among other things). These reports are public, and you can look them up in a few ways:

 1. Search [Google Transparency Report](https://transparencyreport.google.com) for your domain, to find delist requests (you can [see the report for musicbox.fun here](https://transparencyreport.google.com/copyright/domains/musicbox.fun)).
 2. Search [lumendatabase.org](https://lumendatabase.org) for your domain, to find copyright complaints (for an example, see [these results for musicbox.fun](https://lumendatabase.org/notices/search?term=%22https%3A%2F%2Fmusicbox.fun%22&term-exact-search=true&sort_by=)).

Finding ANY copyright complaints for your domain is cause for concern, especially if there are a lot of them and they were filed recently.

### 3. Search historical SEO data

If you're considering buying an important domain name, you may also want to search historical SEO data. Advanced SEO tools like [ahrefs.com](https://ahrefs.com) can give you detailed information about backlinks, ranking history, and estimates for traffic and domain authority. Often, you'll need to pay to get full access to this kind of data.

Interpreting this data is beyond the scope of this post, but a bit of research can help uncover problems here.

## Ok, it's haunted. Now what do I do?

### 1. Talk to the search engines

Many search engines have tools for domain owners, like [Google Search Console](https://search.google.com/search-console) and [Bing Webmaster Tools](https://www.bing.com/webmasters). Definitely set up a profile and get your domain name added. It can help surface past issues and it gives you a way to report when issues have been resolved. For more details about specific actions you can take here, see [my stackexchange post](https://webmasters.stackexchange.com/a/145283/36576) on the topic.

If your domain has DMCA complaints, you may be tempted to file a [DMCA counter-notice](https://support.google.com/legal/troubleshooter/1114905?rd=2&sjid=13861243148551035047-NC#ts=9814647%2C1115655%2C13630207%2C12999302%2C9814950%2C1115791). Don't do it. Counter-notices are for *errorneous* copyright complaints, not complaints that were once valid but no longer relevant. Per Google's counter-notice submission form:

> Please note: If the content on the page was infringing at the time the original removal request arrived, your counter notice is not legally valid. Do not submit a counter notice if there was illegal content, even if it's now been removed.

As far as I can tell, there's not really anything you can do to make past, valid DCMA complaints go away.

### 2. Double-down on best practices

My SEO strategy has always been to do great work and make it easy for Google to see it. It usually works pretty well (at least for my non-haunted domains). For haunted domains, you have a bad reputation to overturn, which seems to require extra vigilence. SEO basics, like high-quality, structured, accessible, content on a fast-loading site, are table stakes.

If you've done any SEO work, you know that search engines treat links to your site as a massive signal of relevance and trust. I suspect that fresh incoming links are especially important for overturning a bad reputation, though I haven't confirmed this personally. If you think `musicbox.fun` is a useful project and you wield [the power of a link]({{site.url}}/2020/10/03/the-power-of-a-link/), consider posting a link to it, and maybe we'll find out together.

### 3. Wait for a while?

In my research I found [a detailed stackexchange post about trust scores and how they are affected by DMCA complaints](https://webmasters.stackexchange.com/a/99701/36576). This post suggested that recovery could take some time:

> It takes years to rebuild trust scores and for some sites, this may never happen.
> ...the reality is that a domain can ruin its value beyond redemption.

This post isn't a primary source, but I also came across an Q&A with a Google Search employee who fielded a similar question about DMCA violations. Their response said something similar, basically, that it can take time for the reputation effects to wear off (I'm struggling to find the video now, but I'll link it when I do).

All of this is fairly disappointing. In a perfect world, when your legitimately good content isn't being surfaced by Google, it's a failure on **their** part, and **their** problem to solve, not yours. In practice, it is **your** problem and you have to do a bunch of work to help them see that their current assessment of your domain name is no longer accurate.

![Image of the medium from the movie 'Poltergeist' saying "this house is clean"]({{site.url}}/assets/images/this-house-is-clean.jpg)

<hr class="section-divider" />

Ideally, search engine algorithms would give new domain owners a fresh start. Yes, it would prevent "haunted domain issues" but it would also reduce [squatting on trusted domains](https://macwright.com/2024/10/16/domain-second-thoughts) (another issue I've been burned by). Unfortunately, we don't live in that world*, so we only have a few options:

1. Avoid buying haunted domain names
2. Abandon domain names, once you discover that they are haunted
3. Put in a bunch of time and effort to restore a haunted domain name's low trust score

For `musicbox.fun`, I want to at least *try* #3. I've taken some of the steps above and it feels like I'm starting to see progress. It's slow, but I'm not in a big hurry to restore traffic. The site is just a hobby and it was always a niche project for a niche audience.

Either way, I hope to post an update in a while to let you know if it improves over time.

<hr />

<small>* It's easy to attribute issues like these to anti-competitive behavior or some other malicious cause, but I don't blame Google here. If their reputation algorithm was more transparent (or forgiving), it could be more easily exploited by bad actors. Obscurity prevents exploitation but also adds to the mystery and superstition that plagues the SEO industry. It's tempting to get sucked into the mystery, trying to figure out the algorithm despite its constant changes and intentional obscurity, but that's not how I want to live my life.</small>
