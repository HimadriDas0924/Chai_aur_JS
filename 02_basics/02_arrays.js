const marvel_heros = ["ironman", "hulk", "thor"]
const dc_heros = ["superman", "batman", "flash"]

// marvel_heros.push(dc_heros) // dc_heros[] pushed as a single elem into marvel_heros

// console.log(marvel_heros);

// console.log(marvel_heros[3][2]); // to access: using a nested format

// NOTE: BUT how do we merge them into a single array
    // M1 > concat 
    // M2 > spread operator 
        // > "to remember: release a glass cup from a ht: all the parts spread around" 
    // both concat, spread => returns a new array && can combine multiple array.

const allHeros = marvel_heros.concat(dc_heros) // concat both arrays and return a new array

// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // ...marvel_heros -> all the elem of array spreaded out and are collection of single elems

// console.log(all_new_heros);

// NOTE: we can create a single array out of nested arrays

const nestedArr = [1,2,3, [4,5], 6, [7,8,[9,10]], 11] // maxDepth is 2

// console.log(nestedArr.flat(Infinity)) // [1,2,3,4,5,6,7,8,9,10,11]
// arr.flat(depth) => to not look for the depth manually > we can mention depth = infinity

// NOTE: cases when we fetch some data from other website > which might not be in form of array > so how do we convert it into array ?

console.log(Array.isArray("himadri")); // check it it's array ?
console.log(Array.from("himadri")); // ['h','i', ....]
console.log(Array.from({name: "abc"})); // IMP: empty array > bcz we haven't mentioned if keys or values to convert

// Array.of() method => concatinate values to from a new Array      

const score1 = 100, score2 = 200, score3 = 300
console.log(Array.of(score1, score2, score3));
