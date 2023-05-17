---
title: "How Virtual Reality Works on Websites Today"
date: 2016-04-26 08:07:10
---

Virtual-reality already works on websites.

Anyone who owns a modern smartphone can have a virtual-reality experience on the web today. And if you are a web developer, there's nothing stopping you from building a working virtual-reality experience as a weekend hack project.

When I learned this a couple weeks ago, it kind of blew my mind. Modern virtual reality is very new, and web specifications and browser APIs take time to implement. Yet here it is.

But let me take a step back and talk about what "it" is.

## What it looks like

For me, web-based virtual-reality conjured up visions of 3D web pages with nav-bars floating above my head, and hyperlinks teleporting me across websites, as if between worlds.

That's not how it works.

Web Virtual-Reality (or WebVR) allows developers to build contained VR experiences. When WebGL support was added to browsers, it didn't magically make all websites look like they were rendered in 3 dimensions, but it did allow developers to build and embed specific 3D renderings based on existing technologies (like the 2d canvas). WebVR is similar. Today's implementations of WebVR are based on the same technologies that power WebGL. That means that any browsers or devices that support WebGL (like modern smartphones) can be used to build and test WebVR today.

This is what a WebVR scene looks like in a supported browser:

<p style="text-align: center;">
  <img alt="The 'Hello World' example, from Aframe" src="/assets/images/aframe-vr-example.png" />
</p>

As you might imagine, this won't provide a good virtual-reality experience unless you are looking at it though VR goggles, like an [Oculus Rift][1] or [Google Cardboard][2].

 [1]: https://www.oculus.com/en-us/rift/
 [2]: https://www.google.com/get/cardboard/

Even without those, you can get a blurry (but working) taste of it by pulling up a scene like this on your phone, orienting it landscape, bringing it in front of your eyes, and working to resolve it into a single image, like a [magic eye][3] poster.

 [3]: https://en.wikipedia.org/wiki/Magic_Eye

Most WebVR demos allow you to navigate the environment with some combination of WASD controls, your mouse, or tilting your device to look 360 degrees around you. Check out [these][4] [cool][5] [demos][6] if you want to see what people have made.

 [4]: http://mozvr.com/#showcase
 [5]: https://aframe.io/blog/
 [6]: https://github.com/wizztjh/awesome-WebVR#demos

## How the technology works

A lot of todays WebVR technical foundation is being built by [the MozillaVR team][7] at Mozilla. Instead of proposing specifications for new technologies and shipping them in Firefox, they've started out by building a JavaScript framework called [A-frame][8], which provides VR experiences uses existing web technologies. This approach allows them to iterate and refine their implementation, instead of proposing untested approaches as specifications.

 [7]: https://twitter.com/MozillaVR
 [8]: https://aframe.io/

A-frame renders 3D scenes onto the Canvas element using WebGL. It's built on the mature and popular [Threejs][9], a library that makes it easier to build 3D scenes and geometries, primarily for WebGL. Interestingly, A-frame does this by defining a library of custom elements used to build scenes declaratively. It almost looks like a new markup language:

 [9]: http://threejs.org/

    <a-scene>
        <a-sphere position="0 1.25 -1" radius="1.25" color="#EF2D5E"></a-sphere>
        <a-box position="-1 0.5 1" rotation="0 45 0" width="1" height="1" depth="1"  color="#4CC3D9"></a-box>
        <a-cylinder position="1 0.75 1" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
        <a-plane rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>

        <a-sky color="#ECECEC"></a-sky>
    </a-scene>

The A-frame site has several demos and some pretty good [docs][10]. It didn't take me very long to get [my own demo][11] up and working.

 [10]: https://aframe.io/docs/guide/
 [11]: http://sparkbox.github.io/logo-experiments/webvr.html

So, If you're interested in trying out WebVR, definitely check out A-frame, and maybe join their [Slack community][12]. Taking a week to learn about this has been fun and I'm interested to see where it goes in the future.

 [12]: https://aframevr-slack.herokuapp.com/
