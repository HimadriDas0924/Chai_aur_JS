var a = 20
// console.log(b); // undefined
var b = 40 // var variable are hoisted i.e at top var b = undefined

// let and const has block scope
// var has global scope

if(true) {
    // console.log(b); // from reference to above 'b' -> 40
    var b = 400; // hoisted globally
    let l = 15;
    const c = 30;
}

// console.log(l, c); // cannot access bcz don't exist: undefined
// console.log(b); // 400

function myFun() {
    var a = 300
    // console.log(a); // 300
}
myFun()
// console.log(a); // 20 -> var inside functions are not hoisted out of function scope

// scope level and mini hoisting:

function one() {
    const username = "himadri"

    function two() {
        const website = "youtube"
        // console.log(username);
    }

    // console.log(website); // error: bcz website doesn't exist at this point and bcz of err: two() is not called
    
    two()
}

one()



// function declaration and function expression

console.log(addOne(5)); // during memory creation phase: we mark the function corresponding to addOne Or function declaration are hoisted

function addOne(num) {
    return num+1
}

console.log(addTwo(5)); // error: bcz we're assigning function last, so yet in addTwo we have "undefined"

// Or function declaration are not hoisted: bcz function declaration + assignment is involved

const addTwo = function(num) {
    return num+2
}