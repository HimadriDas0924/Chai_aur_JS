// truthy: things which are by default considered as true
// false: auto considered false

// NOTE:
    // FALSY: false, 0, -0, BigInt -> 0n, "", null, undefined, NaN

    // rest all truthy values
        // eg: "0", "false", " " -> bcz not empty string
        // [], {}, function() {} -> truthy values

const userEmail = []

if(userEmail) {
    console.log("user have email");
}
else {
    console.log("don't have user email");
}

// IMP: how to check the array/object we've received -> contains anything or not
    // Array -> Array.length
    // Object -> Object.keys() returns array of all keys -

const emptyArr = []

if(emptyArr.length === 0) {
    console.log("empty array");
}


const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("empty object");
}

// 0 == false, 0 == '', fales == ''


// Nullish Coalescing operator(??): 
    // regarding null and undefined
    // if values = null/undefined is returned from a function to a variable then apart from that what else do you want in your variable

let val1;
val1 = 10 ?? 5 // 10 assigned 
console.log(val1);

val1 = undefined ?? 15 // 15
console.log(val1);

val1 = null ?? 13 ?? 15 // 13 i.e 1st value after undefined/null
console.log(val1);

