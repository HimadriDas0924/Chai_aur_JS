// without classes, how can we use getters and setters ?

    // using property descriptor: to describe functions like set, get for a property/data member.


// function based syntax 
    // behind the scenes of class based syntax: this only happens.

function User(email, password) {
    this._email = email
    this._password = password

    // define a property of email
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    // define property of email
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}


const chai = new User('chai@chai.com', 'chai123')

console.log(chai.email); // email is not a function, rather it's treated as a data member(that's why chai.email() : error), chai.email: getter function of email is called and returned value is stored in chai.email.

