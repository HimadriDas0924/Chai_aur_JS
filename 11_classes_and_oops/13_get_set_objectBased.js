const User = {
    _email: 'himadri@abc.com',
    _password: 123,

    // get and set methods are used to over ride how to access and enter the value of a property

    /* NOTE: 
    
    get email() {} -> it means that 'email' rather than being considered as a normal fn, it will be considered as a property of the object. In get email() {}: we've defined what value should myObj.email store, bcz using the 'return' keyword we store the value of this._email.toUpperCase() to this.email. 
    
    (NOTE: this email property of the object can be seen being present in the Object in console)*/

    get email() {
        console.log('email: getter fn called');
        console.log(`email value: ${this._email}`);
        return this._email.toUpperCase()
    },

    set email(value) {
        console.log('email: setter fn called');
        console.log(`email value: ${this._email}`);
        this._email = value
    }
}

// USECASE of Object based get,set:

    // using factory function create a new object but pass the reference of User.

// const tea = Object.create()  // tea = null object

const tea = Object.create(User)

console.log(tea); 
console.log(tea.email);

tea.email = 'newEmail@abc.com'

console.log(tea.email);