---
title: "Using the shrug emoticon in markdown"
date: 2020-11-06
related: [
  "Dumb Little Things"
]
---

TLDR: Copy/paste this →  ¯\\\\\\\_(ツ)\_/¯

## Longer explanation

I like using the shrugging person emoticon ( ¯\\\_(ツ)\_/¯ ) but when I use it in a place that expects markdown, it always ends up looking wrong. Here's an explanation of what's going on:

**First attempt**

¯\\\_(ツ)\_/¯ produces ¯\_(ツ)_/¯ (no left arm)

Markdown treats `\` as an [escape character](https://en.wikipedia.org/wiki/Escape_character) ([see the spec here](https://daringfireball.net/projects/markdown/syntax#backslash)). This means that the left arm (`\`) doesn't display because it is telling the left shoulder (`_`) to display literally.

**Second attempt**

¯\\\\\_(ツ)\_/¯  produces ¯\\_(ツ)_/¯ (no shoulders + italicized head)

To fix the first attempt, we add another `\` to escape the original `\`. That seems like it would work but because we are no longer escaping the left shoulder (`_`), markdown uses the shoulders [to italicize](https://daringfireball.net/projects/markdown/syntax#em) the head.

**Third attempt**

¯\\\\\\\_(ツ)\_/¯ produces ¯\\\_(ツ)\_/¯ (perfect!)

To fix the second attempt, we add *another* `\`, which re-escapes the left shoulder (`_`) and cancels the italics. It finally looks right!

<small>Note: if we wanted to be extra careful, we could manually escape the right shoulder as well, so all markdown-y characters are being told to display literally: ¯\\\\\\\_(ツ)\\\_/¯</small>

