const coding = ["js", "ruby", "java", "python", "cpp"]

// const value = coding.forEach((item) => {
//     console.log(item); 
// })

// console.log(value); // undefined > bcz Array.forEach() doesn't return any value

// then what to do when situations when "during traversing, if certain conditions are met: we want to return smt" ?

    // IMP:
    // in array we can use the Array_Name.filter(cb) method > which elements of Array that meets the condition in cb
        // FILTER: returns all those elems for whom condn in cb is true

const myNums = [1,2,3,4,5,6,7,8,9,10]

let whatItReturns = myNums.filter((item) => {
    return true // returns the item "condition mentioned is true"
}) 
// console.log(whatItReturns);

let newNums1 = myNums.filter((item) => {
    return item > 4 // return the item into newNums when condition is true
})

console.log(newNums1);

// we can do smt similar with ArrayName.forEach()

let newNums2 = []

myNums.forEach((num) => {
    if(num > 4) {
        newNums2.push(num)
    }
})
console.log(newNums2);