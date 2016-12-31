---
title: Embedding SVG Logos that Contain Text
date: 2016-12-30 23:00:00
related: [
  "New Year, New Website"
]
---

SVGs are great fit for logos on your website. Logos typically use simple shapes (or paths), few colors, and they need to be available in several sizes... all things that SVG excels at. And logos (as part of your brand) always need to look sharp, and SVGs look great on retina screens and devices of various pixel densities. What's more, browser support for SVG is [really good these days](http://caniuse.com/#feat=svg).

Finally, lots of logos (like the ones below) have text in them, and inline-SVGs are good at exposing machine readable text for accessibility purposes.

![Various logos with text in them]({{ site.url }}/assets/images/logos-with-text.png)

There's only one problem: how do we handle the font for the logo text?

## Fonts in SVGs

The font used in an SVG logo is usually one of three things:

1. A traditional font, being used in logo (for example, the many [logos using Gotham](http://gothamlogos.tumblr.com/))
2. A custom designed font, for the brand (like the [Ubuntu font](http://font.ubuntu.com/) above, or Google's [Product Sans](http://thenextweb.com/google/2015/09/01/google-created-an-entirely-new-typeface-for-its-snappy-logo-redesign/))
3. Not a font at all... just vector paths (like the CNN logo above)

If your logo has a font, then you'll need it to be downloaded with the page in order to use it. You can do that with a [@font-face rule](https://css-tricks.com/snippets/css/using-font-face/), or by [embedding the font in your SVG](http://nimbupani.com/about-fonts-in-svg.html).

With the font available for styling, you can put your text into an SVG `<text>` tag and style it with the font. Using my current logo as an example:

```html
<text font-family="Oswald" font-size="36">Bryan Braun</text>
```

But let's ask ourselves this: is there any other text on the page using this font? In most cases (mine included), the answer is no.

And that's a concern because now we're downloading a big font file and slowing down the page, just to display a couple of letters in a logo.

## Vector paths to the rescue

We can get rid of the font entirely by converting your logo's text to vector paths. Most vector graphics programs have an option for doing this (like Illustrator's "[Create Outlines](http://www.dummies.com/software/adobe/illustrator/how-to-outline-text-in-illustrator-cc/)", or Sketch's "[Convert to Outlines](https://www.sketchapp.com/learn/documentation/text/convert-to-outlines/)").

![The word "Bryan" displayed as text and paths]({{site.url}}/assets/images/text-to-paths.png)

This is great! We still have the benefits of SVG (good for retina, styling with CSS, etc), without the weight of the font. What's more, you generally don't need a webfont license in order to use it like this, since you aren't distributing the font. Legally, this is the same territory as including a few letters of the font in a jpg image (now, I'm not a lawyer, and font-licensing is complex, so if you are using a licensed font then then please do your research or [risk being sued](http://www.hollywoodreporter.com/thr-esq/nbcu-sued-harry-potter-font-theft-lawsuit-351823)).

There's only one problem... by converting the font to paths, the text is no longer machine-readable (and screen reader accessible). 😞

There are lots of options for addressing this, and I highly recommend reading Sitepoint's [Tips for Creating Accessible SVGs](https://www.sitepoint.com/tips-accessible-svg/) to see them all.

For logos specifically, we can use the SVG's `<title>` tag to hold the text. This is what that looks like (again using my logo as an example):

```html
<title>Bryan Braun</title>
```

This title tag acts kind of like alt-text for the SVG, providing a description of the image content. This is good, but not all browsers expose this information to screen readers. We can improve behavior across browsers by using the [`aria-labeledby` attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) to indicate that the title is a label for the image:

```html
<svg aria-labelledby="title">
  <title id="title">Bryan Braun</title>
```

Finally we can use the [`role` attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques) so it's clear to screen readers across that this SVG is acting as an image:

```html
<svg aria-labelledby="title" role="img">
  <title id="title">Bryan Braun</title>
```

And there we go! We have an accessible SVG logo with the look and feel that we want, without the performance overhead of downloading fonts. Not too shabby.
