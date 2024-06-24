---
title: "A minimalist development workflow using ES6 modules and Snowpack"
date: 2020-08-28
last_modified_at: 2023-10-12
related: [
  "A minimalist development workflow using ES modules and esinstall",
  "Alt-React",
  "Nonsense"
]
---

*Update: Snowpack is no longer actively maintained. To setup the same minimalist workflow today, I recommend using `esinstall`. For more details, see: [A minimalist development workflow using ES modules and esinstall]({{site.url}}/2021/08/27/a-minimalist-development-workflow-using-es-modules-and-esinstall/).*

*The approach described below is compatible with Snowpack v1 and v2, but not Snowpack v3.*

***

Suppose you want to build a small interactive web-app and you need it to be simple and low-maintenance. Maybe it's an animation experiment or a web-audio demo—something that requires a handful of libraries and some custom JavaScript.

The modern JavaScript ecosystem won't do you any favors. Most libraries assume you're using some sort of bundler, which adds enough complexity that the [common](https://increment.com/development/the-melting-pot-of-javascript/#create-reusable-toolboxes) [advice](https://cloudfour.com/thinks/tiny-web-stacks/) is to pull in something like Parcel or Create React App to set everything up. This approach feels so straightforward that it's easy to forget that you're building on a [rickety tower of dependencies](https://xkcd.com/2347/).* 😱

Fortunately, we can shed all this complexity by skipping the bundler and using [ES6 modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) ([browser support is good now](https://caniuse.com/#feat=es6-module))! I tried this for [a project](https://github.com/bryanbraun/lit-element-demo) recently and I really liked how it turned out. Here's the setup I used.

## HTML, CSS, and JavaScript

It starts with a basic HTML file, which pulls in `style.css` for styles and `main.js` as our JavaScript entrypoint:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Project</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Hello World</h1>
  <script type="module" src="main.js"></script>
</body>
</html>
```

By declaring `type="module"` on our script tag, we're safe to use `import` and `export` statements in `main.js` without needing a bundler. 💪

## Pulling in dependencies

To pull in dependencies, we'll create a basic `package.json` and list them under `dependencies` like normal. Here's an example:

```json
{
  "name": "my-project",
  "dependencies": {
    "full-page-canvas": "0.1.0",
    "confetti-js": "0.0.18"
  }
}
```

Running `npm install` will download these packages to a `node_modules` folder, but we can't actually `import` them into our code, for a few reasons:

1. **Every package is organized differently.** ES6 imports require us to point to a specific JavaScript file, but which one? Each package with an ES6 module entrypoint saves it wherever they want, and names it whatever they want. There's no standard.
2. **Not all packages support ES6 imports.** For years we've been building packages that export to browser globals, CommonJS, or other module formats. If the library you want to use doesn't have an ES6 module entrypoint, then you're toast.

This is where [Snowpack](https://www.snowpack.dev/) comes in. You can think of Snowpack as a [Webpack](https://webpack.js.org/) alternative that uses ES6 modules to simplify and speed up your development workflow. When we run a basic Snowpack build, we produce a single ES6-module-friendly file for each of our dependencies (even [the ones that don't have built-in ES6 module support](https://www.snowpack.dev/#import-npm-packages))!

To use Snowpack, we'll add a `snowpack` section to our `package.json`, and list out the packages that we want to import into our code.

```json
{
  "name": "my-project",
  "scripts": {
    "build": "npx snowpack@2.9.0"
  },
  "dependencies": {
    "full-page-canvas": "0.1.0",
    "confetti-js": "0.0.18"
  },
  "snowpack": {
    "install": [
      "full-page-canvas",
      "confetti-js"
    ]
  }
}
```

Typically we would add `snowpack` as a `devDependency`, but I chose to reference it in a custom "build" command instead. Now when we run `npm run build`, it uses `npx` to download `snowpack` on the fly, which builds a `web_modules` folder containing a ready-to-import file for each of my dependencies. This is a _one-time build_, after which I can check `web_modules` into git.

<small>_Side-note: Why check `web_modules` into git? Well, we usually avoid checking in `node_modules` because it contains all sorts of stuff that your production app won't use (like docs, tests, and binaries for your devDependencies). But `web_modules` only contains the actual code we'll be using in production. It's similar to Bower in that way ([and Bower encouraged us to check in `bower_components`](https://addyosmani.com/blog/checking-in-front-end-dependencies))._</small>

Now, we can go into our `main.js` file, import the dependencies, and write some modern JavaScript:

```js
import canvas from "/web_modules/full-page-canvas.js";
import ConfettiJS from "/web_modules/confetti-js.js";

const canvasEl = canvas.mount();
const confetti = new ConfettiJS({ target: canvasEl });
confetti.render();
```

To see the site, we'll need a local server. We could install one as a `devDependency`, but I like using [SimpleHTTPServer](https://2ality.com/2014/06/simple-http-server.html) since it's installed on every Mac computer by default. To start it, we run `python -m SimpleHTTPServer` in the folder containing our files:

<figure class="center">
  <img src="{{site.url}}/assets/images/hello-confetti.gif" alt="The page we built, with a confetti animation" />
  <figcaption>
    Browse to localhost:8000 and celebrate!
  </figcaption>
</figure>

When it's time to update our project dependencies, we just need to update the versions in `package.json`, reinstall with `npm install`, and then rebuild with Snowpack (`npm run build`).

## Pros and Cons

There's a few things I really like about this setup:

- Super-simple local development. There's no need to watch files, generate source maps, or trigger rebuilds. Just hit save and refresh your browser.
- Using ES6 modules means you can organize your code as if you had a bundler.
- A tiny `package.lock` file (which makes it easier to avoid [upstream security issues](https://twitter.com/mjackson/status/1290414613742235648)).
- Deploying is easy. Just use an FTP client, run an `scp` command, or deploy with a `git push` (if you're hosting on a service like Netlify or Github Pages).

There's also a few downsides:

- No fancy styling tools like Sass or PostCSS (it's not too bad though... plain CSS [is pretty good these days](https://cathydutton.co.uk/posts/why-i-stopped-using-sass/)).
- Some frameworks that heavily rely on tooling might not work. For example, you'll need a Babel integration if you want to use React with JSX.
- No production-specific builds containing performance optimizations.

I should note that Snowpack DOES support [all](https://www.snowpack.dev/#sass) of [these](https://www.snowpack.dev/#babel) [features](https://www.snowpack.dev/#bundle-for-production), but you'd have to set it up more like a traditional bundler, which adds some complexity. So worst-case-scenario, you could begin with a minimalist Snowpack setup and add support for bundling later if you really need it. That's not bad at all.

Overall I dig the simplicity of bundle-free development, and I'll probably use it for more projects in the future. If you have other minimalist development workflows you love, I'd love to hear about them in the comments.

***

<small>* At the time of this writing, Create React App downloads over 260MB of dependencies, while Parcel downloads a little over 100MB.</small>
