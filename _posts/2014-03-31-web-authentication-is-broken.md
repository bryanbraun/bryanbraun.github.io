---
title: "Web Authentication is Broken"
date: 2014-03-31 07:43:33
---

I was using an email service for some work I was doing, and I hated it.

The service worked alright. At least, it got the job done. But even as a technical person, I was frustrated by its password policy, which required:

*   A minimum of 12 characters
*   A combination of uppercase & lowercase letters, numbers, and symbols
*   Not reusing any of the last 24 passwords
*   An automatic password reset every 2 weeks
*   Logging in from a specific network with whitelisted IP addresses

If my credentials were incorrect, it didn't specify which part was wrong. I couldn't access it from home, and I couldn't log in from any devices, since this network wasn't WiFi accessible. Too many incorrect guesses and I'd get locked out of my account. If I do something else for 15 minutes then I'm logged out automatically. If I forget my password, I have to get it reset.

## Usability problems become security problems

Was the site secure?

*No!*

Well, maybe it was secure from a business perspective (read: no lawsuits) but it wasn't holistically secure. With such an inhumane password policy, people in this organization were writing down their credentials on a "Passwords" paper in their desk drawer. That's not secure, and when you strong-arm them into that kind of behavior, it's not your user's fault. It's yours.

## Who carries the burden of security?

Every once and a while, us technical people laugh and scoff at the average user, who doesn't have the "common sense" to create a secure password, or doesn't know how to securely manage the 20+ usernames & passwords they inevitably use. We send tweets like...

> "Top 25 most common passwords chosen by idiot users. LOLOLOOLOLOLOL!!! - https://slate.com/technology/2014/01/25-worst-passwords-what-your-terrible-common-password-says-about-you.html"

...and we have a collective laugh at those among us who can't keep up with the times. And we're totally backwards.

Because we've forgotten that it is not the user's job to make sure your web application is secure. It's your job. By passing the security burden onto your users, you're making your life easier at their expense. How secure their account is, is none of their business.

Let me repeat that again: How secure their account is, is none of their business.

That may seem like a radical notion, but look at your business card. It says something like "Web Developer," or "Application Architect" right? What do theirs say? "Truck Driver." "Tax Accountant."  "Student." "Mom."

It's not Mom's job to make sure her telephone wires aren't being tapped, or her self storage unit is safe, or her mail isn't being intercepted. That's just expected. How did we get to a place where the security of her account depends on the password that she, a non-security professional, chooses? It's like asking automobile owners to cut their own keys. We've designed a "weakest link" in our security methodology by making it depend on user training. From a usability perspective, that's never been acceptable.

If your sales department only went halfway and expected their customers to meet them in the middle, it would be a disaster. Likewise with customer support, or manufacturing. The rest of the business goes all the way, and meets the customer on their terms. Security has the same imperative.

## The usual suspects

You are, likely, familiar with the online security techniques that are common today. Security is usually achieved through layers of protection erected at each potential vulnerability. Some of these layers, however, have a particularly severe impact on the user's experience (which, again, is not ok). Here are some of the worst offenders:

**CAPTCHA**
Most people know that [CAPTCHA's are evil][1], but they are still being used all over the place.

 [1]: http://nickmatthews.ca/2013/08/why-captchas-are-evil/

**Aggressive password policies**
The more aggressive they are, the more frustrating they are

**Secret questions**
Examples include: 1) "what's your Mother's Maiden Name," and 2) "what's your favorite TV show." The problem is, humans like question 1 because it's easy, and companies like question 2 because the answer is always changing. Some organizations will force you to choose from a fixed set of questions like question 2, which is especially frustrating.

**2-factor authentication**
This can be implemented many ways, but one example is when you enter your password, and then the service sends you a code by phone or email to finish logging in. Security conscious techies applaud the use of 2-factor authentication (probably because they know how secure it is), but the fact is, you're making the user jump through more hoops.

**Your session has expired due to inactivity**
This one is better than many because *if* there are no delays in your work, you are unaware that the clock is running. Still, [nobody likes getting booted off a site][2] over and over again when they are hopping between tasks.

 [2]: http://fonicmonkey.net/2013/08/12/banish-your-session-has-expired

A lot of these aren't surprising. We run into them all the time. But just because they are the status quo doesn't mean they are ok. Remember, usability problems become security problems.

## What's the solution?

Our goal should be *zero impact security*. Today's techniques may not be there yet, but we are starting to see more solutions going in that direction, like the following:

**Honeypot form solutions**
Provides a "bait" field that is hidden for humans but not for bots. If it is filled, then the form submission is considered illegitimate.

**Password input innovation**
Examples include facial recognition, fingerprint, key card, voice recognition, or pattern matching. One good example of this is [Microsoft's picture passwords][3], where a user authenticates by tracing a pattern over an image with their finger. Our brains aren't optimized to remember a meaningless jumble of letters, numbers, and symbols. The key to better passwords is making the software do the hard work so the user doesn't have to.

 [3]: https://www.youtube.com/watch?v=XpT7bMl9CPM

**Smart detection**
These are services that determine the likelihood of something being spam, based on a variety of factors, like time to complete form, hidden form fields, server-side spam detection, and machine learning algorithms. Some providers include [Akismet][4], [Mollom][5], and [Keypick][6].

 [4]: http://akismet.com/
 [5]: http://mollom.com/
 [6]: http://keypic.com/

Notably, Google uses smart detection for authentication as well. I was once notified that somebody used my username and password while attempting to access my Gmail account, but they were denied because the request came from a IP address at discrete location in the middle of the night. It's similar to how credit card companies will lock your account, when they notice uncharacteristic spending. How's that for a slick and low-impact security measure?

**Third-party Authentication**
Buttons that say things like Login with Facebook / Login with Twitter. Not a huge leap forward, but it prevents users from creating yet another username and password, and it prevents admins from having to securely store those credentials.

**Password Abstraction**
Google Chrome lets you set up browser-level profiles, which means you need to log-in to your web browser. Once you're in, you can tell chrome to save and auto-input all your passwords for your various services. There are also services like [1password][7] or [Lastpass][8], that manage your passwords with a single master password. The problem with these solutions is that they are like novocaine for pain. They treat the symptoms (for those technical enough to implement them), while masking the underlying issues.

 [7]: https://agilebits.com/onepassword
 [8]: https://lastpass.com/

**Universal Online Identity**
The idea is to have a ubiquitous "Log in with X" that serves an independent identity across the web. The first attempt was [OpenID][9], and some newer experiments include [Mozilla Persona][10] or [WebID][11]. Watch this space… I think it's very promising.

 [9]: http://openid.net/
 [10]: http://www.mozilla.org/en-US/persona/
 [11]: http://webid.info/

This isn't comprehensive because the best solutions haven't been invented yet. We need to try some crazy ideas. Revaluate our assumptions. How is there a low-impact way to secure our homes, automobiles, and checking accounts, but not for securing our growing number of online accounts? Is there a way to authenticate with Smartphones? RFID? Keyfob? What would a web authentication API look like, and how could we make integration so simple that developers will be itching to move over to it? We may not know the best path forward, but lets move forward.

## Security is hard.

No doubt, keeping an web application secure is a difficult job. If that's your job, then kudos. I don't envy you.

But remember, it is *your* job. The current solutions won't scale, and this problem will only get worse as [software continues to eat the world][12]. User training isn't the answer. We're looking to you to agitate for the next generation of online authentication.

 [12]: http://online.wsj.com/news/articles/SB10001424053111903480904576512250915629460
