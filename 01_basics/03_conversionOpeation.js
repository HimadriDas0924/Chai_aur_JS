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
    Boolean(undefined) => false
    Boolean(NaN) => false
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

// console.log(StringNumber);
// console.log(typeof StringNumber);


/*********************  Operations  *******************************/

let value = 3
let negvalue = -(value)
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // power
// console.log(2/3); 
// console.log(2%3); 

let str1 = "hello"
let str2 = " himadri"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12

// console.log("1" + 2 + 2); // 122 
// console.log(1 + 2 + "2"); // 32

// /* going from left->right, if addition => we add and as soon as a string appears, we know it will be a string => so after that concatinate, if initially there is a string, we know "treat the entire thing as a string > so concatinate" */

// console.log(12 + 2 + 5 + "2" + 4 + 3 + (3 + 2) + "1"); // 1924351

// console.log(+true); // 1 i.e 0 + 1
// console.log(true+); // error => bcz it expects a right operand => for addition

// console.log(+""); // "" is 0


let num1, num2, num3
num1 = num2 = num3 = 2 + 2 // not a standard way

let gameCounter = 100
// ++gameCounter
console.log(gameCounter++); // 100 => bcz log before incrementing => but still incrementing
console.log(gameCounter); // 101

