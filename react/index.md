shadow dom - is a new dom feature to create a custom component
-- Shadow DOM is hidden DOM tree attached to elements in regular DOM
-- Shadow DOM elements aren't affected by CSS, conversely the CSS in the shadow root won't affect the regular DOM

possible ways to create a component.

    1. **Function Components:** This is the simplest way to create a component. Those are pure JavaScript functions that accept props object as first parameter and return React elements:

        ```jsx harmony
        function Greeting({ message }) {
          return <h1>{`Hello, ${message}`}</h1>

        }
        ```

    2. **Class Components:** You can also use ES6 class to define a component. The above function component can be written as:

        ```jsx harmony
        class Greeting extends React.Component {
          render() {
            return <h1>{`Hello, ${this.props.message}`}</h1>
          }
        }
        ```

   6. ### When to use a Class Component over a Function Component?

    If the component needs *state or lifecycle methods* then use class component otherwise use function component.
    *However, from React 16.8 with the addition of Hooks, you could use state , lifecycle  methods and other features that were only available in class component right in your function component.*
    *So, it is always recommended to use Function components, unless you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries *

    
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

    
   