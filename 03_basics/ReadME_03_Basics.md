- **NOTE**: concept of scope is different in *browser* and in *node* environment

- if we don't pass an argument value to a fn parameter -> by default it's undefined

- Concept of REST and SPREAD operator : only depend on their use cases
    - Rest op: bundle different elems into a single array
    - eg: `function addNums(num1, num2, ...num3) {}`, `addNums(100,200,300,400,500)` 
        - num1 = 100, num2 = 200, num3 = [300,400,500]

- **Scope and Hoisting**
    - const, let -> block scope
    - var -> global scope i.e hoisted globally *in it's Execution context only*
        - **NOTE:** *var declared inside a function call, is not hoisted out to the parent's Execution context*

    - Child function can access parent fns variable but vv is not possible.
        - It all depends on scope.
        - *Once a function's EC is deleted > it's variables cannot be accessed.*    

    - During Code execution phase: if err encountered: rest of the code is not executed: bcz in JS: single threaded language.

    - *Function declaration -> Hoisted*
    - *Function Expressions -> NOT hoisted* -> bcz it involves assignment of a fn to a variable, so assignment happens at that line only, till then variable = undefined

- **This and Arrow Function**
    - In objects, this refers to current context/object
    - *In browser, this -> window object*
    - *In node env, this -> {}*

    - Inside Normal function: *this -> {object with a bunch of properties and fn}*
        - `function fn() {const user = "himadri"} `
            - inside fn: this.user = undefined 
    - Arrow function: 
        - `const addTwo = (num1, num2) => {return num1 + num2}`
        - `const addTwo = (num1,num2) => (num1 + num2)`
        - *in arrow fn: this -> {}*
        - sim, this.user = undefined