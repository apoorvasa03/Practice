### JS

1)What are design patterns ?

<details><summary><b>Answer</b></summary>
<p>
    Design patterns are the reusable solutions that solve common problems of software development. These problems include repetitive code, redundant functions and logic etc. These help to save considerable effort and time required for the developers while developing software. Design patterns are commonly used in object-oriented software products by incorporating best practices and promoting reusability for developing robust code.
</p>
</details>

---

2) Advantages of design patterns?

<details><summary><b>Answer</b></summary>
<p>
    * They are reusable and can be used in multiple projects.
    * They provide template solutions for defining system architecture.
    * They provide transparency to software design.
    * They are well-tested and proven means of developing robust solutions effortlessly.
</p>
</details>

---



3) types of design patterns:?

<details><summary><b>Answer</b></summary>
<p>
    * Creational Patterns: These patterns provide freedom of choice between creating objects by hiding the logic. Some of the examples of creational patterns are - Factory design pattern, Builder design, Prototype design, Singleton design, Abstract Factory design
    * Structural Patterns: These patterns help in defining how the structures of classes and objects should be like for defining the composition between classes, interfaces and objects. Some of the examples of structural patterns are - Adaptor design, Facade design, Decorator design, proxy design etc.
    * Behavioural Patterns: These patterns help to define how the objects should communicate and interact with one another. Some of the examples of behavioural patterns are - Command pattern, Iterator pattern, Observer pattern, Strategy pattern, etc.
</p>
</details>

---
4) How are design principles different from design patterns??

<details><summary><b>Answer</b></summary>
<p>
    * Design principles are those principles that are followed while designing software systems for any platform by making use of any programming language. SOLID principles are the design principles that we follow as guidelines to develop robust, extensible and scalable software systems. These apply to all aspects of programming.
    * Design Patterns are the reusable template solutions for commonly occurring problems that can be customized as per the problem requirements. These are well-implemented solutions that are tested properly and are safe to use. Factory Design Pattern, Singleton pattern, Strategy patterns are a few of the examples of design patterns.
</p>
</details>

---
5) Whats is Factory Pattern?

<details><summary><b>Answer</b></summary>
<p>
    Creational pattern: provide object creation mechanism which promote flexibility and reusability of our code, especially when we are creating many different type of many different object
    Factory is the object which creates different type of objects,
    why do we need them ? cant we just use new keyword and create objects?
        while factory allow u to handle all of your object creation in centralized location. which makes clean and concise code

    ```javascript
    function Developer(name)
    {
        this.name = name
        this.type = "Developer"
    }

    function Tester(name)
    {
        this.name = name
        this.type = "Tester"
    }

    function EmployeeFactory(){
        this.create = (name, type) => {
            switch(type)
            {
            case 1:
                return new Developer(name)
            case 2:
                return new Tester(name)
            }
        }
    }

    function say(){
        console.log("Hi, I am " + this.name + " and I am a " + this.type)
    }

    const employeeFactory = new EmployeeFactory()
    const employees = []

    employees.push(employeeFactory.create("Patrick", 1))
    employees.push(employeeFactory.create("John", 2))
    employees.push(employeeFactory.create("Jamie", 1))
    employees.push(employeeFactory.create("Taylor", 1))
    employees.push(employeeFactory.create("Tim", 2))

    employees.forEach( emp => {
    say.call(emp)
    })
    ```

</p>
</details>

---
6) what is Singleton Pattern?

<details><summary><b>Answer</b></summary>
<p>
    Singleton Pattern a creation patteren it come in handy when we want to limit the number of instance of the object atmost one

     ```javascript
     const Singleton = (function(){
        let pManager

        function ProcessManager() { /*...*/ }

        function createProcessManager(){
            pManager = new ProcessManager()
            return pManager
        }   

        return {
            getProcessManager: () => {
                if(!pManager)
                pManager = createProcessManager()
                return pManager
            }
        }
    })()

    const singleton = Singleton.getProcessManager()
    const singleton2 = Singleton.getProcessManager()

    console.log(singleton === singleton2) // true
     ```
</p>
</details>

---
7) what is Builder Pattern??

<details><summary><b>Answer</b></summary>
<p>
The builder pattern is one of the best creational design patterns for creating complex objects without complicating your constructors or code. The best part about the builder pattern is that the new changes to JavaScript allow us to create extremely concise builders compared to the traditional way of creating builders.
 
 ```javascript
        class User {
            constructor(name) {
                this.name = name
            }
        }

        class UserBuilder {
            constructor(name) {
                this.user = new User(name)
            }

            setAge(age) {
                this.user.age = age
                return this
            }

            setPhone(phone) {
                this.user.phone = phone
                return this
            }

            setAddress(address) {
                this.user.address = address
                return this
            }

            build() {
                return this.user
            }
        }

        const builder = new UserBuilder('Bob')
        const user = builder.setAddress(new Address('12345', 'Main St.')).build()
  ```
</p>
</details>

---
) ?

<details><summary><b>Answer</b></summary>
<p>

</p>
</details>

---