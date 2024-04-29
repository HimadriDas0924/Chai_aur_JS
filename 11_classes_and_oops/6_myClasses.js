// ES6

// classes are syntactical sugar in js i.e behind the scene: it's using constructor fn(to define constructor) and prototype concepts(to define fn in it's prototype) only.

class User {
    // as soon as you create a new obj: using the "new" keyword, constructor fn is called
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    // we don't write the 'function' keyword to define a fn
    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername(){
        return this.username.toUpperCase()
    }
}

// behind the scenes:
/*
function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password   
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}
User.prototype.changeUsername = function() {
    return this.username.toUpperCase()
}
*/

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());