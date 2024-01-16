// don't mention type of parameters
function addTwoNums(num1, num2) { // parameters
    const result = num1 + num2
    // console.log(result);

    return result;
    console.log("after result statement"); // since returned so won't reach this line
}

addTwoNums(2,4) // arguments -> op: 6, but no error even though we're not receiving returned value
// addTwoNums() // NaN : if we don't pass args they are by default = undefined

const result = addTwoNums(2,3)
// console.log(result);

function userLoggedIn(username) {
    if(!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in!`
}

// console.log(userLoggedIn("himadri das")); // returned value can directly be printed 

// if don't pass args: username = undefined

// or we can keep a value in parameter by default

/* function userLoggedIn(username = "computer") {
    return `${username} logged in`
} */


// REST operator && SPREAD operator -> differ only on basis of their use case, to {break a bundle i.e spread} OR {to combine in a bundle i.e rest}

// application of REST OPERATOR: ... => if you send a bunch of things, it'll bundle them up into a single array

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartPrice(100, 200, 300, 400)); // val1 = 100, val2 = 200, rest is in num1 ie [300, 400]

// passing Objects and Arrays as parameters

function handleObjects(myObj) {
    console.log(`User's name is ${myObj.username} and price is ${myObj.price}`);
}
handleObjects({
    username: "himadri",
    price: 344
})