const accountId = 134232 // cannot be changed
let accountEmail = "himadridas@gmail.com" // can be changed
var accountPassword = "12345" // can be changed

accountCity = "Dhanbad" /* it's called "implicit global variable declaration", it works exactly like "var" => i.e hoisted globally out of block and functional scope */
let accountState

// accountId = 2

accountEmail = "himadridas2@gmail.com"
accountPassword = "9987"
accountCity = "Bangaluru"

/* 
    prefer not to use var bcz of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) // lets you print multiple things in a tabular format