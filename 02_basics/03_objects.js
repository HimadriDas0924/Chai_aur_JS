// When declaring objects using constructor -> singleton is created
    // eg: Object.create()
// when declaring objects using literals -> singletong created
    // eg: obj = {}

const mySym = Symbol("key1")

const jsUser = {
    name: "himadri",
    "full_name": "himadri das",
    [mySym]: "my key 1", // {[mySym]: key_value} -> is the correct syntax to make a symbol act as key, else if we do {mySym: key_value} -> by default we know both {key,value} are converted to string, so a string is acting as a key in this case not a symbol.
    age: 23,
    location: "dhanbad",
    email: "himadri@google.com",
    isLoggedIn: false,
    loggedInDays: ["monday", "saturday"]
}

/* NOTE: if you're using [] to access a property use "key_name", bcz by default key and values are stored as string.
But if you're using Object.key_name => don't use "" 

FORMAT: Object["key_name"], Object.key_name
*/

// IMP: with Object.key => always work, but don't use "key", but Object[key] => need to mention the actual key

// console.log(jsUser.email); // himadridas@google.com
// console.log(jsUser[email]); // error -> bcz there is no key - email, rather there is a key - "email"
// console.log(jsUser["email"]); // op: himadridas@google.com
// console.log(jsUser."full_name") // error
// console.log(jsUser.full_name); // himadri das

// console.log(jsUser["mySym"]); // invalid: bcz there is not key "mySym", rather there is a key mySym acting as a symbol => so directly access it

// console.log(jsUser[mySym]);


jsUser.email = "himadri@yahoo.com"

// NOTE: you can freeze an Object, so that no changes can be made in it, trying to change won't give error but changes won't be reflected.

// Object.freeze(jsUser) // object freezed
jsUser.email = "himadri@outlook.com"

// console.log(jsUser);

jsUser.greeting = function() {
    console.log("hello Js user");
}
jsUser.greeting2 = function() {
    console.log(`hello Js user, ${this.full_name}`);
}
console.log(jsUser.greeting())
console.log(jsUser.greeting2())