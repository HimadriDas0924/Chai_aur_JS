// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// comparison => 1st conversion to number then checking

// console.log("2" > 1);
// console.log("02" > 1);

/* 
    NOTE: comparison operator(>, <, <=, >=) with "null" converts the number to 0 then make the comparison

    But, for equality check(==) -> it doesn't convert null to a number, so null is still an "object" 
*/

// console.log(null > 0); // 0 > 0 false
// console.log(null == 0); // false
// console.log(null >= 0); // 0 >= 0 true


// undefined : all cases -> returns false

// console.log(undefined == 0);
// console.log(undefined < 0);
// console.log(undefined > 0);


/* NOTE:
    strict check: === -> checks according to data type and value,
    whereas == -> converts to same datatype (exception: null, undefined) before checking value
*/

console.log("2" === 2) // false, bcz type checking && no conversion

