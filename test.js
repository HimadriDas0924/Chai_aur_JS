// normal fn
const fun = function(){
    console.log('fun called')
}


// constructor fn
const User = function(username, marks) {
    this.username = username
    this.marks = marks
}

Object.prototype.printName = function() {
    console.log(`name is ${this.username}`);
}

// create obj
const user1 = new User("himadri", 45)
const user2 = new User("priya", 50)

console.log(Object.getPrototypeOf(User)); // {}
console.log(Object.getPrototypeOf(fun)); // {}

console.log(Object.getPrototypeOf(user1));

console.log(user1);


// console.log(user2.prototype === user1.prototype);

