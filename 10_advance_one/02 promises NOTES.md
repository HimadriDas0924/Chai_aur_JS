0. **IMP** when is a promise is created, the cb associated with it is immediately executed. eg:
``` javascript

setTimeout(function() {
    console.log('0')
}, 1000)

const promise = new Promise(function(resolve, reject) {
    console.log('1')

    setTimeout(function() {
        console.log('2')
        resolve() 
        // NOTE: when this resolve() fn is called then only the cb present in promise.then(cb) is pushed into the microtask queue.
    }, 1000)
})

promise.then(() => {
    console.log('promise resolved')
})
.catch(() => {

})

console.log('end of the program')


// output:
// 1 -> end of the program -> (now micro task queue is empty and task queue is filled to 2 operations) -> 0 -> 2 -> promise resolved


```



1. Promise: ia an `object` representing the eventual completion (or failure) of an asynchronous operation and it's resulting value.
    - States of Promise: pending, resolved, completed

2.  When the resolve() fn is called then only the cb present in promise.then(cb) is pushed into the microtask queue. we can also send some data to the call back function using resolve(data i.e object/array/string,etc..)

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

8. 
``` javascript

// A fetch() promise only rejects when a network error is encountered (which is usually when there is a permission issue or similar). A fetch() promise doesn't reject on HTTP errors (404, etc). Instead a .then() handler must check the Response.ok and/or Response.status properties. 

//   NOTE: i.e if Network request could be made then : then returned data (could also be a 404 error) is handled by .then() only. && if network request couldn't be made then error is handled by .catch();

```