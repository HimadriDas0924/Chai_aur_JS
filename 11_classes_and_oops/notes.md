## is Javscript a class based language ?

ans) No Js is not a class based language. Rather it is a prototype based langauge. classes in JS were introduced in ES6 for developers who were coming from class based languages but behind the scene it works on prototype based inheritance mechanisms.

## OOP

1. Object
- collection of properties and methods.

2. parts of OOPs

- object literals
- contructor functions
- prototype
- Classes
- Instance(new, this)

/***************************************************************/

### 1. value of this:

- whether 'this' refers to the global object/ newly created object depends on how the function is invoked.
- if invoked with 'new' keyword: this refers to newly created object.
- else: 'this': refers to global object.

``` javascript 


/* Constructor function: is used to create and initialize multiple objects with similar properties and methods.

It is invoked with the new keyword -> to create a new instance.
i.e everytime we write new: an empty object is created && then all data members are created and values are assigned then newly created object is returned.

Constructor functions implicitely returns the newly created object.  */

// constructor function
function User(username, loginCnt, isLoggedIn) {
    this.username = username
    this.loginCnt = loginCnt
    this.isLoggedIn = isLoggedIn

    // return this (implicitely)
}

const userOne = User('himadri', 11, true) // we didn't use the new keyword: so execution context of function is created && this-> refers to the global object && we created and initalized data members to the global object.

const userTwo = User('chai aur code', 12, false) // data member of the global object got overwritten

console.log(userOne) // {all fns and methods of globalThis, username: chai aur code, loginCnt = 12, isLoggedIn: false}

console.log(username) // chai aur code: i.e we can directly access global data members

```

### 2. SetTimeout in Node env ?

- NodeJs provides it's own implementation of various objects and functions like setTimeout, setInterval, console, require, etc..
so you don't need the window object for these things.

### 3. `globalThis` v/s `this`

- this: changes based on the current context.

- globalThis: provides a consistent way to access the global object across various env like browser and node. This provides access to global object from anywhere in the nodejs code.

### 4. myObj.constructor

- myObj.constructor returns the constructor function using which the myObj is created.

``` javascript 
    const obj2 = new obj1.constructor(); // we can use constructor function of other obj to create a new obj of the same type.
```

### 5. Prototypes:

- A prototype is an Object that an Object inherits from.

- When you create a new object, it inherits from the Object prototype. The Object prototype is the base object for all objects in JavaScript.

- so in objects,functions,arrays,strings,etc.. -> we properties/methods are not directly present in them, then they are searched up in the hierarchy.

i.e functions,array,strings [their prototype: Object] && [prototype of Object: null]

- `.prototype` is property of a class: so if we want all the Objects created to have some property then do: `Object.prototype.common_property = smt;`

- `.__proto__ ` is property of a new object created, it is used when a specific object wants to inherit properties from another object: `obj1.__proto__ = obj2`