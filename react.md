### JS

1) What is React and Difference between react/ angular/ jquery

<details><summary><b>Answer</b></summary>
<p>
- react. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.

React Is Faster Than jQuery. One of the biggest things that React has going for it is the use of the Virtual DOM (Document Object Model) instead of the traditional DOM. While jQuery works with the DOM directly, React uses the virtual DOM which is what makes React so much faster.
</p>
</details>

---
2) How Diffing algorithm works ?

<details><summary><b>Answer</b></summary>
<p>
    Real DOM manipulation is expensive and time consuming so react uses the virtual DOM.
    Whenever there is a change in the state of the UI elements, a new virtual DOM is created which is compared with previous virtual DOM and only the differed elements is updated to the real DOM.

    Diffing algorithm works based on two assumptions:
-   Two elements of different types will produce different trees.
-   The developer can hint at which child elements may be stable across different renders with a key prop.
</p>
</details>

---
2) ?

<details><summary><b>Answer</b></summary>
<p>

</p>
</details>

---