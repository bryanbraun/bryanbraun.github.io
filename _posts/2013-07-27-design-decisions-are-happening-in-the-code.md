---
title: "Design decisions are happening in the code"
date: 2013-07-27 11:08:45
---

Whether you are aware of it or not.

The <a href="http://gettingreal.37signals.com/" target="_blank" rel="noopener noreferrer" title="Getting Real">37 signals book, Getting Real</a>, highlights this fact as it outlines one of their design principles:

> "Getting Real starts with the interface, the real screens that people are going to use. It begins with what the customer actually experiences and builds backwards from there. This lets you get the interface right before you get the software wrong."

And the reason you can get the "software wrong" is because your backend is full of design decisions. It determines what kind of data is easiest to get and what kind of data is fastest. It creates default behaviors, and defines a cost for overcoming them. It leverages various abstractions, determining which outcomes will be flexible and which ones will be rigid.

If you aren't being deliberate about those design decisions, then your users will pay the price… no matter how clean your code is.
