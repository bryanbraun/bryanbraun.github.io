---
title: "Several Ways to Hide Easter Eggs on your Website"
date: 2018-04-01 23:45:00
related: [
  "Hacktoberfesting my Personal Website"
]
---

As you may know, it's fairly common for developers to hide secret features, inside jokes, and other goodies inside of their software. These hidden things are often called "[Easter eggs](<https://en.wikipedia.org/wiki/Easter_egg_(media)>)", and since today is Easter, I thought I'd share a handful of ways you can add them to your websites:

## 1. Code comments

All the major web browsers allow users to "View Source" and see the website's source code. Some sites take advantage of this by leaving clever [html comments](https://www.w3schools.com/html/html_comments.asp), for developers to find. You can use these comments to leave ASCII art, developer credits, recruiting info, or really whatever message you want. Pro-tip: use an [ASCII text tool](http://patorjk.com/software/taag/) or an [image-to-ASCII-art converter](https://manytools.org/hacker-tools/convert-images-to-ascii-art/), to create a memorable message.

<figure>
  <img src="{{site.url}}/assets/images/mozilla-view-source.png" alt="Image of comments in the source code of mozilla.com"/>
  <figcaption>As of today, the source code of Mozilla.com includes a fire-breathing lizard and a message for prospective developers.</figcaption>
</figure>

## 2. Console messages

In addition to leaving messages in the source code, you can also print messages to the browser console (which can usually be found by pressing Cmd + Option + i). The most basic form of this is leaving a `console.log("My message")` in your javascript file, thus printing "My message" to the console. To make things more interesting [some browsers allow you to style your console messages with CSS rules](https://stackoverflow.com/a/13017382/1154642).

<figure style="text-align: center">
  <img src="{{site.url}}/assets/images/TNW-console-message.png" alt="Image of a message in the console at thenextweb.com" />
  <figcaption>Here, <a href="https://thenextweb.com/">The Next Web</a>) prints a brief message to their console welcoming anybody who happens to be looking.</figcaption>
</figure>

## 3. The Konami code (or other keystrokes)

The [Konami Code](https://en.wikipedia.org/wiki/Konami_Code) was a cheat code originally found in Konami video games where you could unlock a secret by pressing a series of buttons (` ↑``↑``↓``↓``←``→``←``→``B``A `). In a similar vein, you can set up your website to [listen for keystrokes](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Example) and trigger some behavior when the right sequence is pressed. There are even [plugins](https://github.com/tommcfarlin/konami-code) you can use to listen specifically for the Konami code.

<figure>
  <img src="{{site.url}}/assets/images/digg-konami.png" alt="Image of the Rick Astley Easter egg on Digg.com" />
  <figcaption>Digg.com used the Konami code to hide <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">a certain Rick Astley song</a>...</figcaption>
</figure>

## 4. Hover states

Hover states are a great place to hide things because they only become visible if your cursor happens to be in the right place (which is basically [how the original Easter egg worked](<https://en.wikipedia.org/wiki/Easter_egg_(media)#Origin>)). Hovering can trigger CSS animations or JS logic, resulting in anything from subtle visual flair to hidden features. If you use the [`cursor: pointer` CSS property](https://css-tricks.com/almanac/properties/c/cursor/), you can transform the cursor into a hand... a subtle clue that clicking will result in some hidden behavior. Easter eggs hidden behind hover states are more difficult to find on mobile devices (where there is no cursor), but who cares. They're Easter eggs.

<figure>
  <img src="{{site.url}}/assets/images/brad-frost-hover-animation.gif" alt="Animation of circles being colored on hover at bradfrost.com" />
  <figcaption>The bubble pattern on Brad Frost's website makes colorful circles when hovered over.</figcaption>
</figure>

## 5. Magic strings

If your website has text inputs, then you could hide things using [magic strings](https://en.wikipedia.org/wiki/Magic_string). Usually, this means you design your site to do something special if a specific set of characters or words is submitted as text. This can be set up on the frontend or backend of your site. Google is famous for doing this by [adding clever features to search pages when certain terms are searched](https://en.wikipedia.org/wiki/List_of_Google_Easter_eggs#Search_engine).

<figure>
  <img src="{{site.url}}/assets/images/google-in-1998-search.png" alt="Image of the search results for 'google in 1998'." />
  <figcaption>Searching Google for "google in 1998" returns a page mimicking the design Google used in 1998.</figcaption>
</figure>

## 6. Conditional features

When someone visits your website, you can detect all sorts of things about their device, from the [screen size and orientation](https://mislav.net/2010/04/targeted-css/), to the [battery level](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API), [offline status](https://developers.google.com/web/fundamentals/codelabs/offline/), [operating system](https://github.com/bestiejs/platform.js/) and [device motion](https://developers.google.com/web/fundamentals/native-hardware/device-orientation/). Any of these APIs can be used to provide conditional features tailored to them (and with their permission you can get super-detailed things like [location information](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation) and [microphone audio](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation)). All of this makes great material for Easter eggs.

<figure>
  <img src="{{site.url}}/assets/images/chrome-offline-game.gif" alt="Animation of the game hidden on Chrome's offline screen" />
  <figcaption>The Chrome browser knows when you're offline and includes a hidden game in the error screen (you press the space bar to play). You can use services workers to add offline-only games to your website.</figcaption>
</figure>

<hr class="section-divider" />

Easter eggs can be creative and fun, but they can also have real value. A quirky reference can help portray a fun-loving brand, and a novel "Hey Developers" message can bring in job applicants. I've gone ahead and added a few of my own Easter eggs to this site, just for fun. Can you think of other ways to hide them?
