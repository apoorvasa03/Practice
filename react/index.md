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

4. ### how diffing algorithm works? 
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
      *So, it is always recommended to use Function components, unless you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries*

9. ### What is the virtual DOM? How does react use the virtual DOM to render the UI?
      1. virtual DOM is a concept where a virtual representation of the real DOM is kept inside the memory and is synced with the real DOM by a library such as ReactDOM.

      2. why virtual DOM was introduced ? DOM manipulation is an integral part of any web application, but DOM manipulation is quite slow when compared to other operations in JavaScript. The efficiency of the application gets affected when several DOM manipulations are being done. Most JavaScript frameworks update the entire DOM even when a small part of the DOM changes.
      For example, consider a list that is being rendered inside the DOM. If one of the items in the list changes, the entire list gets rendered again instead of just rendering the item that was changed/updated. This is called inefficient updating.
      To address the problem of inefficient updating, the react team introduced the concept of virtual DOM.

      3. React uses two virtual DOMs to render the user interface. One of them is used to store the current state of the objects and the other to store the previous state of the objects. Whenever the virtual DOM gets updated, react compares the two virtual DOMs and gets to know about which virtual DOM objects were updated. After knowing which objects were updated, react renders only those objects inside the real DOM instead of rendering the complete real DOM. This way, with the use of virtual DOM, react solves the problem of inefficient updating.

10. ### What are the differences between controlled and uncontrolled components ?
      1. Controlled component: In a controlled component, the value of the input element is controlled by React. We store the state of the input element inside the code, and by using event-based callbacks, any changes made to the input element will be reflected in the code as well.

      2. Uncontrolled component: In an uncontrolled component, the value of the input element is handled by the DOM itself. Whenever the value of the input element is changed, event-based callbacks are not called. Basically, react does not perform any action when there are changes made to the input element.
      To access the value of the input element of uncontrolled component, we can use ref. ```<input type='file'/>``` is always uncontrolled component.

11. ### What are props in React?
    *Props* are inputs to components. They are data passed down from a parent component to a child component.

    The primary purpose of props in React is to provide following component functionality:

    1. Pass custom data to your component.
    2. Trigger state changes.

12. ### What is prop drilling in React?
      Sometimes while developing React applications, there is a need to pass data from a component that is higher in the hierarchy to a component that is deeply nested. To pass data between such components, we pass props from a source component and keep passing the prop to the next component in the hierarchy till we reach the deeply nested component.

      The disadvantage of using prop drilling is that the components that should otherwise be not aware of the data have access to the data.

13. ### What is React Hooks?
      React Hooks are the built-in functions that permit developers for using the state and lifecycle methods within React components. These are newly added features made available in React 16.8 version. Each lifecycle of a component is having 3 phases which include mount, unmount, and update. Along with that, components have properties and states. 
      Using Hook, all features of React can be used without writing class components

14. ### Explain React Hooks?
     Hooks are functions that let us “hook into” React state and lifecycle features from a functional component.

15. ### What are the rules that must be followed while using React Hooks?
      There are 2 rules which must be followed while you code with Hooks:
      1. React Hooks must be called only at the top level. It is not allowed to call them inside the nested functions, loops, or conditions.
      2. It is allowed to call the Hooks only from the React Function Components.

16. ### What is the use of useEffect React Hooks?

17. ### What are the different ways to style a React component?



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



 6. ### what are states
      State of a component is an object that holds some information that may change over the lifetime of the component

  7. ### What is the difference between state and props?
      Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function.

  8. ### what are Redux ? 
         1. redux is the open source javascript library for state management. 
         2. its provides the centralized store where compenet get direct acces to data.
         3. its provides consistent data across the application which make complex application easier
         4. with redux dev tool debugging is easier

    8. ### What is reducers? How it works? How it is built. -Ans: It built on Pure functions. ?        
  In Redux, a reducer is a pure function that takes an action and the previous state of the application and returns the new state. The action describes what happened and it is the reducer's job to return the new state based on that action
  9. ### Accessibilty? 
      1. for tab to work for custom component, go to the custom component page and for root div add 'role = button(if the custom compoent is button)' and tabIndex = 0.
      2. on button click ur triggering the onclick function, but if yuor using div, enter key in key board will not work. for that to work, u need to add 'onKeyPress' and add same click function

  10. responsive design
      1.  we can use "reslative units" for meausrement like '%, VW, VH, rem' all this size are relative to the broswer/page   


  11. when to use redux
      when user update the state in one part of the application which should be immideialty undated in other part of UI, in most complex senario data can be changed bcz of network request and backgroud task, in such sutiation data can flow from one part of ui to another and change in unpredictable ways. we have to write lots of code to maintain everything in sync, if anything goes wrong, we difference to know how the data chnaged and where it come from  is complex.
      for such sutiation we nneed state managemnet : (redux, mobX)  

      

      *`Redux`*: 1. centralize the application state.
            2. make the data flow transparent and predictable(redux dev tool which is extension to chrome help to debbug the redux).
            3. easy debugging
            4. preseve page state
            5. undo/redo

            Disadvantage of Redux: 
            1. Complexity: Redux is based on function programming principles, which will be new to many developers
            2. verbosity: we need to write some boiler code to get thing done, which is the main complain in redux

      *`Log Rocket`*: helps you fix bugs and understand user behavior by capturing logs and session recordings from your web and native mobile apps   


  12. when to not use redux ?
      1.  when application is small- mid size app
      2.  simple ui/data flow   
      3. static data   

  13. what is functional programming
        function programming is about composing the problem into banch of small reusable functions that take input and return the result, they dont mutate/ change the data
        *`Advantages`*: 1. More concise
                        2. Easier to debug
                        3. easy to test
                        4. mr\ore scalable

14. What is Higher order function?
        the function which take function as arument or return the function or do both is called HOF

15. Currying?

16. Redux life cycle?
    when the user performce an action, lets they add item to shooping cart,we create a action object and dispatch it, store has dispatch method which take the action , it will then forward this action to reducer, reducer computes the new state and returns it to store, store will set the state internally and notify the UI component about the update, UI component will pull out the updated data and refreshs themself




    
   