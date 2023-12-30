/*
JS is dynamically typed language: 

    let a = 10
    a = "himadri"

    - bcz type of a variable can change dynamically during runtime
    - In static language, we need to specify type of variable during compile time
*/

/*
    Primitive:
    - call by value -> separate copy is created
    - String, Number, Boolean, null, undefined, Symbol (unique, immutable values), BigInt (bigger number values)
*/

let num1 = 123
let num2 = 123.43243 // number

let temp = null;
let userEmail; // undefined

let id = Symbol('123') 
let anotherId = Symbol('123')

// even though same description: but values will be different
console.log(id === anotherId); 

const bigNumber = 28748932748327489n

/*
    Reference / Non-Primitive:
    - can we "call by reference"
    - Array, Object, Function
        - all their type is 'object'
*/

const arr = ['apple', 'banana', 'mango']

let myObj = {
    name: 'himadri',
    age: '23'
}

const fun = function() {
    console.log("hello world");
}

console.log(typeof fun); // function: but actually it's function object

