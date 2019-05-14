---
title: "Connect Four: a case-study in invisible interface design"
date: 2019-05-13
related: [
  "Simplicity Takes Restraint",
  "Err on the side of simplicity",
  "Model your code like the real world"
]
---

I'm always impressed when I come across an online tool or website that's so simple that there's practically no interface at all.

One example of this might be [this keycode reference site](https://keycode.info/) by [Wes Bos](https://twitter.com/wesbos):

<figure class="center">
  <img src="{{site.url}}/assets/images/keycodes-screens.png" alt="Screenshots from the website keycode.info" />
  <figcaption>Type any key and all the keycode data is displayed.</figcaption>
</figure>

There's no fancy landing page or detailed explanation of how it works. There's nothing standing in your way at all.

I attempted my own "invisible interface" design recently and it took some trial and error to get it where I wanted. This post is my attempt to share that process.

My goal was to make an online version of [Connect Four](https://en.wikipedia.org/wiki/Connect_Four) with a minimalist UI. I wanted to support the following features:

* two-player gameplay
* customizable player names
* keyboard accessibility
* win-detection
* a replay button

## First attempt: native browser dialogs

The main UI came together pretty quickly:

![An animated walkthrough of the first design, which uses native browser dialogs]({{site.url}}/assets/images/c4-native.gif)

As you can see, I used native browser dialogs to prompt the user for player names. This kept the code simple, but the dialogs felt aggressive and I wanted a better way to get player names.

## Second attempt: a setup screen

I decided to replace the native prompts with an in-page modal-style prompt. I thought this would be better for two reasons:

1. You could change both player names in a single modal, reducing the number of clicks.
2. I'd have more control over the design, so I could improve the look and feel.

Here's what that ended up looking like:

![An animated walkthrough of the second design, which uses a setup screen]({{site.url}}/assets/images/c4-setup-screen.gif)

It required fewer clicks and was less aggressive but there was a problem: The interface was very much NOT invisible.

Now we had a new whole screen of form elements, not to mention this new persistent title bar thing. Plus, having two "pages" added complexity, creating weird edge-cases for keyboard accessibility

I realized that we were forcing all players to go through this naming step, when it was likely that many players would be just fine with the default names. So how could we redesign it for players like that?

## Third attempt: let's just play

I tore out the setup screen and started working towards this third design:

![An animated walkthrough of the third design, which doesn't use prompts]({{site.url}}/assets/images/c4-final.gif)

Now we don't get in anybody's way. People who just want to play can. And unlike previous versions, the player names can be changed at any point in the game without losing progress.

One defining feature of this last design is that by clicking the name to change it, we're stepping towards [making the content itself the UI](https://www.lukew.com/ff/entry.asp?1347). This kind of thing has become common on touchscreens and it's a feature of so-called [Natural User Interfaces](https://en.wikipedia.org/wiki/Natural_user_interface):

> “[Natural User Interfaces] aim to make content itself the interface by turning content into things you can manipulate and act on directly.”
>
> Luke Wroblewski, [Netflix Makes Content the UI](https://www.lukew.com/ff/entry.asp?1347)

For what it's worth, the game board works the same way: everything you see is content that you can interact with.

<hr class="section-divider" />

Now, as far as design exercises go, this was pretty basic. Connect Four is way less complicated than the enterprise software many designers are working on.

But it showed me that it can take several passes to simplify things down to their essence. Overall, it was a fun little challenge and it felt good to exercise those muscles.

<small>(note: you can play the final game over at <a href="https://bryanbraun.com/connect-four">bryanbraun.com/connect-four</a>)</small>
