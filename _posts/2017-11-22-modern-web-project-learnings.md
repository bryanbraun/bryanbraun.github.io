---
title: "Modern web project learnings"
date: 2017-11-22 23:37:00
related: [
  "Hacktoberfesting my Personal Website"
]
---

*Note: This is a guest post written by [@thibautvs](https://github.com/thibautvs) and [contributed during Hacktoberfest](http://0.0.0.0:4000/2017/11/19/hacktoberfest-2017/#write-a-guest-post). I appreciate his reflection on lessons learned and agree with his sentiment on the power of small, highly skilled teams.*

***

I'm working as a freelance JavaScript developer and I had the opportunity to create the web department, including
designing the web stack and hiring the web team for an international, market leader company.
I'd like to share 5 valuable things that I learnt during this very interesting journey.

## Libraries approach

First of all, I wanted to build our web stack based on a libraries approach. Looking back now, it has been
a great decision as we have the total freedom to assemble the best-in-class libraries and even include unusual
ones that best fit the project needs. We could swap libraries for superior ones as they were being released
and we have a complete flexibility over our technological foundation, which is simply not possible with frameworks
The project being long-lived (5-10 years), a libraries-based stack (React.js in our case)
proved to be a much more dependable choice. There was however an initial price to pay as assembling our own stack required a
significant amount of research. But the results are well worth it!

## React is awesome

Working with React.js has been a great experience and provided a huge developer satisfaction and productivity.
Facebook proved with React.js that MVC doesn't scale and that 2-way bindings allow for unpredictable code due to
cascading changes. It also showed that separating the template from the logic was a separation of languages rather than
concerns and JSX hit the nail on the head by putting HTML into JS, which is the opposite of competing frameworks. As a
result, the full power of JS can be used and developers can hit the ground running as they're already familiar with the
JS language.

## One-way data flow and predictability

To manage the state, I chose the Redux.js library, which proved very satisfactory. Despite its verbose nature
(action types, action creators and reducers), it allows for an unmatched level of transparency regarding state
management. Being able to see, for each action in the application, a log with the complete previous state,
the payload of the change and the resulting next state is of tremendous value to develop and maintain a
data-driven web application.

## A few good people model

When the management asked me if I wanted a small or big team, I answered "small" right away. This is based from
my experience working for McKinsey where, in a team of 4-5 developers, we went from idea to market in 3 months.
In my current team, there is simply no overhead, we can communicate verbally due to our physical proximity,
allowing us to spend little to no time in meetings and getting things done quickly. The developer satisfaction
is also very high due to the fact that everyone has a significant impact on the project and there are very few
frustrations (such as merge conflicts, etc) due to the small nature of the team.

## The coding assignment

If you have to build a big project with a small team, than that team should be highly skilled. You want the passionate
developers who can get things done quickly and produce high quality code. That's why, as a replacement of most of the
typical interview questions, I created coding assignments designed to show how skilled and productive candidates are.
The key here is to give a real-world assignment that reflects the nature of the daily work and to allow candidates
to use the web framework/library of their choice so you can see what it's like when they're at the top of their game.
None of the candidates had prior React.js experience and were still able to push changes on day one because they were hired
for skills and passion rather than current knowledge of a particular technology.
