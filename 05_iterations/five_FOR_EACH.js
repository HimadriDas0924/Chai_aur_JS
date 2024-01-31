// for each: is a higher order function
    // it is present in the prototype of Array

    // takes a call back fn
        // since it automatically iterate over all the values of the array
            // for every val: the call back fun will be called
                // mention name in cb fn with which you want to refer to the ith item
                

const coding = ["js", "ruby", "python", "cpp", "java"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// notice that we just mentioned the cb fn: and it automatically called it by passing the elem, for every elem of the arr

// coding.forEach((item) => {
//     console.log(item);
// })

function printMe(item) {
    console.log(item);
}

// coding.forEach(printMe) // just passed the reference of the fn
    // and forEach method: called printMe by passing each elem of coding[]

// NOTE: other parameters are also passed to the cb fn along with the element
    // cb(item, index, arr) 

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})


const myCoding = [
    {
        language: 'java',
        languageFileName: 'java'
    },
    {
        language: 'python',
        languageFileName: 'py'
    },
    {
        language: 'c++',
        languageFileName: 'c++'
    }
]

// now access each of object of Array of Objects

myCoding.forEach((item) => {
    // console.log(item.language, item.languageFileName);

    // item: rep an object: can use FOR IN to iterate an object
    for (const key in item) {
        console.log(`key : ${key}, value : ${item[key]}`);
    }
})