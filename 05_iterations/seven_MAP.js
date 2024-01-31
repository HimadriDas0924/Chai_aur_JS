const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// add 10 to each numbers 

// let newNums = myNumbers.map((num) => num+10);

// // NOTE: ArrayName.map(cb) => return a new array with each elem = result of the cb fn on the original array


// // application of map done using array.forEach(cb)

// let newNums2 = []
// myNumbers.forEach((item) => {
//     newNums2.push(item + 10)
// })


// Chaining: multiple HOF one after another
    // NOTE: array.map().map() => 2nd .map() works on the [] formed from result of 1st map

const newNums = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num > 40)

console.log(newNums);
// console.log(newNums2);