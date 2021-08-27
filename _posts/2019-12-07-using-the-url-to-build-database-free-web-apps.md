---
title: "Using the URL to build database-free web apps"
date: 2019-12-07
updated: 2020-01-03
related: [
  "Music Box Fun",
  "Alt-React",
  "Make Things Simple"
]
---

Sometime over the last year, I learned that you could build certain kinds of stateful web applications by storing all of the data in the URL, instead of in a typical database.

It seemed a little bizarre at first, but the more I thought about it, the more I loved the idea. Before I tell you why, here's an example showing how it works.

## An example

Imagine you're on [Pinterest](http://pinterest.com/), creating boards, and adding stuff to them.

![An example Pinterest Board called 'Colors' with some pins added to it]({{site.url}}/assets/images/pinterest-example.svg)

At some point, you want to save your work, and come back to it later. This usually means you have to create an account, so your data can be connected to your user and stored in the database on the backend.

But there's not that much data on your board. If Pinterest supported it, that same data could be stored in the URL, which might look something like this:

```
https://pinterest.com/?board=colors&pins=red,yellow,purple,green,etc
```

If you bookmarked this link, and came back to it later, the JavaScript app could use the data in the URL to reconstruct the original state. Your progress is saved.

This Pinterest example is pretty basic, but people have built fairly complex apps with this pattern. Here's a few real-world examples that I've come across:

* [BeepBox](https://beepbox.co/) - An in-browser chiptune editor.
* [Bitcards](https://bitcards.fun/edit) - A tool for building and sharing flashcards.
* [Firefox Colors](https://color.firefox.com/) - A site for building custom color schemes for your Firefox Browser.
* [Heroes of the Aturi Cluster](https://hotac-ship-builder.netlify.com/) - A tool for managing an X-wing miniatures campaign.
* [IsoCity](https://github.com/victorqribeiro/isocity) - An isometric city builder (like a mini SimCity)
* [Music Box Fun](https://musicboxfun.com/) - An app for creating music box songs (I built this one).

In all of these apps, every change you make updates the URL, instantly saving your progress in an easily sharable link. You don't have to create an account or log in. In fact, you couldn't if you wanted to because there's no database! These apps are completely static.

As a developer, this means you can eliminate the backend, and **eliminating the backend means you've dramatically reduced the ongoing cost and overhead of maintaining your app**. It's perfect for side-projects where you want to provide a ton of value, but need to keep things easy to maintain. A lot of the stuff I want to build falls into this category.

## Trade-offs

Of course, this approach comes with some trade-offs:

* Some features are tricky, like followers or activity feeds.
* It can be difficult to monetize.
* There's a limit to the amount of data you can reasonably store.

### Tricky features

Data stored in the URL is decentralized. As a developer, that means you can't "see" what your users are doing, or expose their work to others (like through an activity feed, for example). This is a pretty big downside. [Mario Maker](https://en.wikipedia.org/wiki/Super_Mario_Maker) is an amazing game, but imagine if you couldn't see the levels that other people were creating. You'd probably make some levels, get bored, and move on.

There are workarounds for this. [Beepbox](https://beepbox.co) encourages people to share their songs on twitter and displays a feed of recent tweets. That works, but it would be nice if there was a third-party solution (like Disqus) that was designed for this use-case.

### Monetization

These apps have no concept of user identity. There are no users. Just app states. That means that when a user creates a thing, it isn't "theirs." It just exists. Anyone with their link can see it and add to it. That's not a big deal for some things, but it doesn't work for anything where identity or ownership is important.

Unfortunately, identity is important for a lot of online business models. For most SaaS products, a known user pays to get privileged access to your product. That wouldn't work here, where all users are anonymous.

There are ways to monetize anonymous users. If you have traffic, you can set up things like advertising, affiliate links, or lead generation. These may not bring in truckloads of money, but if your app is static, it shouldn't take that much revenue to cover your costs.

### Storage limits

The storage limit is how much stuff can fit in a URL. That may sound prohibitively restrictive, but it really isn't that bad. The maximum URL length [differs by browser](https://stackoverflow.com/a/417184/1154642), with the most restrictive browsers limiting you to 2047 characters, and modern browsers supporting 64,000+. Sure, it's not infinite, but you can fit a lot of data in there, especially if you compress it.

While building Music Box Fun, I used a library called [json-url](https://github.com/masotime/json-url) that allows you to compress any JSON object into a base64 string that can be stored in the url. That meant, that an object like this:

```json
{
  "songState": {
    "songTitle": "Hello World",
    "songData": {
      "C4": [10],
      "D4": [24],
      "E4": [36]
    }
  }
}
```

...could get encoded into this:

```
XQAAAAI7AAAAAAAAAABAqkpm86JnWsRtZaQNv-CjgurTXZK1U_iNj4XJq7o8Y4l768CtYEmYRGuRaUtwBastPflAyfDaNxef_-88YAA
```

...which I could add to the end of my URL, like this:

```
https://musicboxfun.com/#0XQAAAAI7AAAAAAAAAABAqkpm86JnWsRtZaQNv...
                         ||
    version number ──────┘└───── Beginning of encoded song data
```

<small>(note: I used the first character after the "#" as a version number, for versioning my data structure... everything after that is the compressed data).</small>

Decoding the data is as easy as grabbing the encoded string, and running it through the decompress function that comes with json-url.

JSON is pretty flexible, but any type of data can be base64 encoded, including images and audio. In fact, many [data URLs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) are just images, compressed into base64, and formatted so browsers can decode them.

You can be even more space-efficient by creating a custom dictionary for converting your data into bytes as succinctly as possible (which is [what Beepbox does](https://github.com/johnnesky/beepbox/blob/aa5f0e33d46b81aa437231fd04f427a1aae54400/synth/synth.ts#L1091-L1340)).

## Conclusion

I wish I saw more folks building database-free web apps. They are clever, easy to maintain, and by using the URL for data persistence, you can build some really useful stuff. These kind of apps are great for building creativity tools, customizable games, viral interactives, and more.

You can technically get client-side data persistance with [localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and other similar technologies, but using the URL makes it sharable, and that unlocks some great use-cases. I hope you give it a shot on a future project.
