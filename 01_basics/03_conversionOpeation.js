// NOTES:

/*  typeof 33 => number => lowercase 
    But in type conversion we use capital letter 
*/

/*  
    if score = "33abc" 
    typeof score => number => but it's not a number 
    score => NaN => and (typeof NaN) => number
*/

/*  typeof null => object
    Number(null) => so it converts it into a number i.e => 0 
*/

/*  typeof undefined => undefined
    Number(undefined) => NaN 
*/

/*
    typeof true => boolean
    Number(true) => 1
    Number(false) => 0
*/

/* 
    Boolean(+ve no / -ve no) => true
    Boolean(0) => false
    Boolean("") => false
    Boolean("himadri das") => true
*/


let score = false
let number = 12345


// console.log(typeof score)
// console.log(typeof (score))

let valueInNumber = Number(score) 
// console.log(typeof valueInNumber);

// console.log(valueInNumber);


let isLoggedIn = "himadri das"

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn);

let someNumber = 33
let StringNumber = String(someNumber)

console.log(StringNumber);
console.log(typeof StringNumber);