---
layout: post
title: "An overview of Javascript's try-catch"
date: 2014-10-19 22:00:59
---

Javascript has a pattern called try-catch that can be a bit confusing if you aren't used to it. I just finished a fantastic javascript book, which covered the topic well, so I thought I'd share what I learned.

## What is try-catch?

Try-catch is a code block, similar to an if conditional. It looks like this:

    try {
        // put some code here
    } catch (err) {
        // put more code here
    finally {
        // put more code here
    }

The purpose of a try-catch block is to handle errors gracefully. And when I say errors, I don't mean bugs or missing semicolons. I mean big, nasty, capital E errors.

You see, sometimes in your program you'll come across a situation that you know is capable of throwing an error, and there's nothing you can do about it. The best example is when you are getting data from an external API. That API might go down, and when it does, your program is going to try to connect to it, fail, and throw a error. If that error is Fatal, your application will immediately stop, resulting in a broken experience for your users.

When you put something into the "try" braces, you are effectively saying, "I know that this code could result in a nasty error, but instead of letting it break the application, I want to intercept (or "catch") the error, prevent it from breaking the program, and define what I want to happen next." Not too complicated right? That's "try".

The "catch" braces contains the code that you want to run when that error occurs (aka when it is "caught"). In the case of the API failure, you might want to try to reconnect to the API or provide a human readable error message. The code in "catch" only runs if an error is found in the "try" code.

The "finally" braces, contains any code that you want to run "no matter what." It will run if an error was caught, and it will run if there was no error at all. In fact, if you include a finally block there is nothing you or anybody can do to prevent the code in the finally block from running. Of course, the finally block is optional.

## A couple examples

We can test this out by creating our own artificial errors using the 'throw' statement, like so:

    try {
    &nbsp;&nbsp;&nbsp; throw new Error("My custom error message");
    } catch (err) {
    &nbsp;&nbsp;&nbsp; // Print the error message to the console.
    &nbsp;&nbsp;&nbsp; console.log(err.message);
    }

As you can see the "catch" block references a javascript object that we've named \`err\`. This object contains information about the error that was returned, like the error message (stored in \`err.message\`).

Let's make a few changes to our example to bring all these concepts together.

    try {
    &nbsp;&nbsp;&nbsp; console.log(&#39;This is the first "try" message&#39;);
    &nbsp;&nbsp;&nbsp; throw new Error("My custom error message");
    &nbsp;&nbsp;&nbsp; console.log(&#39;This is the second "try" message&#39;);
    } catch (e) {
    &nbsp;&nbsp;&nbsp; console.log(&#39;This is the "catch" message: &#39; + e.message);
    } finally {
    &nbsp;&nbsp;&nbsp; console.log(&#39;This is the "finally" message&#39;);
    }
    
    console.log(&#39;This is an additional message, after try-catch-finally&#39;);

Running this code results in the following messages in the console:

    This is the first "try" message
    This is the "catch" message: My custom error message
    This is the "finally" message
    This is an additional message, after try-catch-finally

As you can see, the second "try" message is skipped because code execution moves to the catch block as soon as our error is encountered. You can also see that our additional message (placed after the try-catch-finally block) runs as well. By "catching" our error, the program can continue running even if it would have otherwise fatally stopped.

## Tell me more

If you want more information on try-catch (including when and when not to use it) here are a few good links:

*   [Mozilla Reference: try...catch][1]
*   [Is try-catch a good practice?][2]
*   [Javascript Exceptions][3]

 [1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
 [2]: http://programmers.stackexchange.com/questions/144326/try-catch-in-javascript-isnt-it-a-good-practice
 [3]: http://javascript.info/tutorial/exceptions