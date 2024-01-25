// for of
    // iterate each value of the Object



// const arr = [1,2,3,4,5]

// for (const val of arr) {
//     console.log(val);    
// }

// const str = "Hello World"

// for(const char of str) {
//     console.log(char);
// }

/* ---------------------------------------------------------------------- */

// Maps: an object
    // contain {key: value} pair
    // contain unique keys
        // values gets overwritten for same key
    // order in which pairs are entered is maintained

const map = new Map()

map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')
map.set('IN', 'India') // still 3 entries in map will exist
map.set('IN', 'Bharat') // will overwrite val for key 'IN'

// console.log(map);

// loop on map

// for(const val of map) {
    // console.log(val); 
        // val rep an array of [key, value]
        // so we can destructure the array: storing key and value in 2 diff variable and print individually
// }

for(const [k,v] of map) {
    // console.log(k, ':-', v);
}

// how to iterate Objects then ?
    // can it be done using "for of"

const myObj = {
    'game1' : 'NFS',
    'game2' : 'COD'
}

// for(const [k,v] of myObj) {
//     console.log(k, ':-', v); // ERROR: that myObj is not iteratable
// }

for(const k of Object.keys(myObj)) {
    console.log(k); // this is possible
        // but how to iterate an object directly ??
}

// SO, we can directly iterate an ARRAY & MAP using FOR OF 

// for iterating Objects, we can use FOR IN 