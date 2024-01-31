// REDUCE: 
    // MDN def: it runs 'reducer' cb fn over all the elem of the array in asc order and accumulates them into a single value. The returned value of the cb fn is passed to the accumulator paramter for the nxt itern.
    // value returned by the fn in final itern becomes return val of reduce()
    

const myNums = [1,2,3]

let myTotal = myNums.reduce(function (acc,currval) { 
    console.log(`acc: ${acc}, currval: ${currval}`);
    return acc + currval // curr: current value of the array, returned val is stored in acc which at 0th itern is 0(2nd arg of reduce fn)

}, 0) // 0 is val of acc for 0th itern

console.log(myTotal);

// arrow fn
myTotal = myNums.reduce((acc, curr) => (acc + curr), 0)

console.log(myTotal);


// USE case of REDUCE: "adding" prices of items in a shopping cart

const userShoppingCart = [
    {
        item: 'js course',
        price: 2999
    },
    {
        item: 'mobile dev course',
        price: 5999
    },
    {
        item: 'py course',
        price: 999
    },
    {
        item: 'cpp course',
        price: 3999
    }
]

const totalPrice = userShoppingCart.reduce((acc, item) => (item.price + acc), 0)
console.log(totalPrice);