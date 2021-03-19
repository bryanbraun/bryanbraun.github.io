---
title: "How I boosted my domain authority on accident"
date: 2021-03-18
related: [
  "New Year, New Website",
  "Your site is slower than you think it is"
]
---

[Ahrefs](https://ahrefs.com/) has a really nice set of SEO tools. I've used them in the past for business things, but they're a little expensive for personal use.

So you can imagine my excitement when I learned that they created a free tier late last year. After hooking it up to my personal website and poking around in the data, I discovered that I had dramatically improved my domain authority at the beginning of 2017, completely on accident. So what happened?

<figure class="center">
  <img src="{{site.url}}/assets/images/referring-domains.png" alt="A line graph showing the number of referring domains over time." />
  <figcaption>At the beginning of 2017, the number of referring domains apparently tripled overnight.</figcaption>
</figure>

*Side note: for those unfamiliar, [Domain authority](https://en.wikipedia.org/wiki/Domain_authority) is a rating that search engines give your domain name based on several factors. It represents the credibility of your domain in the eyes of a search engine, which can help your content rank and adds weight to your links. Strong domain authority is good for SEO.*

## What happened

It was Github pages.

When I migrated my personal site to Github Pages, I setup something called a "User site." This told Github to create a site for my user at `https://[username].github.io` (which I then aliased to `https://bryanbraun.com`).

I didn't realize it at the time, but because of the way Github Pages works, this ended up redirecting all my existing Github project sites to my user site. All my side-projects were now found under my personal domain name:

- [bryanbraun.github.io/anchorjs](https://bryanbraun.github.io/anchorjs) → [bryanbraun.com/anchorjs](https://bryanbraun.com/anchorjs)
- [bryanbraun.github.io/after-dark-css](https://bryanbraun.github.io/after-dark-css) → [bryanbraun.com/after-dark-css](https://bryanbraun.com/after-dark-css)
- [bryanbraun.github.io/landmark-articles](https://bryanbraun.github.io/landmark-articles) → [bryanbraun.com/landmark-articles](https://bryanbraun.com/landmark-articles)
- [bryanbraun.github.io/connect-four](https://bryanbraun.github.io/connect-four) → [https://bryanbraun.com/connect-four](bryanbraun.com/connect-four)
- [bryanbraun.github.io/your-life](https://bryanbraun.github.io/your-life) → [bryanbraun.com/your-life](https://bryanbraun.com/your-life)

I wasn't thrilled about this change (and [I wasn't alone!](https://github.com/isaacs/github/issues/547)), but I wanted to use Github Pages, so I accepted it.

What I didn't realize was that now the hundreds of links pointing to my various projects all over the internet were now getting redirected to their new location under `bryanbraun.com`. And all those links gave my main domain a lot more credibility.

There's a lot places I could put these side-projects, but `bryanbraun.com` is always going to be my home on the web, and it doesn't hurt to have the extra credibility. Looking back, I don't think I could have planned it any better.
