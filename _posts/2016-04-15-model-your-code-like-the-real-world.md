---
layout: post
title: "Model your code like the real world"
date: 2016-04-15 22:08:57
---

One of my biggest "aha!" moments in programming happened while I was applying for a front-end position at a well-known company in San Francisco. I had been given a programming challenge, which I was allowed only 2 hours to complete. The task: Implement the game [Connect Four][1] in the web browser with Javascript.

 [1]: https://en.wikipedia.org/wiki/Connect_Four

I was under-qualified. I'd never made a functional game before, and while I had read some good Javascript books, I hadn't written much Javascript in production.

So I froze. I stared at my empty text editor, saying "c'mon Bryan. Think." but I didn't know where to start.

The clock was ticking. Then I had this thought: How would I represent the game board in the code? Like, if I ignore everything else, and I just want to have the board in code, what would it look like? So I came up with this:

```js
board = [[0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0]];
```

Now I had a thing in my code that physically looks like a board. As soon as I saw it there, I starting getting thoughts. How could I write code to add a piece to that board? How can I distinguish between a black and red piece in that board? How can I check if there were four pieces in a row on that board? I was [off to the races][2].

 [2]: https://github.com/bryanbraun/connect-four

When the exercise was over, something dawned on me. I can build anything if I just make my code look like the real world thing.

How might I represent a todo list in code?

```js
todoList = ["buy some milk",
            "call Sarah",
            "research phone plans"];
```

What about a silverware drawer?

```js
silverwareDrawer = {
  littleSpoons: 10,
  bigSpoons: 6,
  forks: 12,
  knives: 5
};
```

What about a lottery ticket?

```js
lottoTicket = [11, 45, 3, 7, 33, 20];
```

If you just look at your data types... in my case, numbers, strings, booleans, arrays and objects, you can represent just about everything. And there's not "one right answer" on how to represent things. There could be several ways for your application or language, each with their own strengths and weaknesses. This gets even better with object oriented languages. Anything that's an "object" in the real world, (like a toothbrush, a tree, a cash register, or a nuclear submarine) can be represented as an "object" in code. That's why it's called "object"-oriented. Its methods are the things the object can do (think, verbs). Its properties are things that describe the object (think, adjectives or states).

For example:

```js
pen = {
  inkColor: "black",
  tipExtended: true,
  click: function() {
    this.tipExtended = !this.tipExtended;
  }
}
```

and...

```js
dice = {
  visibleNumber: 5,
  roll: function() {
    this.visibleNumber = Math.ceil(Math.random() * 6);
  }
};
```

All of this data-modeling is second-nature to seasoned developers, but it was a breakthrough for me. Instead of Javascript being a soup of functions, loops, conditions, (etc.), it was a set of tools to build a world inside the computer that looks as close to the real world as possible.
