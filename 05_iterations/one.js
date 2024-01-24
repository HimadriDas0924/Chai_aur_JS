// for loop:
    // s1) declare + initialize
    // s2) check condition 
        // true: execute code in scope
        // false: break out of loop
    // inc/dec/smt -> again go to s2


let myArr = [1,2,3,4,5,6,"himadri", "das", 7, 8]
console.log(myArr.length);

for(let i = 0; i < myArr.length; i++) {
    console.log(`${i}th value of myArr is ${myArr[i]}`);
}

// break -> once encountered -> instantly break out of the loop
// continue -> once encountered -> without execution of rem code for current itern -> code for next itern is executed 

