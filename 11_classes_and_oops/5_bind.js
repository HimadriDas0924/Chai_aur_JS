// bind: syntax similar to call

/* 
- whenever we call the bind method of a function instance, it returns a copy of a new function containing all the arguments passed to bind method which includes value of this, arguments of function instance(if any).

- thus whenever required we can call this new function, without passing this and initial arguments of the function instance.

- i.e binding the value of 'this' to a function call to generate a new function and using it.
*/

let userDetails = {
    name: 'abc',
    email: 'abc@gmail.com'
}

let userDetails2 = {
    name: 'def',
    email: 'def@gmail.com'
}

const printDetails = function(state, country) {
    console.log(this);
    console.log(this.name, state, country);
}

// call
printDetails.call(userDetails, 'delhi', 'india')

// apply
printDetails.apply(userDetails2, ['haryana', 'india'])

// bind
let myfn = printDetails.bind(userDetails2, 'j&k', 'india');

console.log(myfn);

myfn()