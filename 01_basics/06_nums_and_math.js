const score = 400
// console.log(score.toString());

const balance = new Number(100) // explicit declaration as Number
// console.log(balance);

/* JS creates an Object wrapper for primitive datatypes like Number, String, Boolean => so we access properties of their prototypes => eg:
toString(), toFixed(), toPrecision(), toLocaleString() */

// console.log(balance.toString().length);

// console.log(balance.toFixed(2)) // precision to 2 decimal points

const otherNumber = 123.87868
// console.log(otherNumber.toPrecision(4)) 
/*  
    toPrecision(n) => 
    - returns a string 
    - return 1st n significant figures by rounding off
    - NOTE: if trying to round off before decimal point > then might return exponential part of a number
*/

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

/*
    toLocaleString() => by default in US-Standards
    - useCase => when you want to make the number easier to look at
        - eg : 1000000 as 1,000,000
    - we can convert to indian standard => ('en-IN')
*/

/* 
    - Number.MAX_VALUE && Number.MIN_VALUE => with 'e'
    - Number.MAX_SAFE_VALUE && Number.MIN_SAFE_VALUE => without 'e'
*/

/*************************  MATH ********************************/

// console.log(Math); // Math Object => accessing any prop returns a number
// console.log(Math.abs(-3)); // 3
// console.log(Math.round(5.94)); // 6
// console.log(Math.floor(3.9)); // 3 => Integer (round off to lower value)
// console.log(Math.ceil(5.2)); // 6  => Integer

// console.log(Math.pow(3,4)); // 81
// console.log(Math.sqrt(121)); // 11
// console.log(Math.PI);
// console.log(Math.PI.toFixed(2)); // 3.14

// console.log(Math.min(2,4,5,2,5,12)); // 2
// console.log(Math.max(2,4,5,2,5,12)); // 12

// most imp usecase: Math.random()

// console.log(Math.random()); // range: [0,1), NOTE: 1 not included
// console.log((Math.random()*10) + 1) // between 1 and 10 with decimals
// console.log(Math.floor(Math.random()*10) + 1) // between 1 and 10

// what if you only need random values within a range

const min = 10
const max = 30

console.log( Math.floor(Math.random() * (max - min + 1) ) + min);
/*  
    NOTE:
    Math.random()*(max-min+1) => always between [0,21) i.e [0, diff+1) 
    => floor it => value always between [0 to (max-min)] 
*/

