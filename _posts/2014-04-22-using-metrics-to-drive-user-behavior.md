---
layout: post
title: "Using Metrics to Drive User Behavior"
date: 2014-04-22 12:08:59
---

When somebody uses your website or app, they are looking for clues to tell them what's important. People are hungry for feedback, especially in applications that have a social element.

This desire for feedback is your tool as an interface designer. The metrics you give your users provide that feedback. They help them evaluate how they are doing and what they should do in the future.

We all know [the importance of metrics][1]. The importance of [choosing the right metrics][2]. The [cost in choosing the wrong metrics][3]. For better or worse, metrics drive behavior, even to the point of improving the metric at the [expense of the principle][4] that the metric is supposed to represent.

 [1]: http://www.surepayroll.com/articles/business/manage-and-measure.asp
 [2]: http://blog.upworthy.com/post/75795679502/what-uniques-and-pageviews-leave-out-and-why-were
 [3]: http://time.com/12933/what-you-think-you-know-about-the-web-is-wrong/
 [4]: http://sethgodin.typepad.com/seths_blog/2012/05/avoiding-false-metrics.html

Often, a website can get a certain behavior from users by giving them a metric for it and making it prominent. For example, Linkedin wants it's users to flesh out their profiles completely. To drive this behavior, they provides users with a "Profile Strength" metric, which tells users, "hey you're profile isn't complete yet… keep adding more information."

<p style="text-align: center;">
  <img alt="" src="/assets/images/linkedin1.jpg" />
</p>

Percent completion bars are increasingly common because [they are effective][5] at telling people what they should do next.

 [5]: http://blog.kissmetrics.com/the-progress-bar/

## Publicly Visible Metrics

But human psychology is complex, and you can't always just throw up a number and expect your users to want to make it bigger. Making a user's metrics publicly visible changes the game in many ways. Always craving social feedback, us humans compare our numbers with other people's, looking for significance. We read into what the numbers mean, and what others might think they mean.

> Tell me how you measure me and I will tell you how I behave.
> 
> -- Eliyahu Goldratt

We could look at any social network for examples, but lets try Twitter. At the time of this writing, Twitter profiles display three prominent metrics: Tweets, Following, and Followers.

<p style="text-align: center;">
  <img alt="" src="/assets/images/twitter-profile_0.png" />
</p>

As a user, these metrics drive my understanding of what it means to be influential on Twitter. I look at the values displayed on [influential people's twitter profiles][6] and start to build an internal hypothesis. One example might be:

 [6]: https://twitter.com/who_to_follow/interests

<p style="margin-left: 40px;">
  The more followers you have, the more influential you are<br /> …especially if you have few tweets<br /> …and especially if you don't follow too many people
</p>

Whether this hypothesis is correct or not is irrelevant. The point is, with a hypothesis like this, a person or company might try to increase their apparent influence by doing the following:

<p style="margin-left: 40px;">
  Getting more followers<br /> …without tweeting too much<br /> …or following too many people.
</p>

Is it any wonder that buying fake twitter followers is so common? The metrics drive the hypothesis, which drive the behavior.

## Metric thresholds

Putting thresholds on the metrics you display have interesting consequences as well. Linkedin, for example, only displays the number of connections you have up to 500, after which, it will display 500+. I once had somebody tell me that their whole goal on Linkedin was to get over 500 connections. Why? Because at that point, you have the same apparent count as the most influential people you know. It's like Linkedin made two categories: Well Connected and Not. This motivation drop-off after a metric threshold, is what I call "The LinkedIn pattern."

<p style="text-align: center;">
  <img alt="" src="/assets/images/500-plus.png" style="width: 90px; height: 60px;" />
</p>

Again, whether people who have 500+ connections are actually well-connected or not is irrelevant. If people believe it's an indication, then it will drive behavior.

I host most of my code projects on two websites these days: Github and Drupal.org. Both sites have strong programming communities using them, and it's interesting to compare the metrics they provide.

Github lists your community contributions up to a threshold of 5 projects. Does this threshold result in the "LinkedIn pattern"? I don't know. But when I look someone up on Drupal.org and their profile lists hundreds of community contributions, I can't help but be impressed.

<p style="text-align: center;">
  <img alt="" src="/assets/images/g_and_d_metrics.png" />
</p>

My guess is that community contributions after the first five hold more social value on Drupal.org than they do on Github.

## Notable absences

While I'm talking about Drupal.org user profiles, I can't help but point out a notable absence: There is no measurement of contribution to core Drupal. This is a big deal, because it would be a really strong indicator of community involvement… a high-value metric. One that, I believe, would motivate more people to contribute to Drupal core.

Absences like these represent opportunities. Small adjustments that can make a big difference in how users engage with your site. (Note: a metric can exist and still be "absent" if it is difficult to find or not prominent enough).

## Be deliberate

So what's the takeaway? Metrics impact user behavior, sometimes in unexpected ways. If you care what your users do (and of course, you do), then it's worth taking time to look at the metrics you provide. Were you deliberate about the ones you chose? Do they result in the behavior you want? 