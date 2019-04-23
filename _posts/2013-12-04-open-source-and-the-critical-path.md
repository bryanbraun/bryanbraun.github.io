---
title: "Open Source and the Critical Path"
date: 2013-12-04 17:04:25
---

I've been struggling with two principles that are battling it out in my head, and maybe talking through them out loud will help me sort it out.

First, there's the "<a href="http://tom.preston-werner.com/2011/11/22/open-source-everything.html">open source (nearly) everything</a>" principle. From an ideological standpoint, this is great. It's generous. It openly demonstrates your skill. At best, it brings in outside people who will test and improve your work for free, and at worst it is ignored. It benefits your organization by establishing goodwill and giving them an opportunity to seize the moral high-ground. From a technical perspective, it encourages modular architecture and discourages sloppy workarounds. There are a lot of reasons I agree with the sentiment to open-source nearly everything.

But it sometimes stands in conflict with the idea of <a href="http://en.wikipedia.org/wiki/Critical_path_method">the critical path</a>. In short, when you have a goal, like "put up a website," there are a lot of steps in that process. Some of those steps are absolutely essential (like finding web hosting), and others are not (like minifying JavaScript and CSS files). The essential steps form a chain of dependencies that are critical to completion of the website. This chain often looks like "In order to do 'A' I must do 'B' but in order to do 'B' I must do 'C'…" and so on. This chain is the critical path.

The critical path is important because it relates to the Lean Startup methodology, where much of your effort goes into building a "Minimum Viable Product." Whether, you're a startup or not, working in this agile, iterative way is desirable because it's low risk and low cost. I won't get into all the details, but there's a lot of value around making something quick and dirty so you can use it to get feedback. Once you have feedback, you can refine it in the direction of the feedback and know that you're investing your time wisely.

You probably see where I'm going. Open source-ing isn't on the critical path. It may be on the the "valuable" path, certainly, but if functionality can get built without releasing the code, it's not critical. So how do I justify doing that work before all the critical work?

A couple thoughts:

* Maybe you don't. You do all the critical work first, and open source later. Sounds good in principle, but in my experience (which is admittedly not comprehensive), it often doesn't end up happening. There's always some new "critical" thing that comes up, delaying the process indefinitely. Also, the longer you wait, the more difficult it can be to keep your code modular. There are countless opportunities for shortcuts in the sprint to MVP, so when you finally get around to releasing the code, you may need to spend a lot of time, disentangling the dependencies from the rest your system.
* We like to believe that releasing the code only takes 10 minutes, but in practice it doesn't. Without some kind of documentation, people won't be able to use or make sense of your code. You ought to at least make a README explaining what you're releasing. It's even better if you have some instructions for setup, example usages, maybe even a demo. If you work at a large organization, these kinds of things usually need to go through stakeholders and language needs to be approved. As a pragmatist, I can't ignore the fact that this imposes a real cost on the sprint to MVP.
* What's critical depends on your goal. If your goal is "launch a website," then sure, open source isn't critical. But if your goal is "demonstrate technical leadership" then maybe it is. Marketing isn't just done with ad campaigns. It's the sum total of all interactions between your company and the public. In that way, open source isn't so much a "feature" as it is a mission. If open source is a core value of your organization, then making your open source goals explicit is an important way to get them on the critical path.

What do you think?
