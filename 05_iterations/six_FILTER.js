const coding = ["js", "ruby", "java", "python", "cpp"]

// const value = coding.forEach((item) => {
//     console.log(item); 
// })

// console.log(value); // undefined > bcz Array.forEach() doesn't return any value

// then what to do on situations when "during traversing, if certain conditions are met: we want to return smt" ?

    // IMP:
    // in array we can use the Array_Name.filter(cb) method > which elements of Array that meets the condition in cb
        // NOTE: FILTER: returns a shallow copy of the array containing all the elem that passes the condition

const myNums = [1,2,3,4,5,6,7,8,9,10]

let whatItReturns = myNums.filter((item) => {
    return true // condition here is TRUE: so all array elem are returned
}) 
// console.log(whatItReturns);

let newNums1 = myNums.filter((item) => {
    return item > 4 // return the item into newNums when condition is true
})

// console.log(newNums1);

// we can do smt similar with ArrayName.forEach()

let newNums2 = []

myNums.forEach((num) => {
    if(num > 4) {
        newNums2.push(num)
    }
})
// console.log(newNums2);

// applications of array_name.filter(cb):

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// get all the book objects whose genre is history
    // using array.filter() we can get all the array elem that passes condn

let userBooks = books.filter((bk) => bk.genre == 'History') // NOTE: automatically return those elem which satisfy condtn: if you open a {} use return keyword, else it doesn't return anything

// get all books published after 2000

userBooks = books.filter((bk) => bk.publish >= 1995 && bk.genre == 'History')

console.log(userBooks);