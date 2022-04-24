### JS

1) What is Event delegation ?

<details><summary><b>Answer</b></summary>
<p>
    Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the . target property of the event object
</p>
</details>

---

2) What is Event Bubbling?

<details><summary><b>Answer</b></summary>
<p>
    Event bubbling is a method of event propagation in the HTML DOM.
    It is a process that starts with the element that triggered the event and then bubbles up to the containing elements in the hierarchy
</p>
</details>

---

3) What is Promise?

<details><summary><b>Answer</b></summary>
<p>
     * A promise is simply a placeholder for an asynchronous task which is yet to be completed.
        promise function return a promise object which can is fullfilled(resolved) and cancelled(rejected)
     * A promise is an object that may produce a single value some time in the future : either a resolved value, or a reason that it's not resolved   
</p>
</details>

---
4) What is rest and spread operator and Destructuring?
<details><summary><b>Answer</b></summary>
<p>
    The rest parameter syntax allows a function to accept an indefinite number of arguments as an array

    The spread operator is a new addition to the set of operators in JavaScript ES6. It takes in an iterable (e.g an array) and expands it into individual elements. The spread operator is commonly used to make shallow copies of JS objects. Using this operator makes the code concise and enhances its readability.

   Destructuring is a JavaScript expression that allows us to extract data from arrays, objects, and maps and set them into new, distinct variables.

</p>
</details>

---
4) What are ES6 feature ?
<details><summary><b>Answer</b></summary>
<p>
    ES6 is the 6th edition of the ECMAScript, which introduces several new features such as:

- Blocked Scoped Varible: let and const 
Variables declared with the var keyword are function-scoped and hoisted at the top within its scope, whereas variables declared with let keyword are block-scoped ({}) and they are not hoisted.
- New loop for iterating over arrays and objects: for of (not for object bcz objs are not iterable) and for in 
- Template Literals : Template literals provide an easy and clean way create multi-line strings and perform string interpolation
vehicle registration with vehicle details like: Registration No., Color, allocated parking
-  Default Values for Function Parameters : if no arguments are provided to function when it is called these default parameters values will be used
- Arrow Functions : 
    -  Constructors: arrow function is not construable function, it cant be called with new keyword
    - This: the value of this in normal function depands on the context how the function is called where as in arrow function this is always lexically scoped which is parents function this value
    - arguments: with regular function arguments is a special array-like object containing the list of arguments with which the function has been invoked and there is no arguments special keyword is defined inside an arrow function.
    - Implicit return: normal function has is use return keyword to return the value, If the arrow function contains one expression, and you omit the function's curly braces, then the expression is implicitly returned
- Classes: ES6 classes make it easier to create objects, implement inheritance by using the extends keyword, and reuse the code.    


</p>
</details>

---
5) What is prototype in JavaScript

<details><summary><b>Answer</b></summary>
<p>
    every function and object has a property named prototype by default. through which inhiritance in javascript is achived


    Prototypes allow you to easily define methods to all instances of a particular object. The beauty is that the method is applied to the prototype, so it is only stored in the memory once, but every instance of the object has access to it. 
</p>
</details>

---

6) What is Map and Set

<details><summary><b>Answer</b></summary>
<p>
Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type

Set is a special type collection – “set of values” (without keys), where each value may occur only once or
Set is a collection of unique values.

Imp Note: Iteration over Map and Set is always in the insertion order, so we can’t say that these collections are unordered, but we can’t reorder elements or directly get an element by its number.
</p>
</details>

---
7) Difference between async/await and promises?

<details><summary><b>Answer</b></summary>
<p>
    async/await syntax is just syntactic sugar of promises. In fact the return value of an async function is a promise. async/await syntax gives us the possibility of writing asynchronous in a synchronous manner.
</p>
</details>

---

2) Given a multidimensional array with depth of n, flatten it. Once flattened make it available as a method on `array` instance

<details><summary><b>Answer</b></summary>
<p>

```javascript

```

</p>
</details>

---