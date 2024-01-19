// this -> referes to current context

const user = {
    username: "himadri",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcom to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// console.log(this); // op: {}, in node env: global object is an empty object
// NOTE: but in browser: this -> Window Object

function chai1() {
    const user = "himadri"
    console.log(this); // we get a bunch of functions
    console.log(this.username); // undefined
    // inside a function: "this" doesn't behave same as that of an object
}

// chai1()

// arrow function
const chai2 = () => {
    const user = "himadri"
    console.log(this); // {}
    console.log(this.username); // undefined
}

// chai2()

// explicit return
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(2,3)) // 5

// implicit return
const addThree = (num1,num2,num3) => (num1 + num2 + num3);

console.log(addThree(1,2,3)); // 6
