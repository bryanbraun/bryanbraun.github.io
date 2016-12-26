---
layout: post
title: "EMs vs PX: A succinct history lesson"
date: 2014-10-01 17:47:17
---

A while back, some developers on my team got into a healthy discussion about the tradeoffs between using EMs or PX units in our Sass files. I decided to do some research, and I ended up down a something of a rabbit hole. I drafted an email containing all the links I collected to my team, but I figured everybody could benefit from what I found so I'm posting it here instead.

> Hey team,
> 
> I did some research on the EMs vs PX issue and it's a bit of a rabbit hole with lots of history. Here are the boiled down arguments (with links to the references, in case you want to read them yourself):
> 
> *   EMs were originally recommended as the way to bring working text-zoom functionality on IE6 and below (as mentioned in <a href="http://www.w3.org/TR/WCAG-TECHS/C14.html" target="_blank">this W3C document</a>, and [this supporting article][1]). This is a best-practice that was defined as early as 1997 (as mentioned in [this excerpt][2] from [this book on Cascading Style Sheets][3]). Since we don't support IE6, this is no longer a reason for us.
> *   Using PX for fonts/line-height resulted in poor vertical rhythm on IE6 &IE7 when zooming the browser (an issue described in detail in [this "A List Apart" article][4]). Again, since we don't support IE6 & IE7, this is no longer a reason for us.
> *   Basing Media Queries on EMs leads to good results because [zooming in triggers narrow width media queries][5]. This is a compelling reason to continue using EMs specifically for our breakpoint variables.
> *   Some say responsive is "easier" with EMs. This is because, depending on your implementation, you can set it up to have fewer font-size changes between breakpoints. You can [read more about it here][6]. This isn't that compelling for me because 1) We don't use this technique on [our website], and 2) it's just a tradeoff with the maintenance difficulty of nested EMs.
> 
> In summary, 1) the **historical** reasons to use EMs only apply to IE7 and below. 2) You may be able to prevent broken layouts when zooming by using EMs in breakpoint values. 3) Certain techniques using EMs in responsive designs can reduce the amount of CSS you write.
> 
> For some perspective, Twitter Bootstrap does not use EMs. [It uses PX for everything, and will continue to do so][7] until browser support lets them switch to REMs (which are basically EMs, without the nesting problem). Many other frameworks, like Zurb Foundation, use EMs exclusively.
> 
> Interested in your thoughts,
> 
> : bryan

 [1]: http://clagnut.com/blog/348/
 [2]: http://www.w3.org/WAI/GL/css2em.htm
 [3]: http://www.amazon.com/Cascading-Style-Sheets-Designing-Web/dp/020141998X
 [4]: http://alistapart.com/article/howtosizetextincss#section6
 [5]: http://blog.cloudfour.com/the-ems-have-it-proportional-media-queries-ftw/
 [6]: http://css-tricks.com/why-ems/
 [7]: https://github.com/twbs/bootstrap/issues/1943

Clearly this issue is a good one to periodically revisit because of how browsers and standards have changed over the years. I have a feeling that once the support for REMs improves, we'll see newer approaches and recommendations. Watch this space.