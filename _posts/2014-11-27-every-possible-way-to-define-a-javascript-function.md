---
title: "Every Possible Way to Define a Javascript Function"
date: 2014-11-27 14:35:18
related: [
  "Every Possible Way"
]
---

One small thing that confused me as I was learning Javascript was the many different kinds of ways to define a Javascript function. I could never seem to find one place that showed all of them, and explained why you might use each one.

That is the aim of this post. So without further ado, here are ALL the ways to define a Javascript function.

### Function Declarations:

<table class="bb-table1">
  <thead>
    <tr>
      <th scope="col">
        Type
      </th>

      <th scope="col">
        Example
      </th>

      <th scope="col">
        Explanation
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Named Function Declaration
      </td>

      <td>
        <pre>
<code>function sum(num1,num2) {
  return num1 + num2;
}</code></pre>
      </td>

      <td>
        The "classic" declaration, which works well for simple uses. Functions declared like this are "hoisted", meaning, the javascript engine reads all these declarations first before executing any of the rest of the code. The declaration statement stands alone, and cannot be combined with other expressions. Also, notice that this declaration does not need to be followed with a semicolon.
      </td>
    </tr>
  </tbody>
</table>

### Function Expressions:

<small>Function expressions are very flexible, and can used in many contexts. This list aims to demonstrate that flexibility, and show use-cases for each example. Also: <a href="http://kangax.github.io/nfe/#expr-vs-decl">here's a great article on the differences between function declarations and expressions</a>.</small>

<table class="bb-table1">
  <thead>
    <tr>
      <th scope="col">
        Type
      </th>

      <th scope="col">
        Example
      </th>

      <th scope="col">
        Explanation
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Variable Assignment
      </td>

      <td>
        <pre>
<code>// Named
var sum = function add(num1,num2) {
  return num1 + num2;
};

// Anonymous
var sum = function(num1, num2) {
  return num1 + num2;
};</code></pre>
      </td>

      <td>
        <p>
          This is functionally equivalent to the Function Declaration above, except this variation is NOT hoisted. The name of our function (add) cannot be called directly (see below), but it can come in handy when debugging:
        </p>

        <pre>
<code>sum(1,1);
// returns 2

add(1,1);
// "add is not defined"</code></pre>
      </td>
    </tr>

    <tr>
      <td>
        Immediately invoked
      </td>

      <td>
        <pre>
<code>// Named
(function sum(num1, num2) {
  return num1 + num2;
}(1, 2));

// Anonymous
(function(num1, num2) {
  return num1 + num2;
}(1, 2));</code></pre>
      </td>

      <td>
        This function is immediately invoked, meaning that it is defined and called at the same time. The function's name is only available within its execution scope (defined by the parentheses), so it cannot be called later in the program. <pre>
<code>sum(1,1);
// "sum is not defined"</code></pre> Immediately invoked functions can be used to encapsulate a program, preventing it from polluting the global namespace (

        <a href="http://stackoverflow.com/questions/3597087/javascript-encapsulation">here's a simple example of that</a>).
      </td>
    </tr>

    <tr>
      <td>
        Assigned and Invoked
      </td>

      <td>
        <pre>
<code>// Named
var sum = function add(num1, num2) {
  return num1 + num2;
}(1, 2);

// Anonymous
var sum = function(num1, num2) {
  return num1 + num2;
}(1, 2);</code></pre>
      </td>

      <td>
        This is a combination of the variable assignment expression and the immediately invoked function (both demonstrated above). One neat application for the named variety of this is to make recursive functions more readable, by <a href="http://fitzgeraldnick.com/weblog/27/">substituting arguments.callee with your function name</a>.
      </td>
    </tr>

    <tr>
      <td>
        Property Assignment
      </td>

      <td>
        <pre>
<code>// Named
var obj1 = {
  sum: function add(num1, num2) {
    return num1 + num2
  }
};

// Anonymous
var obj2 = {
  sum: function(num1, num2) {
    return num1 + num2
  }
};</code></pre>
      </td>

      <td>
        <p>
          By assigning functions (either named or unnamed) to properties of objects, we define methods on those objects. This has many applications in object oriented programming. We can also use this to namespace our functions, and keep them out of the global scope.
        </p>

        <p>
          Here's how we would call the methods defined in the examples:
        </p>

        <pre>
<code>obj1.sum(1, 2);
// returns 3

obj2.sum(1, 2);
// returns 3
</code></pre>
      </td>
    </tr>

    <tr>
      <td>
        Passed as Argument
      </td>

      <td>
        <pre>
<code>// Named
window.setTimeout(&lt;strong>function add() {
  alert(1 + 2);
}&lt;/strong>, 500);

// Anonymous
window.setTimeout(&lt;strong>function() {
  alert(1 + 2);
}&lt;/strong>, 500);</code></pre>
      </td>

      <td>
        <p>
          Function names in ECMAScript are nothing more than variables, meaning we can pass them around like variables. Many methods (like setTimeout()) take functions as arguments. This is a common pattern for defining callbacks.
        </p>

        <p>
          In these examples, we define them in line, but we could also pass in predefined functions.
        </p>
      </td>
    </tr>

    <tr>
      <td>
        Returned (closure)
      </td>

      <td>
        <pre>
// Named
function counter() {
    var count = 0;
    <strong>return function c() {
        alert(count++);
    }</strong>
}

// Anonymous
function counter() {
    var count = 0;
    <strong>return function() {
        alert(count++);
    }</strong>
}
</pre>
      </td>

      <td>
        <p>
          Functions can be returned from other functions. This lets us do clever things like the following (picking up from the example):
        </p>

        <pre>
<code>var bob = {}, rob = {};
bob.count = counter();
rob.count = counter();
bob.count(); // alerts "0"
bob.count(); // alerts "1"
rob.count(); // alerts "0"
rob.count(); // alerts "1"
</code></pre>

        <p>
          Each person can increment their own count variable despite the fact that it originated outside the scope of the count() function. This is called a closure. <a href="http://stackoverflow.com/questions/111102/how-do-javascript-closures-work">Here's some more information on Javascript closures</a>, if you're curious.
        </p>
      </td>
    </tr>

    <tr>
      <td>
        Arrow Functions
      </td>

      <td>
        <pre>
<code>// There is no "named"
// form of this function.

// Anonymous
var sum = (num1, num2) =&gt; {
  return num1 + num2
};

// Anonymous w/out optional
// bracketed return
var sum = (num1, num2) =&gt; num1 + num2;
</code></pre>
      </td>

      <td>
        <p>
          Arrow (or "fat-arrow") functions are newly introduced as <a href="http://wiki.ecmascript.org/doku.php?id=harmony:arrow_function_syntax">part of the ES6 specification</a>. As such, they are only implemented in the most modern browsers (check <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Browser_compatibility">a compatibility table</a> for specifics). This example:
        </p>

        <pre>
<code>var sum = (num1, num2) =&gt; {
  return num1 + num2
};</code></pre>

        <p>
          is functionally equivalent to:
        </p>

        <pre>
<code>var sum = function(num1, num2) {
  return num1 + num2;
};</code></pre>

        <p>
          Arrow functions are function expressions, and as such, they are usable in all the contexts shown above (variable assignment, passed as an argument, etc.). You may see slight syntactical variations across uses (as shown with in the example with optional brackets). <a href="http://www.nczonline.net/blog/2013/09/10/understanding-ecmascript-6-arrow-functions/">Here's a good blog post</a> that explains the syntax and it's variations.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Function Constructor

<table class="bb-table1">
  <thead>
    <tr>
      <th scope="col">
        Type
      </th>

      <th scope="col">
        Example
      </th>

      <th scope="col">
        Explanation
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Function Constructor
      </td>

      <td>
        <pre class="no-space">
<code>var sum = new Function('num1', 'num2', 'return num1 + num2');</code></pre>
      </td>

      <td>
        Defining functions with the Function constructor is less performant than the other methods, so I wouldn't recommend this option. However, it is useful in demonstrating that in Javascript, functions are "just objects."
      </td>
    </tr>

    <tr>
      <td>
        Constructor w/<code>apply()</code>
      </td>

      <td>
        <pre class="no-space">
<code>var args = ['num1', 'num2', 'return num1 + num2'];
var sum = Function.apply(this, args);</code></pre>
      </td>

      <td>
        This uses the <code>apply()</code> method to call the constructor of the Function object and create a function. The function can then be run with <code>sum(1,2);</code>. Hard to think of a practical application for this one, but it could be used in rare cases.
      </td>
    </tr>

    <tr>
      <td>
        Immediately Invoked Constructor w/<code>apply()</code>
      </td>

      <td>
        <pre class="no-space">
<code>var args = ['num1', 'num2', 'return num1 + num2'];
Function.apply(this, args)
        .apply(this, [1, 2]);</code></pre>
      </td>

      <td>
        This uses the <code>apply()</code> method with the constructor of the Function object to immediately invoke the function we defined. Again, it's hard to think of a practical application for this one, but hey, it works as expected.
      </td>
    </tr>
  </tbody>
</table>

## Conclusion

Conclusion

I think that's all of them, but if you know of any others that I'm not aware of, (or have other suggestions to make), let me know in the comments below.

If you want to see patterns and techniques for declaring functions using the methods I described above, check out [Addy Osmani's book, "Javascript Design Patterns"][1]. It is Creative Common licensed, published online, and freely available to read.

 [1]: http://addyosmani.com/resources/essentialjsdesignpatterns/book/ "Javascript Design Patterns"

* * *

<small>Also, a big thanks to Nicholas Zakas' book "<a href="http://www.amazon.com/Professional-JavaScript-Developers-Nicholas-Zakas/dp/1118026691">Professional Javascript for Web Developers</a>", which brought a lot of this together for me.</small>

<small><strong>Update 1:</strong></small>

<small>Based on feedback in the comments, I reorganized the table in order to more accurately classify the function declarations and expressions. I also tweaked the examples to (hopefully) be a bit less confusing.</small>
