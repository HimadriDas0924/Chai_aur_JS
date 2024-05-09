// NOTE: Use case of getters and setters: when we created an object out of a class and we want to give specific access to some data members.

class User {
    constructor(email, password) {
        // below calls the setter fn for both email and password

            // bcz email and password are data members and we've defined their getter and setter fn.

        this._email = email 
        this._password = password
        // this.counter = 0
    }

    /* 
    NOTE: 

    - whatever property we create inside a class, by default getters and setters are created as a method by their name.

    - get propertyName() for getters, set propertyName() for setters.

    - good practice: if you want to define any one, rather define both getters and setters (for classes).

    - obj.data_member = value // calls the setter fun
    - obj.data_member // calls the getter fn

    - in constructor() we're calling the setter fn for all the data members, storing the value in a new varaible: this._password. 

        - But why not this.password ?? (bcz it's obj.password i.e obj.dataMember which would again call the setter function, so it'll be infinite recursion and call stack space would exceed).

    */ 

    // getter
    get password() {
        console.log('password getter called');
        // this.counter++
        // console.log(`counter value = ${this.counter}`);
        return this._password.toUpperCase();
    }
    // setter
    set password(value) {
        console.log('password setter called');
        this._password = value; // creating a new variable inside the object.
    }

    get email() {
        console.log('email getter called');
        // this.counter++
        // console.log(`counter value = ${this.counter}`);
        return this._email.toUpperCase();
    }
    set email(value) {
        console.log('email setter called');
        this._email = value;
    }
}

const himadri = new User("himadri@gmail.com", "abc")
console.log(himadri);
console.log(himadri.password); // calls getter fn (which is always called whenever we're trying to get a data member)
console.log(himadri.email); // calls getter fn and stores the value returned in himadri.email => that's how we're able to access it
