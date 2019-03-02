---
title: "Example Post"
date: 2017-01-25
related: [
  "Technical Myopia",
  "Jargon"
]
---

Reference this post when creating a new post.

Items we **don't** need in frontmatter:

- date - it is inferred from the post's filename (see http://ben.balter.com/jekyll-style-guide/posts/)
- layout - it is set to "post" as a default in `_config.yml`

Below are some examples of markup you might need:

<hr class="section-divider">

Links for assets should be absolute for rss feeds, emails, etc. Using `site.url`
makes them work in all environments (notice: liquid tags work in markdown files):
![Image... made absolute for RSS feeds & github]({{site.url}}/assets/images/logo.png)

Absolute urls are also good for linking _to posts_ or _from a post to a page_:
[My first post!]({{site.url}}/2010/11/04/bryan-vs-the-internet)

Internal links between .md pages can be relative, since they are converted by the
jekyll-relative-links plugin. This way, they work on github, as well as your site.
The converter respects permalinks, but only works for pages, not posts (you can't
link from a page to a post, or vice-versa):
[Internal link referencing the .md file.](about.md)

---

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

## Paragraphs and Images

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

![Placeholder Image and Some Alt Text](https://placehold.it/350x150 'A title element for this placeholder image.')

<figure class="center">
  <img src="https://placehold.it/350x150" alt="A placeholder figure image." />
  <figcaption>The figcaption element example</figcaption>
</figure>

_Note: the [Figure-Figcaption](http://html5doctor.com/the-figure-figcaption-elements/) and [Details-Summary](http://html5doctor.com/the-details-and-summary-elements/) elements are not currently supported in markdown._

## Blockquote

This is a standard paragraph. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

> "**This is a blockquote**. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl."

This is a standard paragraph. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

---

# Text Elements

The [a element](#) and [external a element](https://example.com) examples

The <abbr>abbr element</abbr> and an <abbr title="Abbreviation">abbr</abbr> element with title examples

The <acronym title="A Cowboy Ran One New York Marathon">ACRONYM</acronym> element example

The **b element** example

The <cite>cite element</cite> example

The `code element` example

The <data value="3967381398">data element</data> example

The ~~del element~~ example

The <dfn>dfn element</dfn> and <dfn title="Title text">dfn element with title</dfn> examples

The _em element_ example

The _i element_ example

The <ins>ins element</ins> example

The <kbd>kbd element</kbd> example

The <mark>mark element</mark> example

The <q>q element</q> example

The <q>q element <q>inside</q> a q element</q> example

The <s>s element</s> example

The <samp>samp element</samp> example

The <small>small element</small> example

The <span>span element</span> example

The **strong element** example

The <sub>sub element</sub> example

The <sup>sup element</sup> example

The <time datetime="2005-05-15 19:00">time element</time> example

The <u>u element</u> example

The <var>var element</var> example

---

# Monospace / Preformatted

Code block wrapped in "pre" and "code" tags:

```javascript
// Loop through Divs using Javascript.
var divs = document.querySelectorAll('div'),
  i;

for (i = 0; i < divs.length; ++i) {
  divs[i].style.color = 'green';
}
```

Monospace Text wrapped in "pre" tags:

<pre>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.</pre>

---

# List Types

## Ordered List

1. List Item 1
2. List Item 2
3. List Item 3
   1. List Item 3.1
   2. List Item 3.2
      1. List Item 3.2.1
      2. List Item 3.2 2
   3. List Item 3.3
4. List Item 4

## Unordered List

- List Item 1
- List Item 2
- List Item 3
  - List Item 3.1
  - List Item 3.2
    - List Item 3.2.1
    - List Item 3.2 2
  - List Item 3.3
- List Item 4

---

# Tables

| Table Header 1 | Table Header 2 | Table Header 3 |
| -------------- | -------------- | -------------- |
| Division 1     | Division 2     | Division 3     |
| Division 1     | Division 2     | Division 3     |
| Division 1     | Division 2     | Division 3     |
