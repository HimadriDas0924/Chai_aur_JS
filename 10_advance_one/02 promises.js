// Promise is an object: representing the eventual completion(or failure) of an asynchronous operation.

// 1) creating a Promise: new Promise(cb)

const promiseOne = new Promise(function(resolve, reject) { // NOTE:(here) promiseOne is an Object.

    // do async task

        // eg: DB call, cryptography, network calls

    setTimeout(function(){

        console.log("Async task complete")

        resolve()  // NOTE: when this resolve() fn is called then only the cb present in promise.then(cb) is pushed into the microtask queue.

    }, 1000)
})

// consuming a promise

promiseOne.then(function() {
    console.log("Promise Consumed");
})



// 2) creating and consumeing a promise 

new Promise(function(resolve, reject) {

    setTimeout(function(){
        console.log("Async Task 2 complete");

        resolve()
    }, 1000)

}).then(function(){
    console.log("Promise 2 consumed");
})




// 3) resolving + passing data

const promiseThree = new Promise(function(resolve, reject) {
    // async task

    setTimeout(function(){
        // after async task is completed: promise is resolved i.e resolve() is called: wherein you can pass some data i.e Object/String/Array/etc..

        resolve({username: "himadri", email: "himadri@example.com"})

    } ,1000)
})

// cb inside promise.then() is called 
    // if we're resolving the promise and passing some data, then accept the data in a variable.

promiseThree.then(function(user) {
    console.log(user);
})



// 4) promise chaining + reject promise + .finally i.e (which is always executed whether promise is resolved or rejected)

const promiseFour = new Promise(function(resolve, reject) {
    // async operation

    setTimeout(function() {

        let error = true
        if(!error) {
            resolve({username: "himadri", password: 123}) // use .then(cb) to handle it
        }
        else {
            reject("ERROR Something happened") // use .catch(cb) to handle it 
        }

    } , 1000)
})

// case: when a promise resolves and a heavily nested object is sent as data. Then to extract a specific data: multiple checks and migrating the nesting should happen.

    // then promise chaining is very useful

promiseFour
.then((user) => {
    console.log(user);
    return user.username; // is passed to the next .then(cb)
})
.then((username) => {
    console.log(`username: ${username}`);
})
.catch((error) => {
    console.log(error);
})
.finally(() => console.log("Promise is either resolved or rejected"))



// 5) Promises can also be HANDLED using "async await"

    // => (where to use async await: USECASE: we don't move further till the asynchronous task is finished)


const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if(!error) {
            resolve({username: "Javascript", password: 123})
        }
        else {
            reject("Error JS went wrong")
        }
    }, 1000)
})

async function consumePromiseFive() {

    try {        
        const response = await promiseFive; // promiseFive is an promise(object) i.e either resolved or rejected

        console.log(response);

    } catch (error) {

        console.log(error);
    }

}

consumePromiseFive();


// 6) using fetch: which returns a promise


// M1) 

// async function getAllUserData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         // response might not be in JSON format

//         // console.log(response);
        
//         const data = await response.json() // response.json() returns a promise
//         console.log(data);

//     } 
//     catch (error) {
//         console.log(error);
//     }
// }

// getAllUserData()



// M2

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    // response might not be JSON: so convert it to JSON: response.json() takes time so it returns a promise: to handle it do promise.chaining

    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch()
