---
title: "There's a lot to like about the Web Share API"
date: 2023-03-17
related: [
  "Allowing inline scripts in your Content Security Policy using a hash",
  "An Overview of Javascript's try-catch",
  "Every Possible Way to Define a Javascript Function"
]
---

I have a special place in my heart for online creativity tools. I [tinker with them](https://twitter.com/BryanEBraun/status/1440138631256035336), [share them with my kids]({{site.url}}/2020/03/25/online-tools-for-creative-kids/), and [build them myself](https://musicbox.fun).

One of the most important features these tools can have is frictionless sharing with other people. The best tools have a dedicated place to submit your creations and browse the creations of others (think [Scratch explore](https://scratch.mit.edu/explore/projects/all) or [Dribbble shots](https://dribbble.com/shots)). These community features are great but they're relatively rare because it takes so much work to build and support them. At the minimum, you just need an easy way for someone to share their work with their friends.

One option is to add social media share buttons to each project page:

<figure class="center">
  <img src="{{site.url}}/assets/images/social-sharing.png" alt="Share buttons for social media sites like Facebook, Twitter, and LinkedIn" />
  <figcaption>Remember these? They're not just for blog posts. You can use them to share anything with a unique URL.</figcaption>
</figure>

There's a lot to dislike about these social media buttons. They look garish and they often require JavaScript embeds that include trackers and slow down your site with network calls.

And which social networks should you support? Do you clutter your site with a bunch of niche options (that most people don't use), or do you encourage centralization by only promoting the biggest social networks? 😐

That's why I got excited when I discovered a new approach with a lot fewer downsides: [the Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API)

The Web Share API is a new browser API for sharing content natively. Basically, a user clicks a share button and it launches an operating-system-specific dialog that looks something like this:

![The Web Share dialog, as shown on iOS and Android]({{site.url}}/assets/images/web-share-ios-android.jpg)

![The Web Share dialog, as shown on MacOS]({{site.url}}/assets/images/web-share-macos.jpg)

![The Web Share dialog, as shown on Windows]({{site.url}}/assets/images/web-share-windows.jpg)

As you can see, the sharing options depend on what the user has installed on their device. This is great because as the developer, you don't have to care about what social networks they use—the list of options is always relevant. And if they don't use social networks, no big deal—there are still options for things like texting, email, and copy to clipboard.

No ugly buttons. No tracking. No free advertising for social media giants. Are there any downsides to using the Web Share API?

[Browser support](https://caniuse.com/web-share) could be better. It's great on mobile but we're currently missing desktop Chrome (on Mac) and desktop Firefox. There's no fundamental issue with adding support… the developers just need to prioritize it. If you want to encourage them, go ahead and star [this Chromium issue](https://bugs.chromium.org/p/chromium/issues/detail?id=1144920). In the mean time, you can use feature-detection to only show your share button in supported browsers (as [shown on this test page](https://w3c.github.io/web-share/demos/share.html)).

Overall, there's a lot to like about the Web Share API. It feels like a small step towards a cleaner, healthier web ecosystem, and that's worth celebrating. 🎉

<hr class="section-divider" />

More resources:
- [CanIUse: Web Share](https://caniuse.com/web-share)
- [MDN: Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API)
- [Tutorial: Integrate with the OS sharing UI with the Web Share API](https://web.dev/web-share/)
- [The Graxel project post]() (where I first discovered this feature)
