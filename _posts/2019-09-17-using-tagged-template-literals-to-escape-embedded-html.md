---
title: "Using Tagged Template Literals to escape embedded HTML"
date: 2019-09-17
related: [
  "Web-dev nirvana, and why I needed to let go of React to reach it",
  "Every Possible Way to Define a Javascript Function",
]
---

JavaScript template strings are great for building HTML templates.

But there's a problem: [embedding a template string into your page can be a security risk](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#Security_considerations)

```js
// This is risky
element.innerHTML = `<div id="page">${userDefinedContent}</div>`;
```

But there's a super-convenient feature of template strings called "Tagged Template Literals." It looks like this:

```js
// We're appending our template string onto something called safeHTML...
element.innerHTML = safeHTML`<div id="page">${userDefinedContent}</div>`;
```

To be clear, `safeHTML` isn't a language feature. It's just an arbitrary function name. So the code above is functionally the same as this:

```js
// Pass our template through safeHTML before assigning it to innerHTML
element.innerHTML = safeHTML(templateData, userDefinedContent);
```

So if we have a function named `safeHTML`, we can use it to escape the user content before embedding it. There are a couple ways we could do this:

  * *Option 1*: Define the `safeHTML` escaping function ourselves. There are examples online we can use to help us (like [this one](https://2ality.com/2015/01/template-strings-html.html#the-template-handler)).
  * *Option 2*: Pull in a 3rd-party function that does the escaping for us.

For option 2, I found a small library called [html-template-tag](https://github.com/AntonioVdlC/html-template-tag) which you can use like this:

```js
import html from 'html-template-tag';

// Now, userDefinedContent will be escaped, without affecting our wrapper div.
element.innerHTML = html`<div id="page">${userDefinedContent}</div>`;
```

This escaping function is great if you don't want any user-defined HTML in your page. Sometimes you *do* want user-defined HTML though, like basic text formatting, for example. For that, you'd need a different function that allows some HTML tags to remain unescaped. Different use-cases will require some combination or [escaping, filtering, validating, or sanitizing](https://security.stackexchange.com/a/143925/151943). Fortunately, [there are tons of tagged-template modules out there](https://github.com/declandewet/common-tags#other-es2015-template-tag-modules) that can help with these scenarios.

You can do lots of other things with tagged template literals, with libraries doing everything from [stripping indentation](https://github.com/declandewet/common-tags) to [building a Virtual DOM](https://github.com/WebReflection/hyperHTML). Hopefully this is a nice introduction to the options that are out there.
