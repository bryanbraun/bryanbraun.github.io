---
layout: post
title: "An Opinionated Guide to Getting Help with Drupal"
date: 2015-03-18 20:12:24
---

You are facing a Drupal problem and you need help. We've all been there.

Drupal is a mature open source project with a vast community, so there are a lot places you can look for help*, and they all have their pros and cons. I’ve spent nearly 4 years trying them all and I found that some options work better for me than others. If you want to save yourself the experimenting and just use the opinionated approach I use today, then stick around; this is the guide to getting help with Drupal that I wish I had several years ago.

Without further ado, here is the list of support channels I currently use, prioritized in the order that I use them:

## 1. Google It

Many things can be solved quickly through an online search. Drupal.org has a search bar, and I tried to use it a lot when I was getting started, but I’ve since learned that you just can’t compete with Google when it comes to search. Pro-tip: you can search Drupal.org exclusively from Google by using the “site” keyword: “site:drupal.org."

**Strength:** Access to a ton of content. Exact searching of error messages.  
**Weakness:** You often have to know the right vocabulary

## 2. Ask People you Work With

Online searches can fall short when your problem is fairly specific, or you don’t know the right vocabulary to use to describe your problem. Sometimes you just need to point at a screen and say “have you ever seen this before?” Face to face communication is fast, and effective (as long as you’ve got somebody experienced around you can talk to).

**Strength:** Face to face communication is often faster and easier  
**Weakness:** Success will depend entirely on who you work with

## 3. Ask On Stack Exchange

Stack Exchange is a well-designed Q&A site that provides community-curated answers to programming questions. You’ll find that there are Drupal questions on both the main site ([stack overflow.com][1]) as well as the Drupal-specific site ([drupal.stackexchange.com][2]), but you’ll want to ask Drupal questions on the Drupal site. I have found the community there to be very active with most of my questions receiving responses in a matter of hours.

 [1]: http://stackoverflow.com/
 [2]: http://drupal.stackexchange.com/

**Strength:** It’s a forum highly optimized for a good Q&A experience.  
**Weakness:** The wrong kind of questions won’t survive here (like subjective questions or site-specific issues)  
**Link:** [http://drupal.stackexchange.com][2]

## 4. Drupal.org Issue Queues

If you can isolate your issue down to a specific project (like a module, theme, or Drupal core) then you can go to the Drupal.org issue queue for help. If your issue has already been reported in the queue, you may find recommendations from the maintainer or even patches that fix the problem. Otherwise you can report the issue yourself. On one occasion I needed to fix an unfamiliar search-related issue that was outside my skill set, and [I reported it in the issue queue of a contrib project][3]. The maintainer got back to me in 2-3 days and posted a patch that fixed it. I benefited by getting a fix from an expert (which could have taken me days/weeks to figure out myself), and the project benefited from my QA work (the fix was included in the next module release). That’s the power of open source.

 [3]: https://www.drupal.org/node/2333133

**Strength:** Can get expert feedback (and maybe even fixes) from module maintainers.  
**Weakness:** Not useful unless you have isolated the issue.  
**Link:** http://www.drupal.org/project/<project-name>/issues

## 5. Official Documentation

By official documentation, I’m talking about the Docs on Drupal.org, explanations on Module pages, or information found in README.txt files. These docs are often a great place to look if you are looking for help getting a module or theme installed and set up for the first time. Other than that, I haven’t had much luck browsing through them for my specific issues. The way I see it, if something in the official docs addresses your problem, you’ll come across it when googling your issue.

**Strength:** Entry-level instructions and set-up steps.  
**Weakness:** Contains a lot of old information. Difficult to browse.  
**Link:** <http://drupal.org/documentation>

## 6. Twitter

It’s hard to have a good conversation in 140 characters, but if you have enough followers who know Drupal (or you can get a retweet from somebody who does) then it can still be valuable. One way I’ve used it effectively is to ask my question on StackOverflow and then send the link out to Twitter to give it some attention if I’m not getting answers.

**Strength:** You may have more success asking your personal connections.  
**Weakness:** 140 character limitation. Question can get lost in the mix.  
**Link:** <https://twitter.com>

## 7. IRC

The Drupal community has IRC chatrooms on freenode at #drupal and #drupal-support designed for support. Some people really like using IRC for support; In some ways it’s like the “asking people you work with" suggestion above. That being said, I’ve always struggled to get answers via IRC. I feel awkward jumping in when there are already conversations in the channel, and several times I’ll ask a question but it promptly gets lost in the back scroll with no response. Plus, questions asked in IRC are usually not archived or searchable so the conversation you have won't benefit future people with your problem. So your mileage may vary, but I’ve yet to have a successful support experience on IRC.

**Strength:** Community of experts  
**Weakness:** Chatrooms are not designed for Q&A.  
**Link:** [http://drupal.org/irc][4]

 [4]: https://drupal.org/irc

## Other Options

There are other options that I won’t discuss in detail. They all have strengths and weaknesses (which I’ll list below), but they aren’t really part of my main help workflow for one reason or another.

*   [**Drupal.org Forums**][5] - My questions have gone unanswered here. I’ve seen successful threads, but they seem pretty rare to me.
*   [**Groups.Drupal.org**][6] - Quality varies widely from group to group. I’ve seen groups with good discussion and others with lots of spam.
*   **Local User groups** - Good for subjective questions but not deep troubleshooting.
*   [**Books**][7] - Good for generic instruction, site building, and walkthroughs but not for heavy custom development.
*   [**Training**][8] - Can be online, on-site, or workshops. Good for generic instruction, site building, and walkthroughs but not for heavy custom development.
*   **Conferences** - Good for generic instruction and subjective questions. Not great for deep troubleshooting.
*   [**Example modules**][9] - Good for learning Drupal coding patterns but not for troubleshooting
*   [**Professional Services**][10] - Good for getting high-level architecture and security recommendations. Offering varies depending on the provider.
*   [**Api docs**][11] - Good for looking up specific Drupal  API functions.
*   [Insert your social network here]

 [5]: https://www.drupal.org/forum
 [6]: https://groups.drupal.org/
 [7]: https://www.drupal.org/books
 [8]: https://www.drupal.org/training
 [9]: https://www.drupal.org/project/examples
 [10]: https://www.drupal.org/drupal-services
 [11]: https://api.drupal.org/api/drupal

Finally, whatever you ask, and whoever you ask it to, remember that you have a responsibility to [ask good questions][12].

 [12]: https://groups.drupal.org/node/77228

<small>* Here’s the <a href="https://www.drupal.org/support">official drupal.org page on getting help</a> (we covered all the options here and more).</small>