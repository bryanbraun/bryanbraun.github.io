---
title: "Web developers don't use enough spreadsheets"
date: 2022-04-25
related: [
  "Drawing git branching diagrams",
  "Always be Translating",
  "The Command Line is a Terrifying Thing"
]
---

I think web developers don't use enough spreadsheets.

They're not a web-development technology per se (though [there are exceptions](https://www.sheet2site.com/)) but they're still useful as a design tool, a programming tool, and most importantly a communication tool. Here's a few real examples from work I've done over the last few years.

## Spreadsheets as a frontend design tool

On one project, we needed to built a collection of color-themes for a web platform. It was like light-mode / dark-mode, except they wanted several other themes, each with it's own color palette.

Each color-theme would need to support our existing page elements (of which there were a lot), and we wanted to be consistent in how we applied the color palette, so we didn't tie our CSS into knots. Most importantly, every theme needed to meet WCAG AA accessibility requirements. Our solution was a spreadsheet that looked something like this:

![A spreadsheet with columns for each color theme, with the color palette at the top and web elements elements going down the page]({{site.url}}/assets/images/color-tokens-spreadsheet.png)

Now, every time we wanted to add a new element, we could put it on the spreadsheet, map it to a color-token, and see what it would look like across all of our color-themes. Adding a new color-theme was also straightforward. We could just create a new column, choose a palette, and check to see how those colors would be applied across our elements.

I'm sure you could do something similar with a modern design tool that supports color tokens and a set of dynamic high-fidelity mockups. But for our small team, the spreadsheet worked great.

On another project, our client was building a design system and they wanted to audit the existing website for patterns that were in use. We basically screenshotted all of the page elements (buttons, headings, links, etc.), putting each variation into a spreadsheet row  with notes for each one (we used [Airtable](https://www.airtable.com/), which has great support for images and other embeds).

Audits are a great use-case for spreadsheets in general, because they add structure to your process and encourage you to capture information consistently.

## Spreadsheets as a programming tool

A while back, I was asked to help build an app that tracked the value of a stock portfolio. We were able to pull a lot of the info from financial APIs, but the stakeholders also wanted this app to include some special formulas for scoring and ranking stock purchases. We had a team of competent developers, but none of us were domain experts, and I worried that a mistake in our formulas could easily go unnoticed. We needed test cases.

So what did we do? We prototyped the app in a spreadsheet before writing a single line of Ruby.

With the spreadsheet, our stakeholders could see the formulas in action and work through some test cases with us. They weren't developers, but it didn't matter. The spreadsheet was a familiar-enough environment that they could add new example data and check the results themselves. This process uncovered several edge cases that would have been difficult to explain otherwise.

I've heard of other people using spreadsheets to prototype products. [Jesse Mecham famously sold copies of his spreadsheet product ("You Need a Budget") before building it into a web app](https://www.youtube.com/watch?v=jw8N7YrBM4o). Why? Because building a web app is hard. There's a thousand little details to think of like authentication, hosting, and deployment. Spreadsheets can help you move quickly and validate the core parts of your app before you've wasted your time (and budget) on all that other stuff.

## More effective communication

In the examples I shared, every spreadsheet turned into a valuable reference document for both developers and stakeholders alike. Modern spreadsheets are collaborative documents that you can easily link to and share asynchronously. With more and more people working remotely, we need these kinds of tools to communicate more effectively.

Spreadsheets bridge the gap to non-technical. If you show your stakeholders a code editor or terminal window you can see their eyes glaze over. It's just intimidating. But *spreadsheets are the most technical document that's widely understood by people throughout the companies we work for*. That gives us a way to surface technical decisions to just about anyone. Spreadsheets are a tool for [translating]({{site.url}}/2013/12/14/always-be-translating/).

We developers use other kinds of communication tools regularly, like diagrams, wireframes, and sticky notes. Let's put spreadsheets in the same toolbox.
