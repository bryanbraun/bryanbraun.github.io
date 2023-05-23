---
title: "ReactJS refs and third-party libraries"
date: 2022-02-18
related: [
  "Alt-React",
  "4 Takeaways from Learning Futuristic JS with Wes Bos"
]
---

*I recently spent an afternoon digging into the details of how to use safely integrate third-party code into a ReactJS component. I had a number of realizations along the way and wanted to write them up for future reference. Hopefully you find them helpful too!*

***

We often reach for third-party code when we need a complex frontend feature. It could be a comments section (powered by Disqus), a sign-up form (Mailchimp), or a data visualization (D3).

All of these integrations have something in common: they want to manipulate the DOM. Typically, you'll specifiy a container div, and they'll embed their HTML inside of it.

This usually doesn’t fit well with React’s rendering lifecycle, where all the content is defined in JSX and rendered all at once. This is where refs come in (says [all](https://reactjs.org/docs/refs-and-the-dom.html) [the](https://reactjs.org/docs/integrating-with-other-libraries.html) [docs](https://krasimir.gitbooks.io/react-in-patterns/content/chapter-12/)).

Placing a ref on an HTML element means you can reference that element after the render happens, like in a `useEffect`, as shown in this example component:

```jsx
import React, { useRef } from "react";
import initComments from "my-third-party-comments";

export const Comments = () => {
  const commentsRef = useRef(null);

  useEffect(() => {
    initComments(commentsRef.current);
  }, []);

  return (
    <div>
      <h3>Comments</h3>
      <div ref={commentsRef} />
    </div>
  );
};
```

You can think of this ref like a [`getElementById`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById). You use the ref to "get the element" after React is done rendering. At that point, the DOM should be stable enough to embed your third-party comments section.

So why can’t we just use `getElementById` instead of the ref? Is there a good reason we’re deviating from DOM APIs?

I assumed it was because refs had some special magic that affects how React rerenders things. If refs aren’t magic, wouldn’t our third-party comment section just get blown away on the next rerender?

Answer: Our comment section is safe from rerenders but not because of refs. It’s because of how React’s DOM diffing works.

## A digression on DOM diffing

React uses DOM diffing to decide which changes to make during each re-render. A re-render without DOM Diffing would overwrite all of a component’s existing HTML with the new HTML. That can work (it’s what I did in [my alt-react experiment]({{site.url}}/2019/09/11/alt-react/)) but it can also be a bit heavy handed. If all you need to change is a single class name, then why not just change the class name (and avoid some potentially expensive UI reflows)? DOM diffing makes that possible.

The interesting thing is that React isn’t actually looking at the real DOM to calculate diffs. It uses a virtual DOM, and it’s comparing the "previous" and "next" state of that virtual DOM. In other words:

- DOM diffing does not compare: "previous real DOM" → "new virtual DOM"
- DOM diffing compares: "previous virtual DOM" → "new virtual DOM"

This means that something simple like adding a class to a div shouldn’t affect our third-party markup. Let’s look at our example to see why:

**Previous real DOM**

```html
<div>
  <h3>Comments</h3>
  <div>
    <!—- lots of third-party comments markup embedded here -—>
  </div>
</div>
```

**Previous virtual DOM (prior to the last render):**

```html
<div>
  <h3>Comments</h3>
  <div></div>
</div>
```

**Next virtual DOM:**

```html
<div class="is-highlighted">
  <h3>Comments</h3>
  <div></div>
</div>
```

Because the third-party comment markup was added externally (outside of React’s rendering cycle), it isn’t present in the DOM Diffing comparison. It didn’t exist in the previous virtual DOM instance, and it doesn’t exist in the next one. As a result, React sees them as identical, decides not to touch that part of the HTML, and the third-party comments are preserved as-is.

This is great, as long as you aren’t mixing your React state with the HTML that the third-party JavaScript *will* be touching. That kind of mixing can result in unexpected results, which is how we end up with recommendations like these:

> "Our approach is to set a clear border between "React world" and "D3 world". This border line is an SVG (or Canvas) element, the root of all d3 visualisations. Root element and anything inside it belongs to D3 world, everything above it belongs to React world."
>
> Karol Stopyra, [React Hooks and D3](https://levelup.gitconnected.com/react-hooks-and-d3-39be1d900fb)

## Back to Refs

So now we understand how our third-party code can coexist with React’s rendering cycle, but that doesn’t answer our original question:

Why do we need to use refs? Can’t we just use `getElementById`?

Well, it turns out that you *can* use `getElementById`. It works fine:

```jsx
import React, { useRef } from "react";
import initComments from "my-third-party-comments";

export const Comments = () => {
  const commentsRef = useRef(null);

  useEffect(() => {
    initComments(document.getElementById("comments-container"));
  }, []);

  return (
    <div>
      <h3>Comments</h3>
      <div id="comments-container" />
    </div>
  );
};
```

So then what’s the big deal about refs? Why do people recommend them for third-party library integration?

First, methods like `getElementByID` act on the entire webpage (instead of a single component) which makes it possible to target the wrong element. That may seem unlikely but when you consider that React components are designed for easy reuse, it’s easy to see how multiple components with the same ID could end up on the same page.

Second, refs are for more than just getting HTML elements. A ref can hold any object, and it will [persist for the full lifetime of the component](https://reactjs.org/docs/hooks-reference.html#useref) (across renders, even). And unlike state values, you can mutate the value of the ref without triggering rerenders. In practice, this makes refs a great place to hold other third-party stuff that aren’t HTML elements. For example, when I put together [a demo integrating Checkboxland with React](https://stackblitz.com/edit/react-zzafmo?file=src%2FApp.js), I stored the Checkboxland instance itself in a ref, so I could use it to update the checkbox grid after each render.

Refs are useful for lots of other things besides third-party integrations, like updating focus states and managing animations. They’re not FOR third-party integrations, per-se. They’re just a tool in the React toolbox. You could likely do third-party integrations without them, but they fit the use-case pretty well.
