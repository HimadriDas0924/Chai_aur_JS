function multiplyBy5(num) {
    return num*5
}

multiplyBy5.power = 2 // function as an object 

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

// a function can act as an Object, so we can inject our own functions into the object as properties.

function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function() {
    this.score++;
}

// we don't always have to write .prototype when accessing this function: bcz it will automatically search for the fn along the prototype chain.

createUser.prototype.printMe = function() {
    console.log(`score is ${this.score}`);
}

// create objects of this constructor function
const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()


/*

What does the NEW keyword do?

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
