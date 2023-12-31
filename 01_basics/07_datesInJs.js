// Dates

let myDate = new Date() // object => time from 1st jan 1970 till now in ms

// all the below methods return a 'STRING'

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString()); // o/p: day month date year
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString()); // o/p: date 
// console.log(myDate.toLocaleString()); // o/p: date + time


// to create a Date Object of a particular date

let myCreatedDate = new Date(2023, 0, 23) // (year, month(0..11), date)

// console.log(myCreatedDate.toDateString()); // o/p: mon jan 23 2023

let myCreatedDate2 = new Date(2023, 0, 23, 13, 23) // (yr, month, date, hr, min)
// console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2023-01-23") // yr month date
let myCreatedDate4 = new Date("01-23-2023") // month date yr

// console.log(myCreatedDate4.toLocaleDateString());

/* 
    TimeStamps:
    - USECASE => eg: if we're creating a poll game => whoever with the lesser timestamps would be winner
        => or a hotle booking app/ irctc train booking => whoever has booked first => will get the room/seat
*/

let myTimeStamp = Date.now(); // get the time from 1st jan 1970 till now in ms

// console.log(myTimeStamp); // number
// console.log(myCreatedDate4.getTime());  // number

/* we can compare number to know who booked faster */

// to convert 'ms' into 'seconds => /= 1000'

// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date() // date object => date prototype avl
let newDate2 = Date.now() // number => number prototype avl

// console.log(typeof newDate);
// console.log(typeof newDate2);

// console.log(newDate.toDateString());
// console.log(newDate.toLocaleString());

// console.log(newDate.getDate());
// console.log(newDate.getDay()); // 0 based
// console.log(newDate.getMonth()); // 0 based
// console.log(newDate.getHours());


/* 
    NOTE:
    - Date.toLocaleString() can be further configured
*/

console.log(newDate.toLocaleString("default", {
    weekday: 'long'
}));