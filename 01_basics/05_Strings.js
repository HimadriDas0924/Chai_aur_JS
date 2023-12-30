const name = "himadri"
const age = 23

// console.log(name + age + " value"); // old way 

// better readable way: use `` i.e String Interpolation
// console.log(`Hello my name is ${name} and my age is ${age}`);

let gameName = new String('hitesh-hc-com') 
/* creates a String Object => i.e {keys are indices and values are characters} and properties like 'length' and other properties inside prototype are available */

// console.log(typeof gameName); // Object
// console.log(typeof name); // string

// console.log(gameName[0]); // h
// console.log(gameName.__proto__); // returns an Object 

/* we can directly access all methods of prototype using ObjName.propName */

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// /* but original value is not changed bcz String is primitive data type */
// console.log(gameName);

// console.log(gameName.charAt(2)); // char at pos 2
// console.log(gameName.indexOf('l')); // index of character l: 1st occurence of character

const newString = gameName.substring(0, 7) // start : end(excluding) 

/*  SUBSTRING:
    - start < 0 => ignores the -ve values and start from 0 
    - if end < 0 && start >= 0 => no common region and nothing extracted
*/

// console.log(newString);

const anotherString = gameName.slice(3, -5) // start : end(excluding)
/*
    SLICE:
    - .slice(start, end)
        - start and end : both are optional
    - if start = -ve => start = arr.length + start
    - if start > arr.length => nothing extracted
        - whenever start > end => nothing extracted
    - if start < -arr.length => start = 0

    - if end > arr.length => end = arr.length
    - if end < 0 => end = end + arr.length
*/

// console.log(anotherString);

/* 
    TRIM: 
    - removes extra whitespaces from front and end
    - usercase:
        - when user enters a lot of whitespaces in fields => (which doesn't have to be saved in db like that)
*/

const newStringOne = "   himadri   "
// console.log(newStringOne)
// console.log(newStringOne.trim()) 

/* 
    REPLACE:
    - string.replace('what to search', 'what to replace it with')
*/

const url = "https://hitesh.com/hitesh%20chaudhary"
// console.log(url.replace('%20', '-')); // '%20' is replaced with '-'

/*
    INCLUDES: 
    - string.includes('substring')
    - if a keyword is present in the string or not
*/

// console.log(url.includes('sundar')); // false

/*
    SPLIT: 
    - string.split(separator, limit(optional))
    - based on separator, splits the string into substrings and put them in an array
*/

console.log(gameName.split('-'));