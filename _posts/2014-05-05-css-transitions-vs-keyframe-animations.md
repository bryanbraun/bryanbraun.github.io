---
layout: post
title: "CSS Transitions VS Keyframe Animations"
date: 2014-05-05 16:35:13
---

There are currently two ways to animate things with CSS:

*   Transitions
*   Keyframe Animations

Each technique has similarities and differences. Here's how they work.

## Transitions

Transitions work by morphing a property from one value to another when the transition is triggered.

Here is a simple example (hover your mouse over the box to trigger the transition):

<a class="jsbin-embed" href="http://jsbin.com/jesafeso/1/embed?html,css,output">JS Bin</a>

There are several ways to trigger a transition. The most common way is with the :hover pseudo-class (which you saw in the example above), but others include:

*   :active
*   :focus
*   :checked
*   :disabled
*   page load
*   media queries
*   device orientation
*   class changes (Triggered via javascript)

<small>(By the way, <a href="http://www.impressivewebs.com/css3-transitions-without-hover/" target="_blank" rel="noopener noreferrer" title="CSS3 Transitions without :hover">there's a great article by Louis Lazaris</a> demonstrating some examples of these techniques)</small>

In all cases, a user performs some action, which sets our transition in motion. You can adjust many properties of the transition, like the delay or timing, but all transitions must have a beginning and an end.

## Keyframe Animations

Keyframe animations are similar to transitions, in that they can be used to morph properties from one value to another, but they differ in how they are defined. You define them by identifying the keyframes that make up your animation and giving that set of keyframes a name. Then, you can invoke those keyframes anywhere you want, using CSS selectors. Let's look at an example:

<a class="jsbin-embed" href="http://jsbin.com/mujebelo/1/embed">JS Bin</a>

As you can see, we've defined our "pulse" keyframes, and applied it to several elements.

## Which is Better?

Both have their strengths and weaknesses. Here are a few of the main benefits I've found for each option:

Benefits of Transition:

*   Slightly better browser support (compare [transitions][1] to [animations][2])
*   Familiar syntax
*   Simplicity
*   Easy to manipulate in Firebug/Devtools

 [1]: http://caniuse.com/css-transitions
 [2]: http://caniuse.com/css-animation

Benefits of Keyframes:

*   More granular timing control
*   Easy to mix and match properties (one keyframe definition can animate color and opacity, and size, etc.)
*   More animation options (infinite, alternate, etc.)
*   Keeps code [DRY][3]

 [3]: http://en.wikipedia.org/wiki/Don't_repeat_yourself

Personally, I feel like animations with keyframes are more powerful, but it really comes down to your specific application (for example, I chose to use transitions in [AnchorJS][4] and keyframe animations for [my Flying Toasters][5]).

 [4]: http://www.bryanbraun.com/2014/01/19/anchorjs
 [5]: http://www.bryanbraun.com/2014/03/15/how-i-rebuilt-flying-toasters-using-only-css-animations

Finally, one property that is often confused with these animation techniques is [transform][6]. While transform is new and can do some neat things (like rotate, scale, translate, etc), it doesn't animate anything. It's a typical css property like font color or opacity.

 [6]: http://docs.webplatform.org/wiki/css/properties/transform