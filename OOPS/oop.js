// object literal
const user = {
    username: "himadri",
    loginCount : 8,
    signedIn : true,

    getUserDetails: function(){
        console.log(`Username: ${this.username}`);
        console.log(this); // current context i.e object
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this); // {}

// but in browser: this: rep WINDOW object: which has many functions like setTimeout, setInterval, onclick, etc..



/* Constructor function: is used to create and initialize multiple objects with similar properties and methods.

It is invoked with the new keyword -> to create a new instance.
i.e everytime we write new: an empty object is created && then all data members are created and values are assigned then newly created object is returned.

Constructor functions implicitely returns the newly created object.  */

// constructor function: acts as a class declaration
function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.grettings = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this; // (here) we're explicitely doing it, but this happens implicitely
}

const userOne = new User('himadri', 2, true)
const userTwo = new User('chai aur code', 11, false)

console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor) // the constructor function using which this object is created

// so using the constructor fun of an Object, we can create another object
const userThree = new userOne.constructor('javascript', 23, false)

console.log(userThree);

console.log(userOne);


