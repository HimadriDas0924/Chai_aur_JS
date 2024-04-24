/* NOTES:

1. what does call do and where do we need call ?

ans) suppose obj1 has a fn definition and obj2 doesn't. We can do obj1.fn_call(). Suppose we're using 'this' inside the fn_call, which refers to obj1. Now we want to use fn_call for obj2 but we don't want to define it inside obj2. 

so can we use the fn defn of fn_call, present inside obj1 and somehow make this refers to obj2 and not obj1.


syntax1) obj1.fn_call.call(obj2) i.e function borrowing Or for this substitution.

syntax2) obj1.fn_call.call(obj2, fn_call parameters)



2. There is only 1 minor difference between call and apply:

- in fn.call(obj2, arg1, arg2, arg3, ...) 

- But in case of apply: we pass multiple arguments as an array list

    i.e fn.apply(obj2, [arg1, arg2, arg3, ...])

*/

// eg: 1

function setUsername(username) {
    // complex DB calculation to check if current username is present or not
    this.username = username

    console.log("called");
}

function createUser(username, email, password) {
    // setUsername(username)  // we calling the constructor fn without the 'new' keyword, so value of this is global Object i.e {}
    
    setUsername.call(this, username) // method 1
    
    this.email = email
    this.password = password
}


const chai = new createUser("chai", "chai@fb.com", "123")

// setUsername.call(chai, 'chai') // method 2

console.log(chai);

// console.log(username);  // op: chai. when we call setUsername(username) directly in createUser



// eg: 2

let userDetails = {
    name: 'abc',
    email: 'abc@gmail.com',
    greet: function() {
        console.log(this);
        console.log(`hello ${this.name}`);
    }
}

userDetails.greet()


let userDetails2 = {
    name: 'def',
    email: 'def@gmail.com'
}

// i want to use the greet fn of userDetails for userDetails2
// since, it want to do fn borrowing && substitution of this so use call()

userDetails.greet.call(userDetails2)


// eg: 3 + apply

// what if it's a global fn && this-> refers to global object and we want to be able to call this fn for every object.

let userDetails3 = {
    name: 'xyz',
    email: 'xyz@gmail.com'
}

let greet = function(message, state, country) {
    console.log(message, state, country);
    console.log(this);
}

greet.call(userDetails, 'hello', 'jharkhand', 'india')
greet.call(userDetails2, 'hello', 'delhi', 'india')

greet.apply(userDetails3, ['apply:', 'passing arguments as', 'array list'])
