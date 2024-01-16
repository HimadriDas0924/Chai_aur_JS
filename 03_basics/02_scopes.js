var a = 20
console.log(b); // undefined
var b = 40 // var variable are hoisted i.e at top var b = undefined

// let and const has block scope
// var has global scope

if(true) {
    console.log(b); // from reference to above 'b' -> 40
    var b = 400; // hoisted globally
    let l = 15;
    const c = 30;
}

// console.log(l, c); // cannot access bcz don't exist: undefined
console.log(b); // 400

function myFun() {
    var a = 300
    console.log(a); // 300
}
myFun()
console.log(a); // 20 -> var inside functions are not hoisted out of function scope
