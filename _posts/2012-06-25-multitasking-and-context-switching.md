---
layout: post
title: "Multitasking and Context Switching"
date: 2012-06-25 08:38:02
---

As I work on the art of "getting stuff done" I've had an opportunity to learn a lot about multitasking.

Interesting little fact... any computer that runs on a single processor is actually incapable of truly multitasking. Joel Spolsky explains it really well <a href="http://www.joelonsoftware.com/articles/fog0000000022.html" target="_blank" rel="noopener noreferrer" title="Task Switching... for computers and humans">here </a>but to put it simply, when a computer has four tasks to do, it lines them up in a queue. It then works on the first task for a brief moment of time, saves the state of that task, pushes it to the end of the queue, and works on the next one. The process is repeated until all the tasks are done. This happens so quickly that you can have several applications open, giving you the illusion that they are running "at the same time." With this explanation, it make sense that if one application is unresponsive then nothing on your computer works (and we've all seen that before). The word "multi-tasking" was first used in the computing industry, before it was ever applied to human behavior.

When we multitask, our brain is literally processing multiple things at once. Humans are arguably good at this, as long as the tasks we are doing don't require much focus. Sitting on the couch, surfing the web while half-watching TV and participating in a gchat is a good example. None of these things are "mission critical" and we can easily move one item to the foreground of our thoughts and focus less on the others as the need arises. My generation does a lot of this kind of multitasking.

<p style="text-align: center;">
  <img alt="How computers multitask vs how humans multitask" src="/assets/images/multitask1.jpg" style="width: 509px; height: 225px;" />
</p>

Humans can't multitask like computers do. Can you imagine me doing the dishes for 12 milliseconds, then mowing the lawn for 11 milliseconds, then eating lunch for 14 milliseconds, then writing a research paper for 10 milliseconds, then going back to the dishes for 7 milliseconds (continuing on and on...). It just wouldn't work, because I don't move fast enough. Even if I spent maybe 2 minutes on each task before switching, it would still be horribly inefficient because there is a cost that comes in changing what I'm doing. For every two minutes of doing the dishes, I'd have to turn off the water, dry my hands, put on my shoes, walk outside, and get the lawn mower running before I could continue with the next task. **This "cost" of changing tasks is called context switching.** Sometimes the cost isn't much. If you stop reading this blog post to send a text message, it only takes a second to switch from one activity to the other. But context switching always has a cost, even for computers (although this cost is usually very low).

<p style="text-align: center;">
  <img alt="The Cost of Context Switching" src="/assets/images/multitask2.jpg" style="width: 664px; height: 246px;" />
</p>

For some tasks, context switching can be incredibly expensive. That research paper I mentioned is the perfect example. Interrupting your paper to take a phone call doesn't require moving anywhere or preparing anything but it can take a lot of time to get back into the flow of writing the paper. This is because as you write you need to remember what you have already said, what you still want to say, how the paper is flowing, if you have forgotten anything, if you are postponing specific arguments, what examples you still want to use, if you need to find more sources... and the list goes on. The more information you have to keep in short term memory, the harder it is to get back to the level of high performance.

<p style="text-align: center;">
  <img alt="Context switching can be expensive!" src="/assets/images/multitask3.jpg" style="width: 849px; height: 117px;" />
</p>

It's really useful to know which of your tasks are "context switching expensive." For me, it's things like writing a paper, doing a long math or engineering problem, programming, or comparing several complex things (like mutual funds, for example). For tasks like these, I can be much more effective if I absolutely ensure that my environment is distraction free. I'm fine with keeping my phone on silent and disabling chat or email notifications if it means I can really get stuff done. I also don't start these tasks unless I have enough time blocked out to make some serious progress. It doesn't make sense for me to start programming some complex features for a website if it takes me 30 minutes to get up and running and I only have 40 minutes of time available. It's better to box out huge chunks of time.

The one downside to understanding context switching is that it tends to make me late for things. While I'm in the thick of debugging some code, I sometimes notice that I need to be somewhere soon. Realizing that it will take much more time to get to my current state if I stop now, I just keep on coding until I can get to a good mental stopping point. It's great if you don't want to waste time but it's never fun being late.

In short: If you consider the costs of context switching and prepare accordingly you'll be surprised how much more progress you can make on your complex tasks.