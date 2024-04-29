class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

// inheritance
class Teacher extends User {

    constructor(username, email, password){
        /* 1. super: used to invoke a superclass's constructor.
        
        2. It is either used as a function call or a property lookup.

        3. super() must be called before the 'this' keyword of derived class is used and before the constructor returns. 

        4. super() in a derived class: calls the parent class's constructor and binds the parent class's public field on the derived class object(i.e super had access to derived class's 'this'). 
            After that derived class constructor can further access and modify 'this'.
        
        5. in a derived class: super must be called before you use 'this', else you get "ReferenceError".    */

        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher('chai', 'chai@gmail.com', '123')

chai.addCourse()

const masalachai = new User('masalachai')
// masalachai.addCourse() // error: bcz parent doesn't inherit child 

console.log(chai === masalachai); // false: bcz diff object

console.log(chai === Teacher); // false: bcz chai is an instance of Teacher and not equal to Teacher

console.log(chai instanceof Teacher); // true

// but Teacher has also inherited from User
console.log(chai instanceof User); // true