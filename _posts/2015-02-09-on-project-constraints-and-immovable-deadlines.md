---
layout: post
title: "On project constraints and immovable deadlines"
date: 2015-02-09 18:58:34
---

I’ve heard it said about software projects that there are three goals:

*   Build it on time
*   Build it fully featured
*   Build it under budget

I’ve also heard it said *"you can only pick two"* (it’s usually said in jest, like the parallel offered to college students that they can only pick two options: good sleep, good grades, and a good social life). While it’s possible for software projects to successfully hit all three, there are a host of challenges standing in your way. It’s a good idea at the beginning of your project to determine which of these options are flexible and which ones aren’t, so you can plan accordingly.

I recently worked on a project where *“Build it on time”* was totally non-negotiable, because we were driving towards a large public event that wasn’t going to move for us. Because we knew this, we were able to adjust how we worked in order to meet the deadline. Here are the approaches we took in this instance.

## Be Agile

We couldn’t spec out every detail at the beginning, and even if we could, it was inevitable that things would change as we go. Some parts would be easier or more difficult for us than expected. Our clients would get new ideas and re-prioritize work, as they saw it coming together. Being able to respond to all this as we go resulted in the highest value work being completed by the deadline.

## MVP mentality

What happens if, for some crazy reason, we only get through half of the work done that our clients expect? What if we only got through a quarter? What product would they get then? Anything can happen during a development cycle, from mistakes of judgment to circumstances outside of our control. How do we reduce that risk?

Focusing on the Minimum Viable Product means that we start by sprinting towards building something that will do the job, even if poorly. Then we get feedback and iterate, delivering better and better workable versions until we run out of time. It ends up looking like this:

<p style="text-align: center;">
  <img alt="" src="/sites/default/files/mvp.jpeg" />
</p>

Since our project was high-profile, failure would have been very visible--the perfect brew for emotions and stress to run rampant. Having an MVP mentality reduced risk for everybody involved and the feedback we got along the way resulted in a better product.

## Always be releasing

Our work was built on top of production software, so we had another point of potential risk: introducing regressions or downtime for existing visitors. In this situation, the riskiest thing you can do here is build software for months, then try to release it all in one big batch right before the deadline. Doing so results in a long, complex, stressful release that can be difficult to roll back (both logistically and behaviorally) if needed. I’ve been involved in releases like that. It’s not fun.

Instead, we focused on releasing small pieces functionality to production, every day if possible. This doesn’t guarantee that there won’t be regressions. Rather, it makes it more likely that regressions are minor, and easy to isolate and fix.

## In closing

Constraints are good. They keep us focused on practical solutions that deliver value. By keeping our process iterative and focusing on reducing risk, we can avoid negative outcomes in highly constrained circumstances (like immovable deadlines).