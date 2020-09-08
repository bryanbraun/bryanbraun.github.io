---
title: "I'm working part-time now"
date: 2018-08-01 15:30:00
related: [
  "How I Choose a Side Project",
  "We are just seeing the beginning of interactive online learning",
  "Gridmaster: Closing Thoughts"
]
---

Last week I reduced my hours at [Sparkbox](https://seesparkbox.com/) down to 20 hours/week, so I could have more time to work on [Gridmaster]({{site.url}}/2020/09/08/gridmaster-closing-thoughts/).

I haven't talked much about Gridmaster on the blog, but it's an idea I've been playing with for a while now. I wanted to see if it was possible to learn spreadsheet skills in a more interactive way than reading a book or watching a video. I was inspired by online learn-to-code courses (like the ones offered by [Codecademy](https://www.codecademy.com/) and [Code School](https://codeschool.com)) and I wondered if I could apply the learning approach to other skills. Plus, it would be a fun way to mix two of my interests ([web programming]({{site.url}}/2014/05/22/loving-what-i-do/) and [education]({{site.url}}/2015/10/20/we-are-just-seeing-the-beginning-of-interactive-online-learning/)).

I started by building an online course that used a "spreadsheet embedded in a browser". This made a lot of sense to me. I knew web technologies, and this matched the format used by Code School and others. It looked like this:

![A screenshot of what Gridmaster started out looking like]({{site.url}}/assets/images/gridmaster-early.png)

It worked, but only kind-of. The in-browser spreadsheet wasn't as mature as programs like Microsoft Excel and thus it was missing several things like robust keyboard navigation, shortcuts, and advanced spreadsheet functions.

Still, the demo [got upvoted on Hackernews](https://news.ycombinator.com/item?id=12938636) and I got a bunch of positive feedback. I considered it enough validation to keep going.

I ended up iterating on the implementation to build a Microsoft Excel addin using the new [MS Office Javascript APIs](https://dev.office.com/reference/add-ins/javascript-api-for-office). Building an addin meant that I could focus on improving the courses and not on writing spreadsheet software. It turned out to be a good shift. It still used web technologies but the resulting product worked much better. It looked like this:

![A screenshot of what Gridmaster looked like in 2018]({{site.url}}/assets/images/gridmaster-2018.png)

## Fast-forward to now

Now I've got five interactive courses and anyone can install the addin and start learning today. I'm proud of where it is, but there's a lot more I want to do and it's been hard to make significant progress on nights and weekends. Right now, I feel like I just need more time, and reducing my hours at Sparkbox gives me that time.

Now that I have an extra 20 hours each week, I'm planning to spend 75% of that time on marketing and the other 25% on developing the product. There's a lot I don't know so I'm looking forward to all of the new [opportunities to learn]({{site.url}}/2011/02/27/fear-and-the-critical-moment/).

<hr class="section-divider">

<small><em>Huge props to the folks at Sparkbox for being flexible enough to let me work part-time.</em> ️️️❤️ ❤️</small>

<small><em>If you're still reading this, then you certainly have enough curiosity to <a href="https://web.archive.org/web/20200426173247/https://appsource.microsoft.com/en-us/product/office/WA104381078">download the addin</a> and just see what it's like. It's free, and if you don't have Excel on your computer you can use <a href="https://office.live.com/start/Excel.aspx">Excel online</a> (also free). Just do it!</em></small>
