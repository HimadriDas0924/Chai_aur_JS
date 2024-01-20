// Immediately Involved Function Expression:

    // Functions being present in global scope, sometimes get polluted due to another same name fn being present: so we immediately invoke them after creation

    // eg: function to connnect the DB to server -> which has to be called immediately && cannot be risked to be polluted

    // IIFE: indicate termination of the fn call using ';'
        // else you won't be able to write 2 iife

    // can also use Arrow Function

(function chai() {
    // named IIFE
    console.log('DB connected');
})();


((name) => {
    // normal IIFE
    console.log(`DB connected 2 ${name}`);
})('himadri')