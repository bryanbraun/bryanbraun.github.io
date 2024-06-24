---
title: "ES modules in production: my experience so far"
date: 2020-10-23
last_modified_at: 2023-10-12
related: [
  "A minimalist development workflow using ES6 modules and Snowpack",
  "How searching for a bundle-free React led me to web components",
  "Music Box Fun",
  "Alt-React"
]
---


For the last year, I've been running a single-page web app powered by ES modules in production.

It's a JavaScript app but it doesn't use Babel, Webpack, Rollup, or any other tooling for transpiling or bundling. The files I write in development are the same files that get served to end-users in production.

The app is for a side-project... an [online music-box song making tool](https://musicbox.fun/). It's not a massive app, but it's not tiny either—there's currently about 60 JavaScript modules, which are a mix of components, utilities, and third-party libraries. [The codebase](https://github.com/bryanbraun/music-box-fun/tree/master/site) looks a lot like a ReactJS project, but it doesn't use React. It uses a plain JavaScript alternative that substitutes abstractions (like JSX) with native JavaScript features (like template strings). The framework isn't relevant for the purpose of this post but you can read more about it in [my earlier post]({{site.url}}/2019/09/11/web-dev-nirvana-and-why-I-needed-to-let-go-of-reactjs-to-reach-it/), if you are curious.

When I launched the app in August 2019, the industry consensus was that using unbundled ES modules in production was a bad idea. Khan Academy tried unbundling their homepage JS and concluded that [it slowed down their initial page load](https://blog.khanacademy.org/forgo-js-packaging-not-so-fast/). That was five years ago and I still don't know of anybody who seriously considers skipping the bundler and using ES modules in production.*

And that's too bad because now that [browser support for ES modules is great](https://caniuse.com/es6-module), it seems like we could avoid a lot of [nonsense]({{site.url}}/2019/04/16/nonsense/) by just [writing JavaScript that the browser understands](https://twitter.com/BryanEBraun/status/1295171120459546624) (at least for projects where it makes sense).

I kept looking for examples of people doing this but I struggled to find them, so I decided I'd give it a try and see how bad it really was. Here's what I found:

## Things that met expectations

**Development experience.** I expected the development experience to be great, and it was. There's no setup instructions, no startup delays. No need to watch files, generate source maps, or wait for things to recompile. Just save the file and refresh. ✨

**Deployment.** Deployment was straightforward. All I needed to do was copy my code to the server as-is. My web host Netlify makes it easy to do this on git push (though, to be fair, Netlify can make even the most complex setups easy to deploy).

**Dev/Prod parity.** Every time I found a production bug I was able to reproduce it locally. Not a major goal, but very convenient.

## Things that were worse than expected

**Dependencies not supporting ES modules.**
I often found libraries I wanted to use, only to learn that they didn't support ES modules. They usually supported CommonJS instead, which meant I couldn't use them. At first, I was working around this by loading versions of the library that use browser globals (either via script tag, or [side-effects import](https://stackoverflow.com/q/41127479/1154642)). This worked, but it didn't feel ideal.

Eventually, I started using [esinstall](https://www.npmjs.com/package/esinstall), which can import dependencies that don't support ES modules and produce a one-time build that does. This worked so well that [I've started using it on other projects](https://github.com/sparkbox/bouncy-ball/commit/568a1f2353efc879ef3c373b963569b6bf2644f6).

**Environment variables.** Typically, I'd assign these at build-time but you can't when there's no build. Fortunately, Cory House has [a great post describing all the options](https://www.freecodecamp.org/news/environment-settings-in-javascript-apps-c5f9744282b6/). I ended up using [environment sniffing](https://www.freecodecamp.org/news/environment-settings-in-javascript-apps-c5f9744282b6/#option-6-environment-sniffing) which feels a little weird, but ultimately isn't a big deal for my app.

**CSS organization.** I went with traditional CSS using BEM conventions, which was fine. I still wanted to break up my files though, so I used a `main.css` file with a bunch of `@imports`. That felt better, but then I had a blocking request that delayed page rendering so [I moved the `@imports` into an inline style tag](https://github.com/bryanbraun/music-box-fun/commit/dc2cc62c58ae61d972c124a433ca00d9aac304a2). I'm not sure if I like it, so I may keep iterating on this.

## Things that were better than expected

**Cache invalidation.** I was worried that I was going to have trouble invalidating cached CSS or JavaScript (since I couldn't rely on a bundler to give my assets cache-busting filenames). It turns out that [ETags](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) are a great solution for this (especially since [my web host has a solid implementation that's quick and simple](https://www.netlify.com/blog/2017/02/23/better-living-through-caching/)). I've heard that cache-busting filenames can be a bit faster than Etags, but Netlify's implementation feels pretty snappy to me.

**Performance.**
Everything I heard said that ES module performance was going to be terrible, even with HTTP/2. So I braced myself and... it's been great. I haven't even done any optimizations beyond making sure that my initial HTML file had some good default markup. I suspect the performance is good because my app isn't big enough to start hitting any bottlenecks yet ([this research](https://v8.dev/features/modules#performance) says you'll be fine if you're below a couple hundred modules, which [seems to be confirmed anecdotally](https://twitter.com/lukejacksonn/status/1318158374878457857)). This made me realize that that my intuition was off on what was "too big" of an app. You can go a long way before you're in a place where you need to load 300-500 files, all at once. It feels unlikely that I'll reach those limits on my app, at least.

I was a little worried about not minifying my JavaScript. Isn't that a huge number of bytes saved? It turns out that the difference is a lot smaller when your files are served gzipped (or [brotli-compressed, as in my case](https://www.netlify.com/blog/2020/05/20/gain-instant-performance-boosts-as-brotli-comes-to-netlify-edge/)). Minifying would still make my files smaller by renaming variables and stripping out comments, but the difference was less than I expected.

**Browser support.** Since I wasn't using Babel, I expected lots of cross-browser issues but they were rare.** It turns out that once you drop IE11 support, browser support of modern JS features is really good. Things like arrow functions, const/let, template strings, ES6 classes, and `fetch` all have over 95% global support (and that's including IE11). The only time I didn't get to use a JS feature I really wanted was [the optional chaining operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining), and that feature will probably have 95% support in the next year or two. Evergreen browsers are a powerful thing.

## Overall Assessment

I've been pleasantly surprised. If this were a typical, bundled, single-page-application, I would have needed to deal with one or two major tooling upgrades by now. Instead, I've been able to focus on features. [Native web technologies FTW](https://blog.jim-nielsen.com/2020/cheating-entropy-with-native-web-tech/)!

If my module count gets so big that performance starts to noticeably degrade, then I could always set up bundling as an optimization for production. Keeping it production-only preserves that great local-dev experience while avoiding unnecessary complexity. I expect it would be fairly straightforward to setup esbuild (or a similar tool) to do this, since an ESM-friendly codebase should be bundle-able without any changes.

I like this idea of postponing complexity. It feels very agile.

Maybe ES modules aren't for every project but they've worked pretty well for mine. If there are fundamental flaws, I haven't found them yet.

Honestly, it's hard for me to imagine building a side-project any other way right now.

***

<small>
\* I've just recently found a few other examples of ES Modules in production including [runpkg.com](https://www.runpkg.com/) ([source](https://github.com/FormidableLabs/runpkg)) and [Phillip Walton's blog](https://philipwalton.com/) ([source](https://github.com/philipwalton/blog)). If anyone knows of others, please let me know [via email](mailto:bbraun7@gmail.com) or the comments.
</small>

<small>
\*\* More accurately, I *have* faced some cross-browser issues but they weren't the kind that Babel could help me with. Babel's polyfills don't help when [the browser implementation has bugs](https://github.com/bryanbraun/intersection-observer-issue) or [your approach is fundamentally flawed](https://github.com/bryanbraun/music-box-fun/issues/7#issuecomment-643037151). 🙃
</small>

<style>
  /*
    A tiny font-size hack, just for this page, to prevent an orphaned word in the post title.
    I FEEL BAD ABOUT IT OK?!?
  */
  .article-title {
    font-size: 1.96em;
  }
</style>
