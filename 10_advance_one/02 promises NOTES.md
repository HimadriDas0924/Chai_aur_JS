1. Promise: ia an `object` representing the eventual completion (or failure) of an asynchronous operation and it's resulting value.
    - States of Promise: pending, resolved, completed

2. Once Promise is resolved i.e asynchronous task is finished: then we can send some data to be handled in promise.then()

``` javascript


const myPromise = new Promise(function(resolve, reject) {
    // async task
    setTimeout(function(){
        let error = true;
        if(!error) {
            // sending nested object as data
                // data could be Object, String, Array, etc..
            resolve(
            {usename: {
                firstname: "himadri",
                lastname: "das"
            }, 
            password: 123})
        }
        else {
            reject("ERROR something went wrong") // throwing an error
        }
    }, 1000)
})

// to perform multiple operation on the resolve promise data gracefully: we can use promise chaining

myPromise
.then(function(batman) {
    return batman.usename; // this data is passed to the next chained promise
})
.then((superman) => {
    console.log(superman.firstname)
})
.catch(function(error) {
    console.log(error)
})
.finally(function() {
    // always executed either promise resolved or rejected i.e whether .then() or .catch() executed.
})

// similary we can handle above promise using async await

    // try and catch block: bcz if promise is rejected i.e reject(error is passed): then we need to handle it so that program flow doesn't stop.

async handleMyPromise() {
    try {
        const response = await myPromise; // promise object is resolved or rejected. and response contain resolved data
    }
    catch(error) {

    }
}


// resolved promise might not return an Object.
    // so we convert it to JSON

async function getAllUsers() {
    try {
        const response = await fetch('url')

        // response might not be in JSON format

        const data = await response.json() // NOTE: response.json() returns a promise
    }
    catch(err) {

    }
}


```

3. converting String data into an object might take time.
    - so we might need to use `await` i.e block flow till this operation is complete. 


4. Using promises to gracefully handle "ASYNC TASKS" bcz
    - error handling
    - can use "async await" 
    - can use .then() or .catch() to handle resolved or rejected promise.
    - maintain a very readable code while performing many operation on the data returned by the resolved promise: promise chaining.

5. we can handle promises either using .then() .catch() or async await: there is no issue. Just difference is use case.

6. async await: is used to handle asynchronous operation OR we can use it for operations that take time.

7. rejecting a promise with a message === throwing an error && != sending some data.