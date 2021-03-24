---
title: "Infinitely nested iFrames"
date: 2021-03-24
related: [
  "Checkboxland"
]
---

The other day I realized that it's probably possible to create a series of infinitely nesting iFrames.

Of course, I had to try it. 🙃

It ended up being a bit more challenging that I thought. Here's what happened.

## Attempt 1

I started with the simplest approach I could think of: embedding a page within itself

The HTML is pretty straightforward:

```html
<iframe src="."></iframe>
```

Unfortunately, this only produced a single level of nesting.

<figure class="center">
  <img src="{{site.url}}/assets/images/iframes-attempt-1.png" alt="A blank webpage with a single nested iFrame." />
  <figcaption>You can <a href="https://www.bryanbraun.com/infinitely-nested-iframes/1.html">see a live demo here</a> (though it's not much to look at).</figcaption>
</figure>

To find out why this didn't work, we just have to look up [the W3C specifications on frames](https://www.w3.org/TR/WD-frames-970331):

> Infinite recursion is prevented. Any frame that attempts to assign as its SRC a URL used by any of its ancestors is treated as if it has no SRC URL at all (basically a blank frame).

Well, that's no fun. I still had some ideas though, which led me to...

## Attempt 2

What if we created a Page A, which embeds Page B, which embeds Page A (etc.)?

Again, the code is straightforward:

```html
<!-- On page A -->
<iframe src="B.html"></iframe>

<!-- On page B -->
<iframe src="A.html"></iframe>
```

This was a marginal improvement, but it ended up only giving us three levels of nesting.

<figure class="center">
  <img src="{{site.url}}/assets/images/iframes-attempt-2.png" alt="A blank webpage with three nested iframes." />
  <figcaption><a href="https://www.bryanbraun.com/infinitely-nested-iframes/2-a.html">See the live demo here</a>.</figcaption>
</figure>

Apparently, I had overlooked one small detail in the W3C specs (my emphasis added):

> Any frame that attempts to assign as its SRC a URL used by **any of its ancestors** is treated as if it has no SRC URL at all.

## Attempt 3

Query params!

This idea came from [my coworker Rob](http://twitter.com/robtarr). Theoretically, you should be able to embed the same page repeatedly by changing the query params on the src URL to trick the browser. I figured we could try something like this:

`index.html?1` → `index.html?2` → `index.html?3` → …

It took a bit of JavaScript to set it up:

```html
  <iframe></iframe>
  <script>
    const iframeEl = document.querySelector('iframe');
    const nextQueryValue = !location.search ? 1 :
      Number(location.search.split("?").pop()) + 1;

    iframeEl.src = `index.html?${nextQueryValue}`;
  </script>
```

And this one worked like a charm!

<figure class="center">
  <img src="{{site.url}}/assets/images/iframes-attempt-3.png" alt="A blank webpage with infinitely nesting iframes." />
  <figcaption><a href="https://www.bryanbraun.com/infinitely-nested-iframes/3.html">Here's the link to the demo</a>. Warning: this page could crash your browser.</figcaption>
</figure>

<hr class="section-divider" />

So that was a fun little exercise. The [demos](https://www.bryanbraun.com/infinitely-nested-iframes/) and [source code](https://github.com/bryanbraun/infinitely-nested-iframes) are up on Github if anyone wants to take a closer look.
