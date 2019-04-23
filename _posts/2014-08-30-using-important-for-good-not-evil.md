---
title: "Using !important for good, not evil"
date: 2014-08-30 12:01:21
---

Does anything look wrong with the following CSS snippet, to you?

    img {
        max-width: 100% !important;
    }

There it is. The `!important` flag. The trump card.

If you are anything like me, when you started out using CSS, you loved the `!important` flag. Whenever you got into a tricky situation, you would wield the flag and demand that the styles obey your will. And they did. It was like magic.

Of course, you know how this story ends. The more you use `!important`, the more you need to use it. It starts to spread throughout your code, and as it does it loses it's power. If everything is important then nothing is.

**That was phase one: Apply `!important` willy-nilly and learn the hard way**

Of course, the problem with `!important` is that it masks an underlying issue, which is a lack of understanding about [CSS specificity][1]. So you begin learning about specificity and it starts to make sense. You realize that with proper specificity rules, you don't need to use important at all. So you don't. Ever.

[1]: http://css-tricks.com/specifics-on-css-specificity/

**Welcome to phase two: Rigidly adhering to the "never-ever use it" rule**

There are many very talented developers who stop there. They don't like `!important`. They don't need `!important`. They know it's bad and they know to stay away. That's very noble and everything, but it isn't the end.

**There's a phase three: A nuanced, more enlightened understanding**

That code snippet I showed you got called out by a tech lead who was reviewing my code a while ago. I tried to explain why the circumstances justified its use, but he wasn't taking it. Who could blame him? He's been working in this industry for 10+ years and he's got a junior developer trying to justify an exception to a best practice.  Naturally, the code was rejected and I had to change it.

It was only afterward when I was researched the issue some more that I found that exact same piece of code in [Twitter Bootstrap][2], [HTML5 Boilerplate][3], and [Zurb Foundation][4]. Throwing an !important on all images in this way ensures flexible media and prevents content authors from unwittingly including fixed width images on a responsively themed site.

[2]: https://github.com/twbs/bootstrap/blob/783e001786e21659a63aae2513a71bb73667c974/dist/css/bootstrap.css#L225
[3]: https://github.com/h5bp/html5-boilerplate/blob/v4.3.0/css/main.css#L285-L287
[4]: https://github.com/zurb/foundation/blob/1f7efae3658caefc6752c47187bcae14276043fa/scss/foundation/components/_global.scss#L407

But it's not just for responsive images. You can look through open-source CSS frameworks and find [other situations when using `!important` is appropriate][5]. They aren't common, but they exist. `!important` is in the spec for a reason.

[5]: https://groups.google.com/forum/#!msg/compass-users/9A5fy6DdBLA/em91Qn7TBfIJ "If John Albin says it's appropriate, it's appropriate."

And while this is a story about the !important flag, the pattern repeats itself everywhere. It seems like everything I learn, whether it's web-related or not, starts with ignorance, progresses to absolutes, and ends in nuanced understanding. The proud front-end developer in me likes to believe that I've ascended to nuanced understanding in many (if not most) areas in my field, but the truth is that I haven't. Neither have you. Nobody is an expert in everything.

In short, the takeaway is to keep learning and be open to re-evaluating your position. Even when it's questioned by a junior developer. ;)
