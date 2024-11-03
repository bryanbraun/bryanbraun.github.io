---
title: "Setting up your /now page with an RSS feed"
date: 2024-11-02
related: [
  "Doubling down on RSS",
  "Rejecting the algorithm",
  "Hacktoberfesting my Personal Website"
]
---

I have [a /now page](https://www.bryanbraun.com/now/), which I use to tell people what I'm up to these days.

I like [the concept of "now pages"](https://nownownow.com/about) but I felt like it would be better if it had an RSS feed. The feed would give interested parties a way to subscribe to life changes.

The problem is that RSS feeds aren't really designed for a single page. It's more for a content collection, like blog posts or podcasts.

Still, is there a way to make it work? To have a single page, publishing to subscribers every time it's updated?

## Unique IDs

In RSS feeds, each entry is supposed to have a unique ID. Here are some examples:

**[Atom](https://www.ietf.org/rfc/rfc4287.txt)**
```xml
<entry>
  <id>urn:uuid:1225c695-cfb8-4ebb-aaaa-80da344efa6a</id>
  <title>Atom-Powered Robots Run Amok</title>
  <link href="http://example.org/2003/12/13/atom03"/>
  <updated>2003-12-13T18:30:02Z</updated>
  <summary>Some text.</summary>
</entry>
```

**[JSONFeed](https://www.jsonfeed.org/version/1.1/)**
```json
"items": [
    {
        "id": "1",
        "content_html": "<p>Hello, world!</p>",
        "url": "https://example.org/initial-post"
    }
]
```

These IDs are intended to be globally unique and unchanging:

> id (required, string) is unique for that item for that feed over time. If an item is ever updated, the `id` should be unchanged. New items should never use a previously-used `id`.
>
> [JSONFeed Version 1.1 Docs](https://www.jsonfeed.org/version/1/#items-a-name-items-a)

Changing the ID is bad because it causes old posts to resurface as new posts in people's feed readers. Usually you don't want this, even when you're updating an old post.

But in my case we *do* want this. If I only publish a single entry and include the current date in the ID, it's unique every time I rebuild the feed (i.e., whenever I update the `/now` page). And just like that, every update is a new publish.

<p style="text-align: center;">
  <img src="/assets/images/now-page-feed.jpg" width="260" alt="A list of /now page updates as shown in a feed reader" />
</p>

## Is this bad and should I feel bad?

I'm deliberately disobeying the spec to get the result I want. Often, in the dev world, these kinds of things come back to bite you. Is there a better way to do this?

Well, I could treat my `/now` page as a content collection, with each new entry being published as new post, never deleting or overwriting old entries (basically a microblog just for life updates). It's doable, but it diverges from the simplicity of having a single document at a single url. At that point, I might as well insert life updates into my normal blog, which works but isn't appropriate for many types of blogs.

One issue with changing IDs is that small revisions to the `/now` page republish the whole page, making it hard for subscribers to see what changed. I could mitigate this by including a link to the diff on Github (version control FTW!), but it's not the most user-friendly solution.

<hr class="section-divider" />

Anyway, I'm going to roll with it for now. If anyone wants to do a similar experiment, feel free to check out the [feed template in my repo](https://github.com/bryanbraun/bryanbraun.github.io/blob/main/_pages/now.z.json).
