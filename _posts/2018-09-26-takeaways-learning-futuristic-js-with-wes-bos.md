---
title: "4 Takeaways from Learning Futuristic JS with Wes Bos"
date: 2018-09-24 16:10:00
related: [
  "5 Takeaways from Learning CSS Grid"
]
---

We got to hang out with Wes Bos at Sparkbox for a Javascript workshop earlier this year. While there, we got into all sorts of futuristic JS techniques, some familiar, and some not. In the interest of [sharing what I've learned](http://nathanbarry.com/89697-reasons-to-teach/), here's four of my biggest takeaways:

## 1. Pass in your DOM elements

It's common to see code like this:

```js
function confirmSuccess() {
  const messageBox = document.querySelector('#messageBox');
  messageBox.textContent('Success!');
}
```

We need a DOM element to do some task, so we get the element at the beginning. But, what if we passed in our DOM element as a parameter instead?

```js
function confirmSuccess(messageEl) {
  messageEl.textContent('Success!');
}
```

Now our function can be reused more easily. This also pushes our DOM queries to be together in a higher level place, making them easy to update if the DOM changes.

## 2. No top-level awaits

Wes taught us a bunch about Async/Await ([you can see his examples here](https://github.com/wesbos/Web-App-Workshop/blob/master/notes/03%20-%20Async%20%2B%20Await.md)). One of the key points was that we cannot use awaits outside of asyncs. It took some thinking to understand why, so I'll explain it in the way that made sense to me. Consider this code:

```js
async function updateCurrentWeatherThumbnail(location) {
  const weather = await getCurrentWeatherFor(location);
  const picture = await getPictureOfWeather(weather);
  const weatherThumbnail = await getResizedPictureOfWeather(picture);
  updateThumbnailOnPage(weatherThumbnail);
}
```

This function has three asynchronous requests to external services (the "get" functions) but no nesting. So... it must be blocking execution, right? But async/await is just a syntax built on top of promises, which are non-blocking. So what's going on?

Well, the awaits themselves ARE blocking, in the same way that `.then()`s (or callbacks) are blocking. You can think of execution pausing to wait whenever you see an await. The code after them won't run until the request is done.

BUT the `async` defines the scope of that blocking. An `async` function itself is non-blocking. So if you include a bunch of functions defined as `async function`s in your code, they will run concurrently.

```js
// non-blocking, because these functions were defined as `async function`s.
updateCurrentWeatherThumbnail();
updateCurrencyInformation();
updateUserNotifications();
```

Thus, it makes no sense to define an `await` outside of an `async`. It would be like defining a `then` without the original promise. So top-level awaits aren't a thing. If you see them something's probably wrong.

## 3. Dynamic imports

I'm used to seeing static ES6 imports at the top of my files, but there's [a new ES6 feature for using dynamic imports](https://developers.google.com/web/updates/2017/11/dynamic-import) inside of your javascript to load code dynamically. This can be useful for lazy-loading modules without taking away any of the existing benefits of static imports.

I won't describe it in detail, so check out [this article](https://developers.google.com/web/updates/2017/11/dynamic-import) if you want to see some examples.

Some bundling tools already support dynamic imports so you can use them today.

## 4. Some cool new libraries

While we mostly stuck to vanilla Javascript, Wes did mention some notable libraries I wasn't familiar with:

- **[Axios](https://github.com/axios/axios)** - This is a Javascript library for making http requests using promises. It's similar to the new fetch() API except it has lots of other conveniences, especially around error handling.
- **[Parcel.js](https://parceljs.org/)** - This is a bundling tool, like webpack, except it claims to just work out-of-the-box with zero configuration. The goal is to take away the most painful parts of webpack (the setup and configuration). Looks promising!
- **[Workbox](https://developers.google.com/web/tools/workbox/)** - This is an abstraction of service workers, making it easier to provide offline support for your app. Developed by Google.

I'm thinking about using Parcel for whatever small project I do next. Also, I might try using Workbox to cache Google Fonts with service workers (for performance reasons). That is, unless workbox is too heavy to offset the performance gains. 😂

<hr class="section-divider" />

That's all I've got. Thanks, Wes, for hanging out with us!

<p class="center">
  <img alt="Never stop learning" src="{{site.url}}/assets/images/never-stop-learning.jpg" />
</p>
