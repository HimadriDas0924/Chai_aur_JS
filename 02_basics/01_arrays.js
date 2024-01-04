// Array is an object
// 0 based indexing
// JS arrays are resizable

const arr = [1, 2 , 4, 5, 5, true, "himadri"]
// console.log(typeof arr); // object => memory allocation in heap

// copying an array into another => shallow copy => both objects/ arrays share the same references
// deep copy => creating a new array at a different memory location

// console.log(arr["1"]);  // o/p: 2
// console.log(arr[1]); // op : 2 => bcz indices are converted to strings only

const myArr = new Array(1,2,3,4,5); // directly add inside bracket

// myArr.push(6)
// myArr.push(7)
// myArr.pop() // remove last value

// shift and unshift => opp of push and pop => but all elem are shifted

// myArr.unshift(9) // adds elem at 0th pos
// myArr.shift() // removes elem from 0th pos

// console.log(myArr.includes(9)); // boolean
// console.log(myArr.indexOf(5)); // 0 based but if doesn't exist => -1

// const newArr = myArr.join() // converts the array into string with values separated by ','

// console.log(typeof newArr); // string
// console.log(myArr);


// IMP: slice, splice => both returns a new Array

// console.log("A ", myArr);

const myArr1 = myArr.slice(1,3) // (st,end) => copies the portion of the array from ind: st to end-1
myArr[1] = "abc"

console.log("B ", myArr1);
console.log("A ", myArr); // original array => no change

const myArr2 = myArr.splice(2,2, "himadri", "das", "boy") // (st,deleteCnt) => from ind: st, starts taking out deleteCnt no of elems

// NOTE: myArr.splice(st, deleteCnt, item1, item2, ...) => from st it'll delete deleteCnt elem AND from there it'll add all the elems mentioned(item1, item2,...)

console.log("C ", myArr2);
console.log("A ", myArr); // original array manipulated
