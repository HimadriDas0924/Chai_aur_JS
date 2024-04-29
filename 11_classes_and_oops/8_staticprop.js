/* Static functions/variables in a class: are those whose values you don't want to make accessible to (instance of the class or instances of children classes) */

class User{
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(this.username);
    }

    static createId() {
        console.log('id: 123');
    }
}

const u1 = new User('himadri')
u1.logMe()
// u1.createId() // error

class Teacher extends User{
    constructor(username, email, password) {
        super(username) // to call super class's constructor fn(this = new object created of Teacher class) and new object to inherit all the public property of the super class.

        this.email = email
        this.password = password
    }

}

const chai = new Teacher('chai', 'chai@gmail.com', 'abc')
chai.logMe()
// chai.createId() // error