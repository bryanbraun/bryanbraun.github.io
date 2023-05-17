---
title: "Pause javascript in the browser using the \"debugger\" command"
date: 2013-10-07 16:36:36
---

Sometimes I want to stop scripts from running in the browser at a specific moment, like during a transition or a timed event. I could use breakpoints, but I don't want to dig through the code and find the line of code to pause on, especially if the code has been minified. The good news is you don't have to.

Just open the browser console and paste this in.

```javascript
debugger;
```
When the time is right, hit 'return' to execute the command and stop the browser. Now you can inspect the DOM and style in the browser to your heart's content.
