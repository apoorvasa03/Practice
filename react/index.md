1. ### What is React?
      React is a front-end and open-source JavaScript library which is useful in developing user interfaces specifically for applications with a single page. It is helpful in building complex and reusable user interface(UI) components of mobile and web applications as it follows the component-based approach.
2. ### what are the advantages of react?
      1. Use of Virtual DOM to improve efficiency: React uses virtual DOM to render the view. As the name suggests, virtual DOM is a virtual representation of the real DOM. Each time the data changes in a react app, a new virtual DOM gets created. Creating a virtual DOM is much faster than rendering the UI inside the browser. Therefore, with the use of virtual DOM, the efficiency of the app improves.
      2. Gentle learning curve: React has a gentle learning curve when compared to frameworks like Angular. Anyone with little knowledge of javascript can start building web applications using React.
      3. Reusable components: React uses component-based architecture for developing applications. Components are independent and reusable bits of code. These components can be shared across various applications having similar functionality. The re-use of components increases the pace of development
      4. Huge ecosystem of libraries to choose from: React provides you with the freedom to choose the tools, libraries, and architecture for developing an application based on your requirement

3. ### what are the limitation of react ?
      1. React is not a full-blown framework as it is only a library.
      2. The components of React are numerous and will take time to fully grasp the benefits of all.
      3. It might be difficult for beginner programmers to understand React.
      4. Coding might become complex as it will make use of inline templating and JSX.

4. ## how diffing algorithm works? 
      React implements a heuristic/diffing O(n) algorithm based on two assumptions
      1. Two elements of different types will produce different trees.
      2. The developer can hint which child elements may be stable across different renders with a key prop.

5. ### what is useState in react?
      The useState() is a built-in React Hook that allows you for having state variables in functional components. It should be used when the DOM has something that is dynamically manipulating/controlling.

6. ### what are keys in react?
      keys the special string attribute thats needs to be included when using lists of element.
      Importance of keys: keys help React to understand the order or uniqueness of each element, which help identifing which elements were added, changed or removed.

7. ### what is jsx?
      JSX is javascript syntax extention and stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild() or createElement().


8. ### When to use a Class Component over a Function Component?
      If the component needs *state or lifecycle methods* then use class component otherwise use function component.
      *However, from React 16.8 with the addition of Hooks, you could use state , lifecycle  methods and other features that were only available in class component right in your function component.*
      *So, it is always recommended to use Function components, unless you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries *

9. ### What is the virtual DOM? How does react use the virtual DOM to render the UI?
      1. virtual DOM is a concept where a virtual representation of the real DOM is kept inside the memory and is synced with the real DOM by a library such as ReactDOM.
      
      2. why virtual DOM was introduced ? DOM manipulation is an integral part of any web application, but DOM manipulation is quite slow when compared to other operations in JavaScript. The efficiency of the application gets affected when several DOM manipulations are being done. Most JavaScript frameworks update the entire DOM even when a small part of the DOM changes.
      For example, consider a list that is being rendered inside the DOM. If one of the items in the list changes, the entire list gets rendered again instead of just rendering the item that was changed/updated. This is called inefficient updating.
      To address the problem of inefficient updating, the react team introduced the concept of virtual DOM.

      3. React uses two virtual DOMs to render the user interface. One of them is used to store the current state of the objects and the other to store the previous state of the objects. Whenever the virtual DOM gets updated, react compares the two virtual DOMs and gets to know about which virtual DOM objects were updated. After knowing which objects were updated, react renders only those objects inside the real DOM instead of rendering the complete real DOM. This way, with the use of virtual DOM, react solves the problem of inefficient updating

7. ### What are Pure Components?

    *`React.PureComponent`* is exactly the same as *`React.Component`* except that it handles the `shouldComponentUpdate()` method for you. When props or state changes, *PureComponent* will do a shallow comparison on both props and state. *Component* on the other hand won't compare current props and state to next out of the box. Thus, the component will re-render by default whenever `shouldComponentUpdate` is called.

    
8. ### What is state in React?

    *State* of a component is an object that holds some information that may change over the lifetime of the component. We should always try to make our state as simple as possible and minimize the number of stateful components.

    Let's create a user component with message state,


    ```jsx harmony
    class User extends React.Component {
      constructor(props) {
        super(props)

        this.state = {
          message: 'Welcome to React world'
        }
      }

      render() {
        return (
          <div>
            <h1>{this.state.message}</h1>
          </div>
        )
      }
    }
    ```

    State is similar to props, but it is private and fully controlled by the component. i.e, It is not accessible to any other component til the owner component decides to pass it.


    
9. ### What are props in React?

    *Props* are inputs to components. They are single values or objects containing a set of values that are passed to components on creation. They are data passed down from a parent component to a child component.

    The primary purpose of props in React is to provide following component functionality:

    1. Pass custom data to your component.
    2. Trigger state changes.

 1. ### What is Virtual DOM in React?  

        The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation. ... They may also be considered a part of “virtual DOM” implementation in React

 2. ### Explain react lifecycle methods  
      Mounting  – componentDidMount(), render(), getDerivedStateFromProps()
      Update    – componentDidUpdate(), render() ,  shouldCompoenntUpdate(), getDerivedStateFromProps()
      Unmount   – componentWillUnmount()

      ```jsx harmony
      // componentDidMount
        useEffect(() => {
          console.log("The use effect ran");
        }, []);

        // componentDidUpdate, when count is updated, useEffect will be called again
        useEffect(() => {
          console.log("The use effect ran");
        }, [count]);

        // componentWillUnmount, the return function is called when before component is unmounted.
        useEffect(() => {
          console.log("The use effect ran");
          return () => {
            console.log("the return is being ran");
          };
        }, []);

        // componentWillUnmount, when count is updated, componentWillUnmount is called and then componentDidUpdated will be caledd .
        useEffect(() => {
          console.log("The use effect ran");
          return () => {
            console.log("the return is being ran");
          };
        }, [count]);
      ````

 3. ### what is babel?
      Babel is a JavaScript transpiler/compiler that converts edge JavaScript into plain old ES5 JavaScript that can run in any browser (even the old ones). It makes available all the syntactical sugar that was added to JavaScript with the new ES6 specification, including classes, fat arrows and multiline strings.

 4. ### how does the single page application works (SPA)   
      The SPA is a web application that interacts with the user by dynamically rewriting the current page, rather than loading entire new pages from the server. The main advantage of a single-page application is its speed 

 5. ### what are props       
    Props are inputs to components, They are data passed down from a parent component to a child component

 6. ### what are states
      State of a component is an object that holds some information that may change over the lifetime of the component

  7. ### What is the difference between state and props?
      Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function.

  8. ### what are keys in react ?
      Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:

  8. ### what are Redux ? 
         1. redux is the open source javascript library for state management. 
         2. its provides the centralized store where compenet get direct acces to data.
         3. its provides consistent data across the application which make complex application easier
         4. with redux dev tool debugging is easier

  9. ### explain redux lifecycle ? 

    
   